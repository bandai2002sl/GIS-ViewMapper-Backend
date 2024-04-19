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
exports.VatNuoiController = void 0;
const common_1 = require("@nestjs/common");
const vat_nuoi_service_1 = require("./vat-nuoi.service");
const create_vat_nuoi_dto_1 = require("./dto/create-vat-nuoi.dto");
const update_vat_nuoi_dto_1 = require("./dto/update-vat-nuoi.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let VatNuoiController = class VatNuoiController {
    constructor(vatNuoiService) {
        this.vatNuoiService = vatNuoiService;
    }
    create(createVatNuoiDto) {
        return this.vatNuoiService.create(createVatNuoiDto);
    }
    findAll() {
        return this.vatNuoiService.findAll();
    }
    getOne(id) {
        return this.vatNuoiService.getOne(+id);
    }
    update(id, updateVatNuoiDto) {
        return this.vatNuoiService.update(+id, updateVatNuoiDto);
    }
    deleteVatNuoi(id) {
        return this.vatNuoiService.deleteVatNuoi(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vat_nuoi_dto_1.CreateVatNuoiDto]),
    __metadata("design:returntype", void 0)
], VatNuoiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VatNuoiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VatNuoiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vat_nuoi_dto_1.UpdateVatNuoiDto]),
    __metadata("design:returntype", void 0)
], VatNuoiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VatNuoiController.prototype, "deleteVatNuoi", null);
VatNuoiController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('vat-nuoi'),
    __metadata("design:paramtypes", [vat_nuoi_service_1.VatNuoiService])
], VatNuoiController);
exports.VatNuoiController = VatNuoiController;
//# sourceMappingURL=vat-nuoi.controller.js.map