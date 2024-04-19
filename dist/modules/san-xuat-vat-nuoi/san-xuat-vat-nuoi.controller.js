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
exports.SanXuatVatNuoiController = void 0;
const common_1 = require("@nestjs/common");
const san_xuat_vat_nuoi_service_1 = require("./san-xuat-vat-nuoi.service");
const create_san_xuat_vat_nuoi_dto_1 = require("./dto/create-san-xuat-vat-nuoi.dto");
const update_san_xuat_vat_nuoi_dto_1 = require("./dto/update-san-xuat-vat-nuoi.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let SanXuatVatNuoiController = class SanXuatVatNuoiController {
    constructor(sanXuatVatNuoiService) {
        this.sanXuatVatNuoiService = sanXuatVatNuoiService;
    }
    create(createSanXuatVatNuoiDto) {
        return this.sanXuatVatNuoiService.create(createSanXuatVatNuoiDto);
    }
    findAll() {
        return this.sanXuatVatNuoiService.findAll();
    }
    getOne(id) {
        return this.sanXuatVatNuoiService.getOne(+id);
    }
    update(id, updateSanXuatVatNuoiDto) {
        return this.sanXuatVatNuoiService.update(+id, updateSanXuatVatNuoiDto);
    }
    deleteSanXuatVN(id) {
        return this.sanXuatVatNuoiService.deleteSanXuatVN(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_san_xuat_vat_nuoi_dto_1.CreateSanXuatVatNuoiDto]),
    __metadata("design:returntype", void 0)
], SanXuatVatNuoiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SanXuatVatNuoiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SanXuatVatNuoiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_san_xuat_vat_nuoi_dto_1.UpdateSanXuatVatNuoiDto]),
    __metadata("design:returntype", void 0)
], SanXuatVatNuoiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_vat_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SanXuatVatNuoiController.prototype, "deleteSanXuatVN", null);
SanXuatVatNuoiController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('san-xuat-vat-nuoi'),
    __metadata("design:paramtypes", [san_xuat_vat_nuoi_service_1.SanXuatVatNuoiService])
], SanXuatVatNuoiController);
exports.SanXuatVatNuoiController = SanXuatVatNuoiController;
//# sourceMappingURL=san-xuat-vat-nuoi.controller.js.map