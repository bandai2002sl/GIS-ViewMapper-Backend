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
exports.VungChanNuoiAnToanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vung_chan_nuoi_an_toan_entity_1 = require("./entities/vung-chan-nuoi-an-toan.entity");
const typeorm_2 = require("typeorm");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let VungChanNuoiAnToanService = class VungChanNuoiAnToanService {
    constructor(VungChanNuoiAnToanResposity, administrativeUnitService, vatNuoiService, kyBaoCaoService) {
        this.VungChanNuoiAnToanResposity = VungChanNuoiAnToanResposity;
        this.administrativeUnitService = administrativeUnitService;
        this.vatNuoiService = vatNuoiService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createVungChanNuoiAnToanDto) {
        try {
            let { administrativeUnitId, vatNuoiId, kyBaoCaoId } = createVungChanNuoiAnToanDto, Info = __rest(createVungChanNuoiAnToanDto, ["administrativeUnitId", "vatNuoiId", "kyBaoCaoId"]);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['name', 'diaChi', 'quyMo', 'moTa', 'ngayChungNhan', 'administrativeUnitId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createVungChanNuoiAnToanDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!administrativeUnit || !vatNuoi || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại administrativeUnitId, kyBaoCaoId hoặc vatNuoiId",
                    data: null
                });
            }
            if (createVungChanNuoiAnToanDto.toaDo) {
                const toaDoString = createVungChanNuoiAnToanDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.VungChanNuoiAnToanResposity.create(Object.assign({ administrativeUnit, vatNuoi, kyBaoCao }, Info));
            let createVungCN = await this.VungChanNuoiAnToanResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createVungCN
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
            data: await this.VungChanNuoiAnToanResposity.find({ relations: ['administrativeUnit', 'vatNuoi', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.VungChanNuoiAnToanResposity.findOne({ where: { id: id }, relations: ['administrativeUnit', 'vatNuoi', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let vungAnToanOne = await this.findOne(id);
            if (!vungAnToanOne) {
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
                    data: vungAnToanOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateVungChanNuoiAnToanDto) {
        try {
            let vungAnToanOne = await this.findOne(id);
            if (!vungAnToanOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { administrativeUnitId, vatNuoiId, kyBaoCaoId } = updateVungChanNuoiAnToanDto, Info = __rest(updateVungChanNuoiAnToanDto, ["administrativeUnitId", "vatNuoiId", "kyBaoCaoId"]);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['name', 'diaChi', 'quyMo', 'moTa', 'ngayChungNhan', 'administrativeUnitId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateVungChanNuoiAnToanDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!administrativeUnit || !vatNuoi || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại administrativeUnitId, kyBaoCaoId hoặc vatNuoiId",
                        data: null
                    });
                }
                if (updateVungChanNuoiAnToanDto.toaDo) {
                    const toaDoString = updateVungChanNuoiAnToanDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.VungChanNuoiAnToanResposity.update(id, Object.assign({ administrativeUnit, vatNuoi, kyBaoCao }, Info));
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
    async deleteVungAnToan(id) {
        try {
            let vungAnToanOne = await this.findOne(id);
            if (!vungAnToanOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: vungAnToanOne
                });
            }
            else {
                await this.VungChanNuoiAnToanResposity.delete(id);
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
VungChanNuoiAnToanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vung_chan_nuoi_an_toan_entity_1.VungChanNuoiAnToan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        administrative_unit_service_1.AdministrativeUnitService,
        vat_nuoi_service_1.VatNuoiService,
        ky_bao_cao_service_1.KyBaoCaoService])
], VungChanNuoiAnToanService);
exports.VungChanNuoiAnToanService = VungChanNuoiAnToanService;
//# sourceMappingURL=vung-chan-nuoi-an-toan.service.js.map