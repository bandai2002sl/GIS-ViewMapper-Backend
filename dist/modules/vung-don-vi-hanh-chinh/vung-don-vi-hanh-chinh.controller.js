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
exports.VungDonViHanhChinhController = void 0;
const common_1 = require("@nestjs/common");
const vung_don_vi_hanh_chinh_service_1 = require("./vung-don-vi-hanh-chinh.service");
const create_vung_don_vi_hanh_chinh_dto_1 = require("./dto/create-vung-don-vi-hanh-chinh.dto");
const update_vung_don_vi_hanh_chinh_dto_1 = require("./dto/update-vung-don-vi-hanh-chinh.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let VungDonViHanhChinhController = class VungDonViHanhChinhController {
    constructor(vungDonViHanhChinhService) {
        this.vungDonViHanhChinhService = vungDonViHanhChinhService;
    }
    create(createVungDonViHanhChinhDto) {
        return this.vungDonViHanhChinhService.create(createVungDonViHanhChinhDto);
    }
    findAll() {
        return this.vungDonViHanhChinhService.findAll();
    }
    getOne(id) {
        return this.vungDonViHanhChinhService.getOne(+id);
    }
    update(id, updateVungDonViHanhChinhDto) {
        return this.vungDonViHanhChinhService.update(+id, updateVungDonViHanhChinhDto);
    }
    deleteVungHC(id) {
        return this.vungDonViHanhChinhService.deleteVungHC(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vung_don_vi_hanh_chinh_dto_1.CreateVungDonViHanhChinhDto]),
    __metadata("design:returntype", void 0)
], VungDonViHanhChinhController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VungDonViHanhChinhController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VungDonViHanhChinhController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vung_don_vi_hanh_chinh_dto_1.UpdateVungDonViHanhChinhDto]),
    __metadata("design:returntype", void 0)
], VungDonViHanhChinhController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VungDonViHanhChinhController.prototype, "deleteVungHC", null);
VungDonViHanhChinhController = __decorate([
    (0, swagger_1.ApiTags)('Vùng Đơn Vị Hành Chính'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('vung-don-vi-hanh-chinh'),
    __metadata("design:paramtypes", [vung_don_vi_hanh_chinh_service_1.VungDonViHanhChinhService])
], VungDonViHanhChinhController);
exports.VungDonViHanhChinhController = VungDonViHanhChinhController;
//# sourceMappingURL=vung-don-vi-hanh-chinh.controller.js.map