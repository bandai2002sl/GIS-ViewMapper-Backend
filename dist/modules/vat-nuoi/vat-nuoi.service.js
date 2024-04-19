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
exports.VatNuoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vat_nuoi_entity_1 = require("./entities/vat-nuoi.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let VatNuoiService = class VatNuoiService {
    constructor(VatNuoiResposity) {
        this.VatNuoiResposity = VatNuoiResposity;
    }
    async create(createVatNuoiDto) {
        try {
            let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createVatNuoiDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createVatNuoi = await this.VatNuoiResposity.save(createVatNuoiDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createVatNuoi
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let cropAll = await this.VatNuoiResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: cropAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.VatNuoiResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let vatNuoiOne = await this.findOne(id);
            if (!vatNuoiOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy",
                    data: vatNuoiOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: vatNuoiOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateVatNuoiDto) {
        try {
            let vatNuoiOne = await this.findOne(id);
            if (!vatNuoiOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: vatNuoiOne
                });
            }
            else {
                let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateVatNuoiDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.VatNuoiResposity.update(id, updateVatNuoiDto);
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
    async deleteVatNuoi(id) {
        try {
            let vatNuoiOne = await this.findOne(id);
            if (!vatNuoiOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: vatNuoiOne
                });
            }
            else {
                await this.VatNuoiResposity.delete(id);
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
VatNuoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vat_nuoi_entity_1.VatNuoi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VatNuoiService);
exports.VatNuoiService = VatNuoiService;
//# sourceMappingURL=vat-nuoi.service.js.map