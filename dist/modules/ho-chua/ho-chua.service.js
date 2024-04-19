"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoChuaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ho_chua_entity_1 = require("./entities/ho-chua.entity");
const text_helper_1 = require("../../common/text.helper");
let HoChuaService = class HoChuaService {
    constructor(hoChuaResposity, administrativeUnitService) {
        this.hoChuaResposity = hoChuaResposity;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createHoChuaDto) {
        try {
            let { administrativeUnitId } = createHoChuaDto, Info = __rest(createHoChuaDto, ["administrativeUnitId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
                    data: null
                });
            }
            if (createHoChuaDto.toaDo) {
                const toaDoString = createHoChuaDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.hoChuaResposity.create(Object.assign({ administrativeUnit }, Info));
            let hoChua = await this.hoChuaResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "Thêm mới thành công",
                data: hoChua
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        return (0, text_helper_1.resultData)({
            statusCode: 200,
            message: "Thành công",
            data: await this.hoChuaResposity.find({ relations: ['administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.hoChuaResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let hoChua = await this.findOne(id);
            if (!hoChua) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: null
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Tìm thành công",
                    data: hoChua
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateHoChuaDto) {
        try {
            let hoChua = await this.findOne(id);
            if (!hoChua) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                });
            }
            else {
                let { administrativeUnitId } = updateHoChuaDto, Info = __rest(updateHoChuaDto, ["administrativeUnitId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
                    });
                }
                if (updateHoChuaDto.toaDo) {
                    const toaDoString = updateHoChuaDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.hoChuaResposity.update(id, Object.assign(Object.assign({}, Info), { administrativeUnit }));
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: 'Sửa Thành công',
                    data: await this.findOne(id)
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async remove(id) {
        try {
            let hoChua = await this.findOne(id);
            if (!hoChua) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id = " + id,
                });
            }
            else {
                await this.hoChuaResposity.delete(id);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Xóa thành công",
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
HoChuaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ho_chua_entity_1.HoChua)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService])
], HoChuaService);
exports.HoChuaService = HoChuaService;
//# sourceMappingURL=ho-chua.service.js.map