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
exports.LienKetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lien_ket_entity_1 = require("./entities/lien-ket.entity");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const text_helper_1 = require("../../common/text.helper");
let LienKetService = class LienKetService {
    constructor(LienKetResposity, caNhanHtxService) {
        this.LienKetResposity = LienKetResposity;
        this.caNhanHtxService = caNhanHtxService;
    }
    async create(createLienKetDto) {
        try {
            let { caNhanHtxId } = createLienKetDto, Info = __rest(createLienKetDto, ["caNhanHtxId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let arrInput = ['caNhanHtxId', 'hinhThucLienKet', 'ngayLienKet', 'trangThai'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createLienKetDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId",
                    data: null
                });
            }
            else {
                let newData = this.LienKetResposity.create(Object.assign({ caNhanHtx }, Info));
                let createLienKet = await this.LienKetResposity.save(newData);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "thêm mới thành công",
                    data: createLienKet
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
            data: await this.LienKetResposity.find({ relations: ['caNhanHtx'] })
        });
    }
    async findOne(id) {
        return await this.LienKetResposity.findOne({ where: { id: id }, relations: ['caNhanHtx'] });
    }
    async getOne(id) {
        try {
            let lienKet = await this.findOne(id);
            if (!lienKet) {
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
                    data: lienKet
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateLienKetDto) {
        try {
            let lienKet = await this.findOne(id);
            if (!lienKet) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { caNhanHtxId } = updateLienKetDto, Info = __rest(updateLienKetDto, ["caNhanHtxId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let arrInput = ['caNhanHtxId', 'hinhThucLienKet', 'ngayLienKet', 'trangThai'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateLienKetDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!caNhanHtx) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId",
                        data: null
                    });
                }
                else {
                    await this.LienKetResposity.update(id, Object.assign(Object.assign({}, Info), { caNhanHtx }));
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
    async deleteLienKet(id) {
        try {
            let lienKet = await this.findOne(id);
            if (!lienKet) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: lienKet
                });
            }
            else {
                await this.LienKetResposity.delete(id);
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
LienKetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lien_ket_entity_1.LienKet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService])
], LienKetService);
exports.LienKetService = LienKetService;
//# sourceMappingURL=lien-ket.service.js.map