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
exports.LoaiBenhController = void 0;
const common_1 = require("@nestjs/common");
const loai_benh_service_1 = require("./loai-benh.service");
const create_loai_benh_dto_1 = require("./dto/create-loai-benh.dto");
const update_loai_benh_dto_1 = require("./dto/update-loai-benh.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let LoaiBenhController = class LoaiBenhController {
    constructor(loaiBenhService) {
        this.loaiBenhService = loaiBenhService;
    }
    create(createLoaiBenhDto) {
        return this.loaiBenhService.create(createLoaiBenhDto);
    }
    findAll() {
        return this.loaiBenhService.findAll();
    }
    getOne(id) {
        return this.loaiBenhService.getOne(+id);
    }
    editLoaiBenh(id, updateLoaiBenhDto) {
        return this.loaiBenhService.editLoaiBenh(+id, updateLoaiBenhDto);
    }
    deleteLoaiBenh(id) {
        return this.loaiBenhService.deleteLoaiBenh(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_benh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_loai_benh_dto_1.CreateLoaiBenhDto]),
    __metadata("design:returntype", void 0)
], LoaiBenhController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_benh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoaiBenhController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoaiBenhController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_benh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_loai_benh_dto_1.UpdateLoaiBenhDto]),
    __metadata("design:returntype", void 0)
], LoaiBenhController.prototype, "editLoaiBenh", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Loai_benh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LoaiBenhController.prototype, "deleteLoaiBenh", null);
LoaiBenhController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('loai-benh'),
    __metadata("design:paramtypes", [loai_benh_service_1.LoaiBenhService])
], LoaiBenhController);
exports.LoaiBenhController = LoaiBenhController;
//# sourceMappingURL=loai-benh.controller.js.map