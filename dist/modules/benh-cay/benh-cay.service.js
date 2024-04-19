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
exports.BenhCayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const benh_cay_entity_1 = require("./entities/benh-cay.entity");
const typeorm_2 = require("typeorm");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const loai_benh_service_1 = require("../loai-benh/loai-benh.service");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let BenhCayService = class BenhCayService {
    constructor(BenhCayResposity, cropTypeService, loaiBenhService, administrativeUnitService, kyBaoCaoService) {
        this.BenhCayResposity = BenhCayResposity;
        this.cropTypeService = cropTypeService;
        this.loaiBenhService = loaiBenhService;
        this.administrativeUnitService = administrativeUnitService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createBenhCayDto) {
        try {
            let { cropTypeId, loaiBenhId, administrativeUnitId, kyBaoCaoId } = createBenhCayDto, Info = __rest(createBenhCayDto, ["cropTypeId", "loaiBenhId", "administrativeUnitId", "kyBaoCaoId"]);
            let cropType = await this.cropTypeService.findOne(cropTypeId);
            let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['cropTypeId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'diaChi', 'moTa', 'hinhAnh', 'dienTich', 'ngayGhiNhan', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createBenhCayDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!cropType || !administrativeUnit || !loaiBenh || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId loaiBenhId donvihanhchinhId kyBaoCaoId",
                    data: null
                });
            }
            if (createBenhCayDto.toaDo) {
                const toaDoString = createBenhCayDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.BenhCayResposity.create(Object.assign({ cropType, loaiBenh, administrativeUnit, kyBaoCao }, Info));
            let createBenhCay = await this.BenhCayResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createBenhCay
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
            data: await this.BenhCayResposity.find({ relations: ['cropType', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.BenhCayResposity.findOne({ where: { id: id }, relations: ['cropType', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let benhCay = await this.findOne(id);
            if (!benhCay) {
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
                    data: benhCay
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateBenhCayDto) {
        try {
            let benhCay = await this.findOne(id);
            if (!benhCay) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { cropTypeId, loaiBenhId, administrativeUnitId, kyBaoCaoId } = updateBenhCayDto, Info = __rest(updateBenhCayDto, ["cropTypeId", "loaiBenhId", "administrativeUnitId", "kyBaoCaoId"]);
                let cropType = await this.cropTypeService.findOne(cropTypeId);
                let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['cropTypeId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'diaChi', 'moTa', 'hinhAnh', 'dienTich', 'ngayGhiNhan', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateBenhCayDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!cropType || !administrativeUnit || !loaiBenh || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId loaiBenhId donvihanhchinhId kyBaoCaoId",
                        data: null
                    });
                }
                if (updateBenhCayDto.toaDo) {
                    const toaDoString = updateBenhCayDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.BenhCayResposity.update(id, Object.assign({ cropType, loaiBenh, administrativeUnit, kyBaoCao }, Info));
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
    async deleteBenhCay(id) {
        try {
            let benhCay = await this.findOne(id);
            if (!benhCay) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: benhCay
                });
            }
            else {
                await this.BenhCayResposity.delete(id);
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
BenhCayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(benh_cay_entity_1.BenhCay)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        crop_type_service_1.CropTypeService,
        loai_benh_service_1.LoaiBenhService,
        administrative_unit_service_1.AdministrativeUnitService,
        ky_bao_cao_service_1.KyBaoCaoService])
], BenhCayService);
exports.BenhCayService = BenhCayService;
//# sourceMappingURL=benh-cay.service.js.map