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
exports.LoaiBenhService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const loai_benh_entity_1 = require("./entities/loai-benh.entity");
const text_helper_1 = require("../../common/text.helper");
let LoaiBenhService = class LoaiBenhService {
    constructor(LoaiBenhResposity) {
        this.LoaiBenhResposity = LoaiBenhResposity;
    }
    async create(createLoaiBenhDto) {
        try {
            let arrInput = ['tenBenh', 'moTa', 'hinhAnh', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createLoaiBenhDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createLoaiBenh = await this.LoaiBenhResposity.save(createLoaiBenhDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "tạo mới thành công",
                data: createLoaiBenh
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let loaiBenhAll = await this.LoaiBenhResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: loaiBenhAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.LoaiBenhResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let loaiBenhOne = await this.LoaiBenhResposity.findOne({ where: { id: id } });
            if (!loaiBenhOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy loại bệnh",
                    data: loaiBenhOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: loaiBenhOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async editLoaiBenh(id, updateLoaiBenhDto) {
        try {
            let loaiBenh = await this.findOne(id);
            if (!loaiBenh) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "loai bệnh này không tồn tại Vui lòng kiểm tra lại Id",
                    data: loaiBenh
                });
            }
            else {
                let arrInput = ['tenBenh', 'moTa', 'hinhAnh', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateLoaiBenhDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.LoaiBenhResposity.update(id, updateLoaiBenhDto);
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
    async deleteLoaiBenh(id) {
        try {
            let loaiBenh = await this.findOne(id);
            if (!loaiBenh) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Loai bệnh không tồn tại, Vui lòng kiêm tra lại Id",
                    data: loaiBenh
                });
            }
            else {
                await this.LoaiBenhResposity.delete(id);
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
LoaiBenhService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loai_benh_entity_1.LoaiBenh)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoaiBenhService);
exports.LoaiBenhService = LoaiBenhService;
//# sourceMappingURL=loai-benh.service.js.map