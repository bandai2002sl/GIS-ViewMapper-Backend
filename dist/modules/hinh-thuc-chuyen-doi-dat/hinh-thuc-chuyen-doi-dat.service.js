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
exports.HinhThucChuyenDoiDatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hinh_thuc_chuyen_doi_dat_entity_1 = require("./entities/hinh-thuc-chuyen-doi-dat.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let HinhThucChuyenDoiDatService = class HinhThucChuyenDoiDatService {
    constructor(HinhThucChuyenDoiDatResposity) {
        this.HinhThucChuyenDoiDatResposity = HinhThucChuyenDoiDatResposity;
    }
    async create(createHinhThucChuyenDoiDatDto) {
        try {
            let arrInput = ['tenHinhThuc', 'tamNgung'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createHinhThucChuyenDoiDatDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createDat = await this.HinhThucChuyenDoiDatResposity.save(createHinhThucChuyenDoiDatDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createDat
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let datAll = await this.HinhThucChuyenDoiDatResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: datAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.HinhThucChuyenDoiDatResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let datOne = await this.findOne(id);
            if (!datOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy kiêm tra lại id",
                    data: datOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: datOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateHinhThucChuyenDoiDatDto) {
        try {
            let datOne = await this.findOne(id);
            if (!datOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: datOne
                });
            }
            else {
                let arrInput = ['tenHinhThuc', 'tamNgung'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateHinhThucChuyenDoiDatDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.HinhThucChuyenDoiDatResposity.update(id, updateHinhThucChuyenDoiDatDto);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Sửa thành công",
                    data: await this.findOne(id)
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteHTCDDat(id) {
        try {
            let datOne = await this.findOne(id);
            if (!datOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: datOne
                });
            }
            else {
                await this.HinhThucChuyenDoiDatResposity.delete(id);
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
HinhThucChuyenDoiDatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hinh_thuc_chuyen_doi_dat_entity_1.HinhThucChuyenDoiDat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HinhThucChuyenDoiDatService);
exports.HinhThucChuyenDoiDatService = HinhThucChuyenDoiDatService;
//# sourceMappingURL=hinh-thuc-chuyen-doi-dat.service.js.map