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
exports.DienTichTuoiTieuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const dien_tich_tuoi_tieu_entity_1 = require("./entities/dien-tich-tuoi-tieu.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const text_helper_1 = require("../../common/text.helper");
let DienTichTuoiTieuService = class DienTichTuoiTieuService {
    constructor(stuoiTieuResposity, administrativeUnitService, cropTypeService) {
        this.stuoiTieuResposity = stuoiTieuResposity;
        this.administrativeUnitService = administrativeUnitService;
        this.cropTypeService = cropTypeService;
    }
    async create(createDienTichTuoiTieuDto) {
        try {
            let { administrativeUnitId, cropTypeId } = createDienTichTuoiTieuDto, Info = __rest(createDienTichTuoiTieuDto, ["administrativeUnitId", "cropTypeId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let cropType = await this.cropTypeService.findOne(cropTypeId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
                    data: null
                });
            }
            else if (!cropType) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy loại cây trồng nào có id = " + cropTypeId,
                    data: null
                });
            }
            if (createDienTichTuoiTieuDto.toaDo) {
                const toaDoString = createDienTichTuoiTieuDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.stuoiTieuResposity.create(Object.assign({ administrativeUnit, cropType }, Info));
            let cong = await this.stuoiTieuResposity.save(newData);
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
            data: await this.stuoiTieuResposity.find({ relations: ['administrativeUnit', 'cropType'] })
        });
    }
    async findOne(id) {
        return await this.stuoiTieuResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'cropType'] });
    }
    async getOne(id) {
        try {
            let stuoiTieu = await this.findOne(id);
            if (!stuoiTieu) {
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
                    data: stuoiTieu
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateDienTichTuoiTieuDto) {
        try {
            let cong = await this.findOne(id);
            if (!cong) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                });
            }
            else {
                let { administrativeUnitId, cropTypeId } = updateDienTichTuoiTieuDto, Info = __rest(updateDienTichTuoiTieuDto, ["administrativeUnitId", "cropTypeId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let cropType = await this.cropTypeService.findOne(cropTypeId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy đơn vị hành chính có id= " + administrativeUnitId,
                    });
                }
                else if (!cropType) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy cây trồng có id= " + cropType,
                    });
                }
                if (updateDienTichTuoiTieuDto.toaDo) {
                    const toaDoString = updateDienTichTuoiTieuDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.stuoiTieuResposity.update(id, Object.assign(Object.assign({}, Info), { administrativeUnit, cropType }));
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
            let stuoiTieu = await this.findOne(id);
            if (!stuoiTieu) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                });
            }
            else {
                await this.stuoiTieuResposity.delete(id);
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
DienTichTuoiTieuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(dien_tich_tuoi_tieu_entity_1.DienTichTuoiTieu)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService,
        crop_type_service_1.CropTypeService])
], DienTichTuoiTieuService);
exports.DienTichTuoiTieuService = DienTichTuoiTieuService;
//# sourceMappingURL=dien-tich-tuoi-tieu.service.js.map