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
exports.KenhMuongController = void 0;
const common_1 = require("@nestjs/common");
const kenh_muong_service_1 = require("./kenh-muong.service");
const create_kenh_muong_dto_1 = require("./dto/create-kenh-muong.dto");
const update_kenh_muong_dto_1 = require("./dto/update-kenh-muong.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let KenhMuongController = class KenhMuongController {
    constructor(kenhMuongService) {
        this.kenhMuongService = kenhMuongService;
    }
    create(createKenhMuongDto) {
        return this.kenhMuongService.create(createKenhMuongDto);
    }
    findAll() {
        return this.kenhMuongService.findAll();
    }
    findOne(id) {
        return this.kenhMuongService.getOne(+id);
    }
    update(id, updateKenhMuongDto) {
        return this.kenhMuongService.update(+id, updateKenhMuongDto);
    }
    remove(id) {
        return this.kenhMuongService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Kenh_muong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kenh_muong_dto_1.CreateKenhMuongDto]),
    __metadata("design:returntype", void 0)
], KenhMuongController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Kenh_muong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KenhMuongController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KenhMuongController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Kenh_muong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kenh_muong_dto_1.UpdateKenhMuongDto]),
    __metadata("design:returntype", void 0)
], KenhMuongController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Kenh_muong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KenhMuongController.prototype, "remove", null);
KenhMuongController = __decorate([
    (0, swagger_1.ApiTags)('Kênh mương'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('kenh-muong'),
    __metadata("design:paramtypes", [kenh_muong_service_1.KenhMuongService])
], KenhMuongController);
exports.KenhMuongController = KenhMuongController;
//# sourceMappingURL=kenh-muong.controller.js.map