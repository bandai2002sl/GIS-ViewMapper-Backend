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
exports.LoaiKinhDoanhService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const loai_kinh_doanh_entity_1 = require("./entities/loai-kinh-doanh.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let LoaiKinhDoanhService = class LoaiKinhDoanhService {
    constructor(LoaiKinhDoanhResposity) {
        this.LoaiKinhDoanhResposity = LoaiKinhDoanhResposity;
    }
    async create(createLoaiKinhDoanhDto) {
        try {
            let arrInput = ['loaiKinhDoanh', 'moTa', 'tamNgung'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createLoaiKinhDoanhDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createLoaiKD = await this.LoaiKinhDoanhResposity.save(createLoaiKinhDoanhDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createLoaiKD
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let cropAll = await this.LoaiKinhDoanhResposity.find();
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
        return this.LoaiKinhDoanhResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let loaiKDOne = await this.findOne(id);
            if (!loaiKDOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy",
                    data: loaiKDOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: loaiKDOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateLoaiKinhDoanhDto) {
        try {
            let loaiKDOne = await this.findOne(id);
            if (!loaiKDOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: loaiKDOne
                });
            }
            else {
                let arrInput = ['loaiKinhDoanh', 'moTa', 'tamNgung'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateLoaiKinhDoanhDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.LoaiKinhDoanhResposity.update(id, updateLoaiKinhDoanhDto);
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
    async deleteLoaiKD(id) {
        try {
            let loaiKDOne = await this.findOne(id);
            if (!loaiKDOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: loaiKDOne
                });
            }
            else {
                await this.LoaiKinhDoanhResposity.delete(id);
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
LoaiKinhDoanhService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loai_kinh_doanh_entity_1.LoaiKinhDoanh)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoaiKinhDoanhService);
exports.LoaiKinhDoanhService = LoaiKinhDoanhService;
//# sourceMappingURL=loai-kinh-doanh.service.js.map