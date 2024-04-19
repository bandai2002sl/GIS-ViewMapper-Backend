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
exports.DuongDonViHanhChinhController = void 0;
const common_1 = require("@nestjs/common");
const duong_don_vi_hanh_chinh_service_1 = require("./duong-don-vi-hanh-chinh.service");
const create_duong_don_vi_hanh_chinh_dto_1 = require("./dto/create-duong-don-vi-hanh-chinh.dto");
const update_duong_don_vi_hanh_chinh_dto_1 = require("./dto/update-duong-don-vi-hanh-chinh.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let DuongDonViHanhChinhController = class DuongDonViHanhChinhController {
    constructor(duongDonViHanhChinhService) {
        this.duongDonViHanhChinhService = duongDonViHanhChinhService;
    }
    create(createDuongDonViHanhChinhDto) {
        return this.duongDonViHanhChinhService.create(createDuongDonViHanhChinhDto);
    }
    findAll() {
        return this.duongDonViHanhChinhService.findAll();
    }
    getOne(id) {
        return this.duongDonViHanhChinhService.getOne(+id);
    }
    update(id, updateDuongDonViHanhChinhDto) {
        return this.duongDonViHanhChinhService.update(+id, updateDuongDonViHanhChinhDto);
    }
    deleteDuongHC(id) {
        return this.duongDonViHanhChinhService.deleteDuongHC(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Duong_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_duong_don_vi_hanh_chinh_dto_1.CreateDuongDonViHanhChinhDto]),
    __metadata("design:returntype", void 0)
], DuongDonViHanhChinhController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Duong_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DuongDonViHanhChinhController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DuongDonViHanhChinhController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Duong_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_duong_don_vi_hanh_chinh_dto_1.UpdateDuongDonViHanhChinhDto]),
    __metadata("design:returntype", void 0)
], DuongDonViHanhChinhController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Duong_don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DuongDonViHanhChinhController.prototype, "deleteDuongHC", null);
DuongDonViHanhChinhController = __decorate([
    (0, swagger_1.ApiTags)('Đường Đơn Vị Hành Chính'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('duong-don-vi-hanh-chinh'),
    __metadata("design:paramtypes", [duong_don_vi_hanh_chinh_service_1.DuongDonViHanhChinhService])
], DuongDonViHanhChinhController);
exports.DuongDonViHanhChinhController = DuongDonViHanhChinhController;
//# sourceMappingURL=duong-don-vi-hanh-chinh.controller.js.map