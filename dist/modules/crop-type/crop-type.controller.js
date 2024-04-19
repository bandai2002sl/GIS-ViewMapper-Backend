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
exports.CropTypeController = void 0;
const common_1 = require("@nestjs/common");
const crop_type_service_1 = require("./crop-type.service");
const create_crop_type_dto_1 = require("./dto/create-crop-type.dto");
const update_crop_type_dto_1 = require("./dto/update-crop-type.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let CropTypeController = class CropTypeController {
    constructor(cropTypeService) {
        this.cropTypeService = cropTypeService;
    }
    create(createCropTypeDto) {
        return this.cropTypeService.create(createCropTypeDto);
    }
    getAll() {
        return this.cropTypeService.getAll();
    }
    getOne(id) {
        return this.cropTypeService.getOne(+id);
    }
    editCrop(id, updateCropTypeDto) {
        return this.cropTypeService.editCrop(+id, updateCropTypeDto);
    }
    deleteCrop(id) {
        return this.cropTypeService.deleteCrop(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cay_trong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crop_type_dto_1.CreateCropTypeDto]),
    __metadata("design:returntype", void 0)
], CropTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cay_trong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CropTypeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CropTypeController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cay_trong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_crop_type_dto_1.UpdateCropTypeDto]),
    __metadata("design:returntype", void 0)
], CropTypeController.prototype, "editCrop", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cay_trong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CropTypeController.prototype, "deleteCrop", null);
CropTypeController = __decorate([
    (0, swagger_1.ApiTags)('Loại cây trồng'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('crop-type'),
    __metadata("design:paramtypes", [crop_type_service_1.CropTypeService])
], CropTypeController);
exports.CropTypeController = CropTypeController;
//# sourceMappingURL=crop-type.controller.js.map