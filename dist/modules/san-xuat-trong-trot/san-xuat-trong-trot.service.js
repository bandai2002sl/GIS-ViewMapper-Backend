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
exports.SanXuatTrongTrotService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const san_xuat_trong_trot_entity_1 = require("./entities/san-xuat-trong-trot.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let SanXuatTrongTrotService = class SanXuatTrongTrotService {
    constructor(SanXuatTrongTrotResposity, cropTypeService, administrativeUnitService, kyBaoCaoService) {
        this.SanXuatTrongTrotResposity = SanXuatTrongTrotResposity;
        this.cropTypeService = cropTypeService;
        this.administrativeUnitService = administrativeUnitService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createSanXuatTrongTrotDto) {
        try {
            let { cropTypeId, administrativeUnitId, kyBaoCaoId } = createSanXuatTrongTrotDto, Info = __rest(createSanXuatTrongTrotDto, ["cropTypeId", "administrativeUnitId", "kyBaoCaoId"]);
            let cropType = await this.cropTypeService.findOne(cropTypeId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'dienTichTrong', 'dienTichTrongMoi', 'dienTichChoSanPham', 'nangSuat', 'sanLuong', 'thoiDiemBaoCao', 'diaChi', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createSanXuatTrongTrotDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!cropType || !administrativeUnit || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
                    data: null
                });
            }
            if (createSanXuatTrongTrotDto.toaDo) {
                const toaDoString = createSanXuatTrongTrotDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.SanXuatTrongTrotResposity.create(Object.assign({ cropType, administrativeUnit, kyBaoCao }, Info));
            let createSanSuat = await this.SanXuatTrongTrotResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createSanSuat
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        return (0, text_helper_1.resultData)({
            statusCode: 200,
            message: "thành công",
            data: await this.SanXuatTrongTrotResposity.find({ relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.SanXuatTrongTrotResposity.findOne({ where: { id: id }, relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let sanXuatOne = await this.findOne(id);
            if (!sanXuatOne) {
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
                    data: sanXuatOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateSanXuatTrongTrotDto) {
        try {
            let sanXuatOne = await this.findOne(id);
            if (!sanXuatOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { cropTypeId, administrativeUnitId, kyBaoCaoId } = updateSanXuatTrongTrotDto, Info = __rest(updateSanXuatTrongTrotDto, ["cropTypeId", "administrativeUnitId", "kyBaoCaoId"]);
                let cropType = await this.cropTypeService.findOne(cropTypeId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'dienTichTrong', 'dienTichTrongMoi', 'dienTichChoSanPham', 'nangSuat', 'sanLuong', 'thoiDiemBaoCao', 'diaChi', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateSanXuatTrongTrotDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!cropType || !administrativeUnit || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
                        data: null
                    });
                }
                if (updateSanXuatTrongTrotDto.toaDo) {
                    const toaDoString = updateSanXuatTrongTrotDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.SanXuatTrongTrotResposity.update(id, Object.assign(Object.assign({}, Info), { cropType, administrativeUnit, kyBaoCao }));
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
    async deleteSanXuatTT(id) {
        try {
            let sanXuatOne = await this.findOne(id);
            if (!sanXuatOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: sanXuatOne
                });
            }
            else {
                await this.SanXuatTrongTrotResposity.delete(id);
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
SanXuatTrongTrotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(san_xuat_trong_trot_entity_1.SanXuatTrongTrot)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        crop_type_service_1.CropTypeService,
        administrative_unit_service_1.AdministrativeUnitService,
        ky_bao_cao_service_1.KyBaoCaoService])
], SanXuatTrongTrotService);
exports.SanXuatTrongTrotService = SanXuatTrongTrotService;
//# sourceMappingURL=san-xuat-trong-trot.service.js.map