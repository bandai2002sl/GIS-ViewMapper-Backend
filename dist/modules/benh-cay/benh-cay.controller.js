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
exports.BenhCayController = void 0;
const common_1 = require("@nestjs/common");
const benh_cay_service_1 = require("./benh-cay.service");
const create_benh_cay_dto_1 = require("./dto/create-benh-cay.dto");
const update_benh_cay_dto_1 = require("./dto/update-benh-cay.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let BenhCayController = class BenhCayController {
    constructor(benhCayService) {
        this.benhCayService = benhCayService;
    }
    create(createBenhCayDto) {
        return this.benhCayService.create(createBenhCayDto);
    }
    findAll() {
        return this.benhCayService.findAll();
    }
    getOne(id) {
        return this.benhCayService.getOne(+id);
    }
    update(id, updateBenhCayDto) {
        return this.benhCayService.update(+id, updateBenhCayDto);
    }
    deleteBenhCay(id) {
        return this.benhCayService.deleteBenhCay(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_cay),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_benh_cay_dto_1.CreateBenhCayDto]),
    __metadata("design:returntype", void 0)
], BenhCayController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_cay),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BenhCayController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BenhCayController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_cay),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_benh_cay_dto_1.UpdateBenhCayDto]),
    __metadata("design:returntype", void 0)
], BenhCayController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_cay),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BenhCayController.prototype, "deleteBenhCay", null);
BenhCayController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('benh-cay'),
    __metadata("design:paramtypes", [benh_cay_service_1.BenhCayService])
], BenhCayController);
exports.BenhCayController = BenhCayController;
//# sourceMappingURL=benh-cay.controller.js.map