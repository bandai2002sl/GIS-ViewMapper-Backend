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
exports.SanXuatThuySanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const typeorm_2 = require("typeorm");
const thuy_san_service_1 = require("../thuy-san/thuy-san.service");
const san_xuat_thuy_san_entity_1 = require("./entities/san-xuat-thuy-san.entity");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let SanXuatThuySanService = class SanXuatThuySanService {
    constructor(SanXuatThuySanResposity, caNhanHtxService, ThuySanService, kyBaoCaoService) {
        this.SanXuatThuySanResposity = SanXuatThuySanResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.ThuySanService = ThuySanService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createSanXuatThuySanDto) {
        try {
            let { caNhanHtxId, thuySanId, kyBaoCaoId } = createSanXuatThuySanDto, Info = __rest(createSanXuatThuySanDto, ["caNhanHtxId", "thuySanId", "kyBaoCaoId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let thuySan = await this.ThuySanService.findOne(thuySanId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'thuySanId', 'kyBaoCaoId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createSanXuatThuySanDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Vui lòng kiểm tra lại caNhanHtxId",
                    data: null
                });
            }
            if (!thuySan) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Vui lòng kiểm tra lại thuySanId",
                    data: null
                });
            }
            if (!kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Vui lòng kiểm tra lại kyBaoCaoId",
                    data: null
                });
            }
            if (createSanXuatThuySanDto.toaDo) {
                const toaDoString = createSanXuatThuySanDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.SanXuatThuySanResposity.create(Object.assign({ caNhanHtx, thuySan, kyBaoCao }, Info));
            let createSXThuySan = await this.SanXuatThuySanResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createSXThuySan
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
            data: await this.SanXuatThuySanResposity.find({ relations: ['caNhanHtx', 'thuySan', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.SanXuatThuySanResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'thuySan', 'kyBaoCao'] });
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
    async update(id, updateSanXuatThuySanDto) {
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
                let { caNhanHtxId, thuySanId, kyBaoCaoId } = updateSanXuatThuySanDto, Info = __rest(updateSanXuatThuySanDto, ["caNhanHtxId", "thuySanId", "kyBaoCaoId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let thuySan = await this.ThuySanService.findOne(thuySanId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                if (!caNhanHtx || !thuySan || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc thuySanId",
                        data: null
                    });
                }
                if (updateSanXuatThuySanDto.toaDo) {
                    const toaDoString = updateSanXuatThuySanDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.SanXuatThuySanResposity.update(id, Object.assign({ caNhanHtx, thuySan, kyBaoCao }, Info));
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
    async deleteSanXuatTS(id) {
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
                await this.SanXuatThuySanResposity.delete(id);
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
SanXuatThuySanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(san_xuat_thuy_san_entity_1.SanXuatThuySan)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        thuy_san_service_1.ThuySanService,
        ky_bao_cao_service_1.KyBaoCaoService])
], SanXuatThuySanService);
exports.SanXuatThuySanService = SanXuatThuySanService;
//# sourceMappingURL=san-xuat-thuy-san.service.js.map