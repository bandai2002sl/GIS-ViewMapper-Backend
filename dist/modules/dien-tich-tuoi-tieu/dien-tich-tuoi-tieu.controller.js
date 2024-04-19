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
exports.DienTichTuoiTieuController = void 0;
const common_1 = require("@nestjs/common");
const dien_tich_tuoi_tieu_service_1 = require("./dien-tich-tuoi-tieu.service");
const create_dien_tich_tuoi_tieu_dto_1 = require("./dto/create-dien-tich-tuoi-tieu.dto");
const update_dien_tich_tuoi_tieu_dto_1 = require("./dto/update-dien-tich-tuoi-tieu.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let DienTichTuoiTieuController = class DienTichTuoiTieuController {
    constructor(dienTichTuoiTieuService) {
        this.dienTichTuoiTieuService = dienTichTuoiTieuService;
    }
    create(createDienTichTuoiTieuDto) {
        return this.dienTichTuoiTieuService.create(createDienTichTuoiTieuDto);
    }
    findAll() {
        return this.dienTichTuoiTieuService.findAll();
    }
    findOne(id) {
        return this.dienTichTuoiTieuService.getOne(+id);
    }
    update(id, updateDienTichTuoiTieuDto) {
        return this.dienTichTuoiTieuService.update(+id, updateDienTichTuoiTieuDto);
    }
    remove(id) {
        return this.dienTichTuoiTieuService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Dien_tich_tuoi_tieu),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dien_tich_tuoi_tieu_dto_1.CreateDienTichTuoiTieuDto]),
    __metadata("design:returntype", void 0)
], DienTichTuoiTieuController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Dien_tich_tuoi_tieu),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DienTichTuoiTieuController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DienTichTuoiTieuController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Dien_tich_tuoi_tieu),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dien_tich_tuoi_tieu_dto_1.UpdateDienTichTuoiTieuDto]),
    __metadata("design:returntype", void 0)
], DienTichTuoiTieuController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Dien_tich_tuoi_tieu),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DienTichTuoiTieuController.prototype, "remove", null);
DienTichTuoiTieuController = __decorate([
    (0, swagger_1.ApiTags)('Diện tích tưới tiêu'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('dien-tich-tuoi-tieu'),
    __metadata("design:paramtypes", [dien_tich_tuoi_tieu_service_1.DienTichTuoiTieuService])
], DienTichTuoiTieuController);
exports.DienTichTuoiTieuController = DienTichTuoiTieuController;
//# sourceMappingURL=dien-tich-tuoi-tieu.controller.js.map