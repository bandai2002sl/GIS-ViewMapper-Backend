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
exports.MoHinhCongNgheCaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mo_hinh_cong_nghe_cao_entity_1 = require("./entities/mo-hinh-cong-nghe-cao.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const text_helper_1 = require("../../common/text.helper");
let MoHinhCongNgheCaoService = class MoHinhCongNgheCaoService {
    constructor(MoHinhCongNgheCaoResposity, caNhanHtxService, administrativeUnitService) {
        this.MoHinhCongNgheCaoResposity = MoHinhCongNgheCaoResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createMoHinhCongNgheCaoDto) {
        try {
            let { caNhanHtxId, administrativeUnitId } = createMoHinhCongNgheCaoDto, Info = __rest(createMoHinhCongNgheCaoDto, ["caNhanHtxId", "administrativeUnitId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let arrInput = ['administrativeUnitId', 'caNhanHtxId', 'address', 'moTa', 'dienTich', 'congNgheSuDung', 'trangThai'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createMoHinhCongNgheCaoDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx || !administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId hoặc donvihanhchinhId",
                    data: null
                });
            }
            else {
                let moHinhCNC = this.MoHinhCongNgheCaoResposity.create(Object.assign({ caNhanHtx, administrativeUnit }, Info));
                let createMoHinhCNC = await this.MoHinhCongNgheCaoResposity.save(moHinhCNC);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "thêm mới thành công",
                    data: createMoHinhCNC
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        return (0, text_helper_1.resultData)({
            statusCode: 200,
            message: "thành công",
            data: await this.MoHinhCongNgheCaoResposity.find({ relations: ['caNhanHtx', 'administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.MoHinhCongNgheCaoResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let moHinhCNCOne = await this.MoHinhCongNgheCaoResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit'] });
            if (!moHinhCNCOne) {
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
                    data: moHinhCNCOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateMoHinhCongNgheCaoDto) {
        try {
            let moHinhCNCOne = await this.findOne(id);
            if (!moHinhCNCOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { caNhanHtxId, administrativeUnitId } = updateMoHinhCongNgheCaoDto, Info = __rest(updateMoHinhCongNgheCaoDto, ["caNhanHtxId", "administrativeUnitId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let arrInput = ['administrativeUnitId', 'caNhanHtxId', 'address', 'moTa', 'dienTich', 'congNgheSuDung', 'trangThai'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateMoHinhCongNgheCaoDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!caNhanHtx || !administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId hoặc donvihanhchinhId",
                        data: null
                    });
                }
                else {
                    await this.MoHinhCongNgheCaoResposity.update(id, Object.assign(Object.assign({}, Info), { caNhanHtx, administrativeUnit }));
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
    async deleteMoHinhCNC(id) {
        try {
            let moHinhCNCOne = await this.findOne(id);
            if (!moHinhCNCOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: moHinhCNCOne
                });
            }
            else {
                await this.MoHinhCongNgheCaoResposity.delete(id);
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
MoHinhCongNgheCaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mo_hinh_cong_nghe_cao_entity_1.MoHinhCongNgheCao)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        administrative_unit_service_1.AdministrativeUnitService])
], MoHinhCongNgheCaoService);
exports.MoHinhCongNgheCaoService = MoHinhCongNgheCaoService;
//# sourceMappingURL=mo-hinh-cong-nghe-cao.service.js.map