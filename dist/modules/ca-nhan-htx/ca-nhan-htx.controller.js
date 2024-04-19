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
exports.CaNhanHtxController = void 0;
const common_1 = require("@nestjs/common");
const ca_nhan_htx_service_1 = require("./ca-nhan-htx.service");
const create_ca_nhan_htx_dto_1 = require("./dto/create-ca-nhan-htx.dto");
const update_ca_nhan_htx_dto_1 = require("./dto/update-ca-nhan-htx.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let CaNhanHtxController = class CaNhanHtxController {
    constructor(caNhanHtxService) {
        this.caNhanHtxService = caNhanHtxService;
    }
    create(createCaNhanHtxDto) {
        return this.caNhanHtxService.create(createCaNhanHtxDto);
    }
    findAll() {
        return this.caNhanHtxService.findAll();
    }
    getOne(id) {
        return this.caNhanHtxService.getOne(+id);
    }
    update(id, updateCaNhanHtxDto) {
        return this.caNhanHtxService.update(+id, updateCaNhanHtxDto);
    }
    remove(id) {
        return this.caNhanHtxService.deleteHtx(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hop_tac_xa),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ca_nhan_htx_dto_1.CreateCaNhanHtxDto]),
    __metadata("design:returntype", void 0)
], CaNhanHtxController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hop_tac_xa),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CaNhanHtxController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaNhanHtxController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hop_tac_xa),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ca_nhan_htx_dto_1.UpdateCaNhanHtxDto]),
    __metadata("design:returntype", void 0)
], CaNhanHtxController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hop_tac_xa),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CaNhanHtxController.prototype, "remove", null);
CaNhanHtxController = __decorate([
    (0, swagger_1.ApiTags)('Cá Nhân HTX'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('ca-nhan-htx'),
    __metadata("design:paramtypes", [ca_nhan_htx_service_1.CaNhanHtxService])
], CaNhanHtxController);
exports.CaNhanHtxController = CaNhanHtxController;
//# sourceMappingURL=ca-nhan-htx.controller.js.map