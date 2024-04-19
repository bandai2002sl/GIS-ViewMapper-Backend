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
exports.CongService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cong_entity_1 = require("./entities/cong.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let CongService = class CongService {
    constructor(congResposity, administrativeUnitService) {
        this.congResposity = congResposity;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createCongDto) {
        try {
            let { administrativeUnitId } = createCongDto, Info = __rest(createCongDto, ["administrativeUnitId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
                    data: null
                });
            }
            if (createCongDto.toaDo) {
                const toaDoString = createCongDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.congResposity.create(Object.assign({ administrativeUnit }, Info));
            let cong = await this.congResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "Thêm mới thành công",
                data: cong
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
            data: await this.congResposity.find({ relations: ['administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.congResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let cong = await this.congResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
            if (!cong) {
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
                    data: cong
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateCongDto) {
        try {
            let cong = await this.findOne(id);
            if (!cong) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                });
            }
            else {
                let { administrativeUnitId } = updateCongDto, Info = __rest(updateCongDto, ["administrativeUnitId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
                    });
                }
                if (updateCongDto.toaDo) {
                    const toaDoString = updateCongDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.congResposity.update(id, Object.assign(Object.assign({}, Info), { administrativeUnit }));
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
            let cong = await this.findOne(id);
            if (!cong) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                });
            }
            else {
                await this.congResposity.delete(id);
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
CongService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cong_entity_1.Cong)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService])
], CongService);
exports.CongService = CongService;
//# sourceMappingURL=cong.service.js.map