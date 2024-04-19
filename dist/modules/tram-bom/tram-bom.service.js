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
exports.TramBomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const tram_bom_entity_1 = require("./entities/tram-bom.entity");
const text_helper_1 = require("../../common/text.helper");
let TramBomService = class TramBomService {
    constructor(tramBomResposity, administrativeUnitService) {
        this.tramBomResposity = tramBomResposity;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createTramBomDto) {
        try {
            let { administrativeUnitId } = createTramBomDto, Info = __rest(createTramBomDto, ["administrativeUnitId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
                    data: null
                });
            }
            if (createTramBomDto.toaDo) {
                const toaDoString = createTramBomDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.tramBomResposity.create(Object.assign({ administrativeUnit }, Info));
            let tramBom = await this.tramBomResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "Thêm mới thành công",
                data: tramBom
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
            data: await this.tramBomResposity.find({ relations: ['administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.tramBomResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let tramBom = await this.findOne(id);
            if (!tramBom) {
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
                    data: tramBom
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateTramBomDto) {
        try {
            let cong = await this.findOne(id);
            if (!cong) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                });
            }
            else {
                let { administrativeUnitId } = updateTramBomDto, Info = __rest(updateTramBomDto, ["administrativeUnitId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
                    });
                }
                else {
                    await this.tramBomResposity.update(id, Object.assign(Object.assign({}, Info), { administrativeUnit }));
                    return (0, text_helper_1.resultData)({
                        statusCode: 200,
                        message: 'Sửa Thành công',
                        data: await this.findOne(id)
                    });
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async remove(id) {
        try {
            let tramBom = await this.findOne(id);
            if (!tramBom) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                });
            }
            else {
                await this.tramBomResposity.delete(id);
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
TramBomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tram_bom_entity_1.TramBom)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService])
], TramBomService);
exports.TramBomService = TramBomService;
//# sourceMappingURL=tram-bom.service.js.map