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
exports.TramBomController = void 0;
const common_1 = require("@nestjs/common");
const tram_bom_service_1 = require("./tram-bom.service");
const create_tram_bom_dto_1 = require("./dto/create-tram-bom.dto");
const update_tram_bom_dto_1 = require("./dto/update-tram-bom.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let TramBomController = class TramBomController {
    constructor(tramBomService) {
        this.tramBomService = tramBomService;
    }
    create(createTramBomDto) {
        return this.tramBomService.create(createTramBomDto);
    }
    findAll() {
        return this.tramBomService.findAll();
    }
    findOne(id) {
        return this.tramBomService.getOne(+id);
    }
    update(id, updateTramBomDto) {
        return this.tramBomService.update(+id, updateTramBomDto);
    }
    remove(id) {
        return this.tramBomService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tram_bom),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tram_bom_dto_1.CreateTramBomDto]),
    __metadata("design:returntype", void 0)
], TramBomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tram_bom),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TramBomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TramBomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tram_bom),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tram_bom_dto_1.UpdateTramBomDto]),
    __metadata("design:returntype", void 0)
], TramBomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Tram_bom),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TramBomController.prototype, "remove", null);
TramBomController = __decorate([
    (0, swagger_1.ApiTags)('Trạm bơm'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('tram-bom'),
    __metadata("design:paramtypes", [tram_bom_service_1.TramBomService])
], TramBomController);
exports.TramBomController = TramBomController;
//# sourceMappingURL=tram-bom.controller.js.map