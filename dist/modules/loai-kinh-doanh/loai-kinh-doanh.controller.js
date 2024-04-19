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
exports.LoaiKinhDoanhController = void 0;
const common_1 = require("@nestjs/common");
const loai_kinh_doanh_service_1 = require("./loai-kinh-doanh.service");
const create_loai_kinh_doanh_dto_1 = require("./dto/create-loai-kinh-doanh.dto");
const update_loai_kinh_doanh_dto_1 = require("./dto/update-loai-kinh-doanh.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let LoaiKinhDoanhController = class LoaiKinhDoanhController {
    constructor(loaiKinhDoanhService) {
        this.loaiKinhDoanhService = loaiKinhDoanhService;
    }
    create(createLoaiKinhDoanhDto) {
        return this.loaiKinhDoanhService.create(createLoaiKinhDoanhDto);
    }
    findAll() {
        return this.loaiKinhDoanhService.findAll();
    }
    getOne(id) {
        return this.loaiKinhDoanhService.getOne(+id);
    }
    update(id, updateLoaiKinhDoanhDto) {
        return this.loaiKinhDoanhService.update(+id, updateLoaiKinhDoanhDto);
    }
    deleteLoaiKD(id) {
        return this.loaiKinhDoanhService.deleteLoaiKD(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_kinh_doanh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loai_kinh_doanh_dto_1.CreateLoaiKinhDoanhDto]),
    __metadata("design:returntype", void 0)
], LoaiKinhDoanhController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_kinh_doanh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoaiKinhDoanhController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoaiKinhDoanhController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_kinh_doanh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_loai_kinh_doanh_dto_1.UpdateLoaiKinhDoanhDto]),
    __metadata("design:returntype", void 0)
], LoaiKinhDoanhController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_kinh_doanh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoaiKinhDoanhController.prototype, "deleteLoaiKD", null);
LoaiKinhDoanhController = __decorate([
    (0, swagger_1.ApiTags)('Loai Kinh Doanh'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('loai-kinh-doanh'),
    __metadata("design:paramtypes", [loai_kinh_doanh_service_1.LoaiKinhDoanhService])
], LoaiKinhDoanhController);
exports.LoaiKinhDoanhController = LoaiKinhDoanhController;
//# sourceMappingURL=loai-kinh-doanh.controller.js.map