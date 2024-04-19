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
exports.BenhVatNuoiController = void 0;
const common_1 = require("@nestjs/common");
const benh_vat_nuoi_service_1 = require("./benh-vat-nuoi.service");
const create_benh_vat_nuoi_dto_1 = require("./dto/create-benh-vat-nuoi.dto");
const update_benh_vat_nuoi_dto_1 = require("./dto/update-benh-vat-nuoi.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let BenhVatNuoiController = class BenhVatNuoiController {
    constructor(benhVatNuoiService) {
        this.benhVatNuoiService = benhVatNuoiService;
    }
    create(createBenhVatNuoiDto) {
        return this.benhVatNuoiService.create(createBenhVatNuoiDto);
    }
    findAll() {
        return this.benhVatNuoiService.findAll();
    }
    getOne(id) {
        return this.benhVatNuoiService.getOne(+id);
    }
    update(id, updateBenhVatNuoiDto) {
        return this.benhVatNuoiService.update(+id, updateBenhVatNuoiDto);
    }
    deleteBenhVatNuoi(id) {
        return this.benhVatNuoiService.deleteBenhVatNuoi(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_benh_vat_nuoi_dto_1.CreateBenhVatNuoiDto]),
    __metadata("design:returntype", void 0)
], BenhVatNuoiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BenhVatNuoiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BenhVatNuoiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_benh_vat_nuoi_dto_1.UpdateBenhVatNuoiDto]),
    __metadata("design:returntype", void 0)
], BenhVatNuoiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Benh_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BenhVatNuoiController.prototype, "deleteBenhVatNuoi", null);
BenhVatNuoiController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('benh-vat-nuoi'),
    __metadata("design:paramtypes", [benh_vat_nuoi_service_1.BenhVatNuoiService])
], BenhVatNuoiController);
exports.BenhVatNuoiController = BenhVatNuoiController;
//# sourceMappingURL=benh-vat-nuoi.controller.js.map