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
exports.SanXuatVatNuoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const typeorm_2 = require("typeorm");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const san_xuat_vat_nuoi_entity_1 = require("./entities/san-xuat-vat-nuoi.entity");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let SanXuatVatNuoiService = class SanXuatVatNuoiService {
    constructor(SanXuatVatNuoiResposity, caNhanHtxService, vatNuoiService, kyBaoCaoService) {
        this.SanXuatVatNuoiResposity = SanXuatVatNuoiResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.vatNuoiService = vatNuoiService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createSanXuatVatNuoiDto) {
        try {
            let { caNhanHtxId, vatNuoiId, kyBaoCaoId } = createSanXuatVatNuoiDto, Info = __rest(createSanXuatVatNuoiDto, ["caNhanHtxId", "vatNuoiId", "kyBaoCaoId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createSanXuatVatNuoiDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx || !vatNuoi || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc vatNuoiId",
                    data: null
                });
            }
            if (createSanXuatVatNuoiDto.toaDo) {
                const toaDoString = createSanXuatVatNuoiDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.SanXuatVatNuoiResposity.create(Object.assign({ caNhanHtx, vatNuoi, kyBaoCao }, Info));
            let createSXVatNuoi = await this.SanXuatVatNuoiResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createSXVatNuoi
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
            data: await this.SanXuatVatNuoiResposity.find({ relations: ['caNhanHtx', 'vatNuoi', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.SanXuatVatNuoiResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'vatNuoi', 'kyBaoCao'] });
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
    async update(id, updateSanXuatVatNuoiDto) {
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
                let { caNhanHtxId, vatNuoiId, kyBaoCaoId } = updateSanXuatVatNuoiDto, Info = __rest(updateSanXuatVatNuoiDto, ["caNhanHtxId", "vatNuoiId", "kyBaoCaoId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateSanXuatVatNuoiDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!caNhanHtx || !vatNuoi || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc vatNuoiId",
                        data: null
                    });
                }
                if (updateSanXuatVatNuoiDto.toaDo) {
                    const toaDoString = updateSanXuatVatNuoiDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.SanXuatVatNuoiResposity.update(id, Object.assign({ caNhanHtx, vatNuoi, kyBaoCao }, Info));
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
    async deleteSanXuatVN(id) {
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
                await this.SanXuatVatNuoiResposity.delete(id);
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
SanXuatVatNuoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(san_xuat_vat_nuoi_entity_1.SanXuatVatNuoi)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        vat_nuoi_service_1.VatNuoiService,
        ky_bao_cao_service_1.KyBaoCaoService])
], SanXuatVatNuoiService);
exports.SanXuatVatNuoiService = SanXuatVatNuoiService;
//# sourceMappingURL=san-xuat-vat-nuoi.service.js.map