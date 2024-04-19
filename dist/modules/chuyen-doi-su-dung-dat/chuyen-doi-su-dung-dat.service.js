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
exports.ChuyenDoiSuDungDatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chuyen_doi_su_dung_dat_entity_1 = require("./entities/chuyen-doi-su-dung-dat.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
const hinh_thuc_chuyen_doi_dat_service_1 = require("../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.service");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let ChuyenDoiSuDungDatService = class ChuyenDoiSuDungDatService {
    constructor(ChuyenDoiSuDungDatResposity, hinhThucChuyenDoiDatService, administrativeUnitService, kyBaoCaoService) {
        this.ChuyenDoiSuDungDatResposity = ChuyenDoiSuDungDatResposity;
        this.hinhThucChuyenDoiDatService = hinhThucChuyenDoiDatService;
        this.administrativeUnitService = administrativeUnitService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createChuyenDoiSuDungDatDto) {
        try {
            let { administrativeUnitId, hinhThucChuyenDoiDatId, kyBaoCaoId } = createChuyenDoiSuDungDatDto, Info = __rest(createChuyenDoiSuDungDatDto, ["administrativeUnitId", "hinhThucChuyenDoiDatId", "kyBaoCaoId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let hinhThucChuyenDoiDat = await this.hinhThucChuyenDoiDatService.findOne(hinhThucChuyenDoiDatId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['moTa', 'diaChi', 'dienTich', 'ngayChuyenDoi', 'administrativeUnitId', 'hinhThucChuyenDoiDatId', 'kyBaoCaoId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createChuyenDoiSuDungDatDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!administrativeUnit || !hinhThucChuyenDoiDat || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId, kyBaoCaoId hoặc hinhThucChuyenDoiDatId",
                });
            }
            if (createChuyenDoiSuDungDatDto.toaDo) {
                const toaDoString = createChuyenDoiSuDungDatDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.ChuyenDoiSuDungDatResposity.create(Object.assign({ administrativeUnit, hinhThucChuyenDoiDat, kyBaoCao }, Info));
            let createCDDat = await this.ChuyenDoiSuDungDatResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createCDDat
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
            data: await this.ChuyenDoiSuDungDatResposity.find({ relations: ['administrativeUnit', 'hinhThucChuyenDoiDat', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.ChuyenDoiSuDungDatResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'hinhThucChuyenDoiDat', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let chuyenDoiDatOne = await this.findOne(id);
            if (!chuyenDoiDatOne) {
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
                    data: chuyenDoiDatOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateChuyenDoiSuDungDatDto) {
        try {
            let chuyenDoiDatOne = await this.findOne(id);
            if (!chuyenDoiDatOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { administrativeUnitId, hinhThucChuyenDoiDatId, kyBaoCaoId } = updateChuyenDoiSuDungDatDto, Info = __rest(updateChuyenDoiSuDungDatDto, ["administrativeUnitId", "hinhThucChuyenDoiDatId", "kyBaoCaoId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let hinhThucChuyenDoiDat = await this.hinhThucChuyenDoiDatService.findOne(hinhThucChuyenDoiDatId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['moTa', 'diaChi', 'dienTich', 'ngayChuyenDoi', 'administrativeUnitId', 'kyBaoCaoId', 'hinhThucChuyenDoiDatId', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateChuyenDoiSuDungDatDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!administrativeUnit || !hinhThucChuyenDoiDat || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId, kyBaoCaoId hoặc hinhThucChuyenDoiDatId",
                        data: null
                    });
                }
                if (updateChuyenDoiSuDungDatDto.toaDo) {
                    const toaDoString = updateChuyenDoiSuDungDatDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.ChuyenDoiSuDungDatResposity.update(id, Object.assign(Object.assign({}, Info), { administrativeUnit, hinhThucChuyenDoiDat, kyBaoCao }));
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
    async deleteChuyenDoiDat(id) {
        try {
            let chuyenDoiDatOne = await this.findOne(id);
            if (!chuyenDoiDatOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: chuyenDoiDatOne
                });
            }
            else {
                await this.ChuyenDoiSuDungDatResposity.delete(id);
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
ChuyenDoiSuDungDatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chuyen_doi_su_dung_dat_entity_1.ChuyenDoiSuDungDat)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        hinh_thuc_chuyen_doi_dat_service_1.HinhThucChuyenDoiDatService,
        administrative_unit_service_1.AdministrativeUnitService,
        ky_bao_cao_service_1.KyBaoCaoService])
], ChuyenDoiSuDungDatService);
exports.ChuyenDoiSuDungDatService = ChuyenDoiSuDungDatService;
//# sourceMappingURL=chuyen-doi-su-dung-dat.service.js.map