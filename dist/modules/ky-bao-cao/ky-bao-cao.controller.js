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
exports.KyBaoCaoController = void 0;
const common_1 = require("@nestjs/common");
const ky_bao_cao_service_1 = require("./ky-bao-cao.service");
const create_ky_bao_cao_dto_1 = require("./dto/create-ky-bao-cao.dto");
const update_ky_bao_cao_dto_1 = require("./dto/update-ky-bao-cao.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let KyBaoCaoController = class KyBaoCaoController {
    constructor(kyBaoCaoService) {
        this.kyBaoCaoService = kyBaoCaoService;
    }
    create(createKyBaoCaoDto) {
        return this.kyBaoCaoService.create(createKyBaoCaoDto);
    }
    getAll() {
        return this.kyBaoCaoService.getAll();
    }
    findOne(id) {
        return this.kyBaoCaoService.findOne(+id);
    }
    editKyBaoCao(id, updateKyBaoCaoDto) {
        return this.kyBaoCaoService.editKyBaoCao(+id, updateKyBaoCaoDto);
    }
    deleteKyBaoCao(id) {
        return this.kyBaoCaoService.deleteKyBaoCao(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ky_Bao_Cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ky_bao_cao_dto_1.CreateKyBaoCaoDto]),
    __metadata("design:returntype", void 0)
], KyBaoCaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ky_Bao_Cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KyBaoCaoController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KyBaoCaoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ky_Bao_Cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_ky_bao_cao_dto_1.UpdateKyBaoCaoDto]),
    __metadata("design:returntype", void 0)
], KyBaoCaoController.prototype, "editKyBaoCao", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ky_Bao_Cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KyBaoCaoController.prototype, "deleteKyBaoCao", null);
KyBaoCaoController = __decorate([
    (0, swagger_1.ApiTags)('Kỳ báo cáo'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('ky-bao-cao'),
    __metadata("design:paramtypes", [ky_bao_cao_service_1.KyBaoCaoService])
], KyBaoCaoController);
exports.KyBaoCaoController = KyBaoCaoController;
//# sourceMappingURL=ky-bao-cao.controller.js.map