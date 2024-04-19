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
exports.CaNhanHtxService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ca_nhan_htx_entity_1 = require("./entities/ca-nhan-htx.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
let CaNhanHtxService = class CaNhanHtxService {
    constructor(CaNhanHtxResposity, administrativeUnitService) {
        this.CaNhanHtxResposity = CaNhanHtxResposity;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createCaNhanHtxDto) {
        try {
            let { administrativeUnitId } = createCaNhanHtxDto, hopTacXaInfo = __rest(createCaNhanHtxDto, ["administrativeUnitId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let arrInput = ['administrativeUnitId', 'name', 'sdt', 'address', 'moTa', 'linhVucHoatDong', 'hinhAnh', 'ngayThanhLap', 'loaiHinh', 'soNguoi', 'trangThai', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createCaNhanHtxDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!administrativeUnit) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
                });
            }
            if (createCaNhanHtxDto.toaDo) {
                const toaDoString = createCaNhanHtxDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let hopTacXa = this.CaNhanHtxResposity.create(Object.assign({ administrativeUnit }, hopTacXaInfo));
            let createCaNhanHtx = await this.CaNhanHtxResposity.save(hopTacXa);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createCaNhanHtx
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
            data: await this.CaNhanHtxResposity.find({ relations: ['administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.CaNhanHtxResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let hTXOne = await this.CaNhanHtxResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
            if (!hTXOne) {
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
                    data: hTXOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateCaNhanHtxDto) {
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
                let { administrativeUnitId } = updateCaNhanHtxDto, hopTacXaInfo = __rest(updateCaNhanHtxDto, ["administrativeUnitId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let arrInput = ['administrativeUnitId', 'name', 'sdt', 'address', 'moTa', 'linhVucHoatDong', 'hinhAnh', 'ngayThanhLap', 'loaiHinh', 'soNguoi', 'trangThai', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateCaNhanHtxDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!administrativeUnit) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
                        data: null
                    });
                }
                if (updateCaNhanHtxDto.toaDo) {
                    const toaDoString = updateCaNhanHtxDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.CaNhanHtxResposity.update(id, Object.assign(Object.assign({}, hopTacXaInfo), { administrativeUnit }));
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
    async deleteHtx(id) {
        try {
            let htx = await this.findOne(id);
            if (!htx) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: htx
                });
            }
            else {
                await this.CaNhanHtxResposity.delete(id);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Xóa thành công",
                });
            }
        }
        catch (e) {
            if (e.errno === 1451) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Bạn không thể xóa vì có ràng buộc khóa ngoại. Hãy xóa dữ liệu có liên kết",
                });
            }
            console.log(e);
        }
    }
};
CaNhanHtxService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ca_nhan_htx_entity_1.CaNhanHtx)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService])
], CaNhanHtxService);
exports.CaNhanHtxService = CaNhanHtxService;
//# sourceMappingURL=ca-nhan-htx.service.js.map