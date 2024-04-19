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
exports.AdministrativeUnitController = void 0;
const common_1 = require("@nestjs/common");
const administrative_unit_service_1 = require("./administrative-unit.service");
const create_administrative_unit_dto_1 = require("./dto/create-administrative-unit.dto");
const update_administrative_unit_dto_1 = require("./dto/update-administrative-unit.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let AdministrativeUnitController = class AdministrativeUnitController {
    constructor(administrativeUnitService) {
        this.administrativeUnitService = administrativeUnitService;
    }
    create(createAdministrativeUnitDto) {
        return this.administrativeUnitService.create(createAdministrativeUnitDto);
    }
    getAll() {
        return this.administrativeUnitService.getAll();
    }
    getOne(id) {
        return this.administrativeUnitService.getOne(+id);
    }
    updateAdmin(id, updateAdministrativeUnitDto) {
        return this.administrativeUnitService.updateAdmin(+id, updateAdministrativeUnitDto);
    }
    deleteAdmin(id) {
        return this.administrativeUnitService.deleteAdmin(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_administrative_unit_dto_1.CreateAdministrativeUnitDto]),
    __metadata("design:returntype", void 0)
], AdministrativeUnitController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministrativeUnitController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministrativeUnitController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_administrative_unit_dto_1.UpdateAdministrativeUnitDto]),
    __metadata("design:returntype", void 0)
], AdministrativeUnitController.prototype, "updateAdmin", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Don_vi_hanh_chinh),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdministrativeUnitController.prototype, "deleteAdmin", null);
AdministrativeUnitController = __decorate([
    (0, swagger_1.ApiTags)('Đơn Vị Hành Chính'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('administrative-unit'),
    __metadata("design:paramtypes", [administrative_unit_service_1.AdministrativeUnitService])
], AdministrativeUnitController);
exports.AdministrativeUnitController = AdministrativeUnitController;
//# sourceMappingURL=administrative-unit.controller.js.map