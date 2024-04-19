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
exports.CoSoCheBienService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_che_bien_entity_1 = require("./entities/co-so-che-bien.entity");
const typeorm_2 = require("typeorm");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let CoSoCheBienService = class CoSoCheBienService {
    constructor(CoSoCheBienResposity, caNhanHtxService, administrativeUnitService, kyBaoCaoService) {
        this.CoSoCheBienResposity = CoSoCheBienResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.administrativeUnitService = administrativeUnitService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createCoSoCheBienDto) {
        try {
            let { caNhanHtxId, administrativeUnitId, kyBaoCaoId } = createCoSoCheBienDto, Info = __rest(createCoSoCheBienDto, ["caNhanHtxId", "administrativeUnitId", "kyBaoCaoId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['diaChi', 'loaiCheBien', 'moTa', 'hinhAnh', 'trangThai', 'caNhanHtxId', 'administrativeUnitId', 'kyBaoCaoId', 'CoGCNATTP', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createCoSoCheBienDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx || !administrativeUnit || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc donvihanhchinhId",
                    data: null
                });
            }
            if (createCoSoCheBienDto.toaDo) {
                const toaDoString = createCoSoCheBienDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.CoSoCheBienResposity.create(Object.assign({ caNhanHtx, administrativeUnit, kyBaoCao }, Info));
            let createCheBien = await this.CoSoCheBienResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createCheBien
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
            data: await this.CoSoCheBienResposity.find({ relations: ['caNhanHtx', 'administrativeUnit', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.CoSoCheBienResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'administrativeUnit', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let cheBienOne = await this.findOne(id);
            if (!cheBienOne) {
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
                    data: cheBienOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateCoSoCheBienDto) {
        try {
            let cheBienOne = await this.findOne(id);
            if (!cheBienOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { caNhanHtxId, administrativeUnitId, kyBaoCaoId } = updateCoSoCheBienDto, Info = __rest(updateCoSoCheBienDto, ["caNhanHtxId", "administrativeUnitId", "kyBaoCaoId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['diaChi', 'loaiCheBien', 'moTa', 'hinhAnh', 'trangThai', 'caNhanHtxId', 'administrativeUnitId', 'kyBaoCaoId', 'CoGCNATTP', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateCoSoCheBienDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!caNhanHtx || !administrativeUnit || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
                        data: null
                    });
                }
                if (updateCoSoCheBienDto.toaDo) {
                    const toaDoString = updateCoSoCheBienDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.CoSoCheBienResposity.update(id, Object.assign(Object.assign({}, Info), { caNhanHtx, administrativeUnit, kyBaoCao }));
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
    async deleteCheBien(id) {
        try {
            let cheBienOne = await this.findOne(id);
            if (!cheBienOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: cheBienOne
                });
            }
            else {
                await this.CoSoCheBienResposity.delete(id);
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
CoSoCheBienService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(co_so_che_bien_entity_1.CoSoCheBien)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        administrative_unit_service_1.AdministrativeUnitService,
        ky_bao_cao_service_1.KyBaoCaoService])
], CoSoCheBienService);
exports.CoSoCheBienService = CoSoCheBienService;
//# sourceMappingURL=co-so-che-bien.service.js.map