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
exports.BenhVatNuoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const benh_vat_nuoi_entity_1 = require("./entities/benh-vat-nuoi.entity");
const typeorm_2 = require("typeorm");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const loai_benh_service_1 = require("../loai-benh/loai-benh.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let BenhVatNuoiService = class BenhVatNuoiService {
    constructor(BenhVatNuoiResposity, vatNuoiService, loaiBenhService, administrativeUnitService, kyBaoCaoService) {
        this.BenhVatNuoiResposity = BenhVatNuoiResposity;
        this.vatNuoiService = vatNuoiService;
        this.loaiBenhService = loaiBenhService;
        this.administrativeUnitService = administrativeUnitService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createBenhVatNuoiDto) {
        try {
            let { vatNuoiId, loaiBenhId, administrativeUnitId, kyBaoCaoId } = createBenhVatNuoiDto, Info = __rest(createBenhVatNuoiDto, ["vatNuoiId", "loaiBenhId", "administrativeUnitId", "kyBaoCaoId"]);
            let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
            let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['diaChi', 'nguyenNhan', 'dienTich', 'ngayGhiNhan', 'vatNuoiId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createBenhVatNuoiDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!vatNuoi || !administrativeUnit || !loaiBenh || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại vatNuoiId loaiBenhId donvihanhchinhId kyBaoCaoId",
                    data: null
                });
            }
            if (createBenhVatNuoiDto.toaDo) {
                const toaDoString = createBenhVatNuoiDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.BenhVatNuoiResposity.create(Object.assign({ vatNuoi, loaiBenh, administrativeUnit, kyBaoCao }, Info));
            let createBenhVatNuoi = await this.BenhVatNuoiResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createBenhVatNuoi
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
            data: await this.BenhVatNuoiResposity.find({ relations: ['vatNuoi', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.BenhVatNuoiResposity.findOne({ where: { id: id }, relations: ['vatNuoi', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let benhVatNuoi = await this.findOne(id);
            if (!benhVatNuoi) {
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
                    data: benhVatNuoi
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateBenhVatNuoiDto) {
        try {
            let benhVatNuoi = await this.findOne(id);
            if (!benhVatNuoi) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { vatNuoiId, loaiBenhId, administrativeUnitId, kyBaoCaoId } = updateBenhVatNuoiDto, Info = __rest(updateBenhVatNuoiDto, ["vatNuoiId", "loaiBenhId", "administrativeUnitId", "kyBaoCaoId"]);
                let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
                let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['diaChi', 'nguyenNhan', 'dienTich', 'ngayGhiNhan', 'vatNuoiId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateBenhVatNuoiDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!vatNuoi || !administrativeUnit || !loaiBenh || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại vatNuoiId loaiBenhId donvihanhchinhId kyBaoCaoId",
                        data: null
                    });
                }
                if (updateBenhVatNuoiDto.toaDo) {
                    const toaDoString = updateBenhVatNuoiDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.BenhVatNuoiResposity.update(id, Object.assign({ vatNuoi, loaiBenh, administrativeUnit, kyBaoCao }, Info));
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
    async deleteBenhVatNuoi(id) {
        try {
            let benhVatNuoi = await this.findOne(id);
            if (!benhVatNuoi) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: benhVatNuoi
                });
            }
            else {
                await this.BenhVatNuoiResposity.delete(id);
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
BenhVatNuoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(benh_vat_nuoi_entity_1.BenhVatNuoi)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        vat_nuoi_service_1.VatNuoiService,
        loai_benh_service_1.LoaiBenhService,
        administrative_unit_service_1.AdministrativeUnitService,
        ky_bao_cao_service_1.KyBaoCaoService])
], BenhVatNuoiService);
exports.BenhVatNuoiService = BenhVatNuoiService;
//# sourceMappingURL=benh-vat-nuoi.service.js.map