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
exports.LienKetController = void 0;
const common_1 = require("@nestjs/common");
const lien_ket_service_1 = require("./lien-ket.service");
const create_lien_ket_dto_1 = require("./dto/create-lien-ket.dto");
const update_lien_ket_dto_1 = require("./dto/update-lien-ket.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let LienKetController = class LienKetController {
    constructor(lienKetService) {
        this.lienKetService = lienKetService;
    }
    create(createLienKetDto) {
        return this.lienKetService.create(createLienKetDto);
    }
    findAll() {
        return this.lienKetService.findAll();
    }
    getOne(id) {
        return this.lienKetService.getOne(+id);
    }
    update(id, updateLienKetDto) {
        return this.lienKetService.update(+id, updateLienKetDto);
    }
    deleteLienKet(id) {
        return this.lienKetService.deleteLienKet(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Lien_ket),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lien_ket_dto_1.CreateLienKetDto]),
    __metadata("design:returntype", void 0)
], LienKetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Lien_ket),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LienKetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LienKetController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Lien_ket),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lien_ket_dto_1.UpdateLienKetDto]),
    __metadata("design:returntype", void 0)
], LienKetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Lien_ket),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LienKetController.prototype, "deleteLienKet", null);
LienKetController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('lien-ket'),
    __metadata("design:paramtypes", [lien_ket_service_1.LienKetService])
], LienKetController);
exports.LienKetController = LienKetController;
//# sourceMappingURL=lien-ket.controller.js.map