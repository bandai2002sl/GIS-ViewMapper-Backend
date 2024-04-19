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
exports.TauCaController = void 0;
const common_1 = require("@nestjs/common");
const tau_ca_service_1 = require("./tau-ca.service");
const create_tau_ca_dto_1 = require("./dto/create-tau-ca.dto");
const update_tau_ca_dto_1 = require("./dto/update-tau-ca.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let TauCaController = class TauCaController {
    constructor(tauCaService) {
        this.tauCaService = tauCaService;
    }
    create(createTauCaDto) {
        return this.tauCaService.create(createTauCaDto);
    }
    findAll() {
        return this.tauCaService.findAll();
    }
    findOne(id) {
        return this.tauCaService.getOne(+id);
    }
    update(id, updateTauCaDto) {
        return this.tauCaService.update(+id, updateTauCaDto);
    }
    remove(id) {
        return this.tauCaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tau_ca),
    (0, common_1.SetMetadata)('permisssionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tau_ca_dto_1.CreateTauCaDto]),
    __metadata("design:returntype", void 0)
], TauCaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tau_ca),
    (0, common_1.SetMetadata)('permisssionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TauCaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TauCaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tau_ca),
    (0, common_1.SetMetadata)('permisssionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tau_ca_dto_1.UpdateTauCaDto]),
    __metadata("design:returntype", void 0)
], TauCaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tau_ca),
    (0, common_1.SetMetadata)('permisssionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TauCaController.prototype, "remove", null);
TauCaController = __decorate([
    (0, swagger_1.ApiTags)('Quản lý tàu cá'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('tau-ca'),
    __metadata("design:paramtypes", [tau_ca_service_1.TauCaService])
], TauCaController);
exports.TauCaController = TauCaController;
//# sourceMappingURL=tau-ca.controller.js.map