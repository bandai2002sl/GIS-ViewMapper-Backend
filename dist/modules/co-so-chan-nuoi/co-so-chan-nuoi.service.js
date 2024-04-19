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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoSoChanNuoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_chan_nuoi_entity_1 = require("./entities/co-so-chan-nuoi.entity");
const typeorm_2 = require("typeorm");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const hinh_thuc_chan_nuoi_service_1 = require("../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.service");
const text_helper_1 = require("../../common/text.helper");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let CoSoChanNuoiService = class CoSoChanNuoiService {
    constructor(CoSoChanNuoiResposity, caNhanHtxService, vatNuoiService, hinhThucChanNuoiService, kyBaoCaoService) {
        this.CoSoChanNuoiResposity = CoSoChanNuoiResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.vatNuoiService = vatNuoiService;
        this.hinhThucChanNuoiService = hinhThucChanNuoiService;
        this.kyBaoCaoService = kyBaoCaoService;
    }
    async create(createCoSoChanNuoiDto) {
        try {
            let { caNhanHtxId, vatNuoiIds, kyBaoCaoId, hinhThucChanNuoiId, tinhTrang, diaChi, toaDo, icon } = createCoSoChanNuoiDto;
            const coSoChanNuoi = new co_so_chan_nuoi_entity_1.CoSoChanNuoi();
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let hinhThucChanNuoi = await this.hinhThucChanNuoiService.findOne(hinhThucChanNuoiId);
            let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
            let arrInput = ['tinhTrang', 'diaChi', 'toaDo', 'icon', 'caNhanHtxId', 'hinhThucChanNuoiId', 'kyBaoCaoId'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createCoSoChanNuoiDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!vatNuoiIds || vatNuoiIds.length === 0) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Bạn chưa nhập trường: vatNuoiIds",
                });
            }
            if (!caNhanHtx || !hinhThucChanNuoi || !kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId và hinhThucChanNuoiId",
                    data: null
                });
            }
            if (createCoSoChanNuoiDto.toaDo) {
                const toaDoString = createCoSoChanNuoiDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            coSoChanNuoi.vatNuoi = [];
            for (const vatNuoiId of vatNuoiIds) {
                const vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
                if (!vatNuoi) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `không tìm thấy! Vui lòng kiểm tra lại các vatNuoiId `,
                        data: null
                    });
                }
                else if (vatNuoi) {
                    coSoChanNuoi.vatNuoi.push(vatNuoi);
                }
            }
            coSoChanNuoi.tinhTrang = tinhTrang;
            coSoChanNuoi.diaChi = diaChi;
            coSoChanNuoi.toaDo = toaDo;
            coSoChanNuoi.icon = icon;
            coSoChanNuoi.hinhThucChanNuoi = hinhThucChanNuoi;
            coSoChanNuoi.caNhanHtx = caNhanHtx;
            coSoChanNuoi.kyBaoCao = kyBaoCao;
            let createCoSoCN = await this.CoSoChanNuoiResposity.save(coSoChanNuoi);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createCoSoCN
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
            data: await this.CoSoChanNuoiResposity.find({ relations: ['caNhanHtx', 'vatNuoi', 'hinhThucChanNuoi', 'kyBaoCao'] })
        });
    }
    async findOne(id) {
        return await this.CoSoChanNuoiResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'vatNuoi', 'hinhThucChanNuoi', 'kyBaoCao'] });
    }
    async getOne(id) {
        try {
            let coSoOne = await this.findOne(id);
            if (!coSoOne) {
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
                    data: coSoOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateCoSoChanNuoiDto) {
        try {
            let coSoOne = await this.findOne(id);
            if (!coSoOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { caNhanHtxId, vatNuoiIds, hinhThucChanNuoiId, kyBaoCaoId, tinhTrang, diaChi, toaDo, icon } = updateCoSoChanNuoiDto;
                const coSoChanNuoi = new co_so_chan_nuoi_entity_1.CoSoChanNuoi();
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let hinhThucChanNuoi = await this.hinhThucChanNuoiService.findOne(hinhThucChanNuoiId);
                let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
                let arrInput = ['tinhTrang', 'diaChi', 'toaDo', 'icon', 'caNhanHtxId', 'hinhThucChanNuoiId', 'kyBaoCaoId'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateCoSoChanNuoiDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!vatNuoiIds || vatNuoiIds.length === 0) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Bạn chưa nhập trường: vatNuoiIds",
                    });
                }
                if (!caNhanHtx || !hinhThucChanNuoi || !kyBaoCao) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId và hinhThucChanNuoiId",
                        data: null
                    });
                }
                if (updateCoSoChanNuoiDto.toaDo) {
                    const toaDoString = updateCoSoChanNuoiDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                coSoChanNuoi.vatNuoi = [];
                for (const vatNuoiId of vatNuoiIds) {
                    const vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
                    if (!vatNuoi) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `không tìm thấy! Vui lòng kiểm tra lại các vatNuoiIds `,
                            data: null
                        });
                    }
                    else if (vatNuoi) {
                        coSoChanNuoi.vatNuoi.push(vatNuoi);
                    }
                }
                coSoChanNuoi.id = id;
                coSoChanNuoi.hinhThucChanNuoi = hinhThucChanNuoi;
                coSoChanNuoi.caNhanHtx = caNhanHtx;
                coSoChanNuoi.kyBaoCao = kyBaoCao;
                coSoChanNuoi.tinhTrang = tinhTrang;
                coSoChanNuoi.diaChi = diaChi;
                coSoChanNuoi.toaDo = toaDo;
                coSoChanNuoi.icon = icon;
                await this.CoSoChanNuoiResposity.save(coSoChanNuoi);
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
    async deleteCoSoCN(id) {
        try {
            let coSoOne = await this.findOne(id);
            if (!coSoOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: coSoOne
                });
            }
            else {
                await this.CoSoChanNuoiResposity.delete(id);
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
CoSoChanNuoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(co_so_chan_nuoi_entity_1.CoSoChanNuoi)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        vat_nuoi_service_1.VatNuoiService,
        hinh_thuc_chan_nuoi_service_1.HinhThucChanNuoiService,
        ky_bao_cao_service_1.KyBaoCaoService])
], CoSoChanNuoiService);
exports.CoSoChanNuoiService = CoSoChanNuoiService;
//# sourceMappingURL=co-so-chan-nuoi.service.js.map