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
exports.MoHinhCongNgheCaoController = void 0;
const common_1 = require("@nestjs/common");
const mo_hinh_cong_nghe_cao_service_1 = require("./mo-hinh-cong-nghe-cao.service");
const create_mo_hinh_cong_nghe_cao_dto_1 = require("./dto/create-mo-hinh-cong-nghe-cao.dto");
const update_mo_hinh_cong_nghe_cao_dto_1 = require("./dto/update-mo-hinh-cong-nghe-cao.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let MoHinhCongNgheCaoController = class MoHinhCongNgheCaoController {
    constructor(moHinhCongNgheCaoService) {
        this.moHinhCongNgheCaoService = moHinhCongNgheCaoService;
    }
    create(createMoHinhCongNgheCaoDto) {
        return this.moHinhCongNgheCaoService.create(createMoHinhCongNgheCaoDto);
    }
    findAll() {
        return this.moHinhCongNgheCaoService.findAll();
    }
    getOne(id) {
        return this.moHinhCongNgheCaoService.getOne(+id);
    }
    update(id, updateMoHinhCongNgheCaoDto) {
        return this.moHinhCongNgheCaoService.update(+id, updateMoHinhCongNgheCaoDto);
    }
    deleteMoHinhCNC(id) {
        return this.moHinhCongNgheCaoService.deleteMoHinhCNC(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Mo_hinh_cong_nghe_cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mo_hinh_cong_nghe_cao_dto_1.CreateMoHinhCongNgheCaoDto]),
    __metadata("design:returntype", void 0)
], MoHinhCongNgheCaoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Mo_hinh_cong_nghe_cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoHinhCongNgheCaoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoHinhCongNgheCaoController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Mo_hinh_cong_nghe_cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mo_hinh_cong_nghe_cao_dto_1.UpdateMoHinhCongNgheCaoDto]),
    __metadata("design:returntype", void 0)
], MoHinhCongNgheCaoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Mo_hinh_cong_nghe_cao),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoHinhCongNgheCaoController.prototype, "deleteMoHinhCNC", null);
MoHinhCongNgheCaoController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('mo-hinh-cong-nghe-cao'),
    __metadata("design:paramtypes", [mo_hinh_cong_nghe_cao_service_1.MoHinhCongNgheCaoService])
], MoHinhCongNgheCaoController);
exports.MoHinhCongNgheCaoController = MoHinhCongNgheCaoController;
//# sourceMappingURL=mo-hinh-cong-nghe-cao.controller.js.map