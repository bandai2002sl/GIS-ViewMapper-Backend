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
exports.CropTypeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crop_type_entity_1 = require("./entities/crop-type.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let CropTypeService = class CropTypeService {
    constructor(CropTyeResposity) {
        this.CropTyeResposity = CropTyeResposity;
    }
    async create(createCropTypeDto) {
        try {
            let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createCropTypeDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createNewCrop = await this.CropTyeResposity.save(createCropTypeDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createNewCrop
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAll() {
        try {
            let cropAll = await this.CropTyeResposity.find();
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
        return this.CropTyeResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let cropOne = await this.findOne(id);
            if (!cropOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy cây trồng",
                    data: cropOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: cropOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async editCrop(id, updateCropTypeDto) {
        try {
            let crop = await this.findOne(id);
            if (!crop) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Cay trồng không tồn tại",
                    data: crop
                });
            }
            else {
                let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateCropTypeDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.CropTyeResposity.update(id, updateCropTypeDto);
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
    async deleteCrop(id) {
        try {
            let crop = await this.findOne(id);
            if (!crop) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Cay trồng không tồn tại",
                    data: crop
                });
            }
            else {
                await this.CropTyeResposity.delete(id);
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
CropTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(crop_type_entity_1.CropType)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CropTypeService);
exports.CropTypeService = CropTypeService;
//# sourceMappingURL=crop-type.service.js.map