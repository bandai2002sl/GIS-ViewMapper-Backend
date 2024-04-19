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
exports.VungDonViHanhChinhService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vung_don_vi_hanh_chinh_entity_1 = require("./entities/vung-don-vi-hanh-chinh.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
let VungDonViHanhChinhService = class VungDonViHanhChinhService {
    constructor(VungDonViHanhChinhResposity, administrativeUnitService) {
        this.VungDonViHanhChinhResposity = VungDonViHanhChinhResposity;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createVungDonViHanhChinhDto) {
        try {
            let { administrativeUnitId, vung } = createVungDonViHanhChinhDto, Info = __rest(createVungDonViHanhChinhDto, ["administrativeUnitId", "vung"]);
            let arrInput = ['administrativeUnitId', 'moTa', 'vung'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createVungDonViHanhChinhDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!isValidMultiPolygon(vung)) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Dữ liệu vùng không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
                });
            }
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
                });
            }
            else {
                let vungHanhChinh = this.VungDonViHanhChinhResposity.create(Object.assign({ administrativeUnit, vung }, Info));
                let createvungHanhChinh = await this.VungDonViHanhChinhResposity.save(vungHanhChinh);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "thêm mới thành công",
                    data: createvungHanhChinh
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
            data: await this.VungDonViHanhChinhResposity.find({ relations: ['administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.VungDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let VungHCOne = await this.VungDonViHanhChinhResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
            if (!VungHCOne) {
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
                    data: VungHCOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateVungDonViHanhChinhDto) {
        try {
            let vungHCOne = await this.findOne(id);
            if (!vungHCOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { administrativeUnitId, vung } = updateVungDonViHanhChinhDto, Info = __rest(updateVungDonViHanhChinhDto, ["administrativeUnitId", "vung"]);
                let arrInput = ['administrativeUnitId', 'moTa', 'vung'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateVungDonViHanhChinhDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!isValidMultiPolygon(vung)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu vùng không hợp lệ! Bạn có thể nhập lại với MULTIPOLYGON(((0 0,0 1,1 1,1 0,0 0)))",
                    });
                }
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
                        data: null
                    });
                }
                else {
                    await this.VungDonViHanhChinhResposity.update(id, Object.assign(Object.assign({}, Info), { vung, administrativeUnit }));
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
    async deleteVungHC(id) {
        try {
            let vungHCOne = await this.findOne(id);
            if (!vungHCOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: vungHCOne
                });
            }
            else {
                await this.VungDonViHanhChinhResposity.delete(id);
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
VungDonViHanhChinhService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vung_don_vi_hanh_chinh_entity_1.VungDonViHanhChinh)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService])
], VungDonViHanhChinhService);
exports.VungDonViHanhChinhService = VungDonViHanhChinhService;
function isValidMultiPolygon(multiPolygon) {
    const regex = /^MULTIPOLYGON/i;
    return regex.test(multiPolygon);
}
//# sourceMappingURL=vung-don-vi-hanh-chinh.service.js.map