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
exports.TauCaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tau_ca_entity_1 = require("./entities/tau-ca.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const text_helper_1 = require("../../common/text.helper");
let TauCaService = class TauCaService {
    constructor(tauCaRepository, administrativeUnitService, caNhanHtxService) {
        this.tauCaRepository = tauCaRepository;
        this.administrativeUnitService = administrativeUnitService;
        this.caNhanHtxService = caNhanHtxService;
    }
    async create(createTauCaDto) {
        try {
            let { administrativeUnitId, caNhanHTXId } = createTauCaDto, Info = __rest(createTauCaDto, ["administrativeUnitId", "caNhanHTXId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let caNhanHTX = await this.caNhanHtxService.findOne(caNhanHTXId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
                    data: null
                });
            }
            else if (!caNhanHTX) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy hợp tác nào có id = " + caNhanHTXId,
                    data: null
                });
            }
            if (createTauCaDto.toaDo) {
                const toaDoString = createTauCaDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.tauCaRepository.create(Object.assign({ administrativeUnit, caNhanHTX }, Info));
            let cong = await this.tauCaRepository.save(newData);
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
            data: await this.tauCaRepository.find({ relations: ['administrativeUnit', 'caNhanHTX'] })
        });
    }
    async findOne(id) {
        return await this.tauCaRepository.findOne({ where: { id: id }, relations: ['administrativeUnit', 'caNhanHTX'] });
    }
    async getOne(id) {
        try {
            let tauCa = await this.findOne(id);
            if (!tauCa) {
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
                    data: tauCa
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateTauCaDto) {
        try {
            let cong = await this.findOne(id);
            if (!cong) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                });
            }
            else {
                let { administrativeUnitId, caNhanHTXId } = updateTauCaDto, Info = __rest(updateTauCaDto, ["administrativeUnitId", "caNhanHTXId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let caNhanHTX = await this.caNhanHtxService.findOne(caNhanHTXId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy đơn vị hành chính có id= " + administrativeUnitId,
                    });
                }
                else if (!caNhanHTX) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy hợp tác xã có id= " + caNhanHTXId,
                    });
                }
                if (updateTauCaDto.toaDo) {
                    const toaDoString = updateTauCaDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.tauCaRepository.update(id, Object.assign(Object.assign({}, Info), { caNhanHTX, administrativeUnit }));
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
                await this.tauCaRepository.delete(id);
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
TauCaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tau_ca_entity_1.TauCa)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService,
        ca_nhan_htx_service_1.CaNhanHtxService])
], TauCaService);
exports.TauCaService = TauCaService;
//# sourceMappingURL=tau-ca.service.js.map