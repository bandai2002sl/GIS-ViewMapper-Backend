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
exports.SanXuatThuySanController = void 0;
const common_1 = require("@nestjs/common");
const san_xuat_thuy_san_service_1 = require("./san-xuat-thuy-san.service");
const create_san_xuat_thuy_san_dto_1 = require("./dto/create-san-xuat-thuy-san.dto");
const update_san_xuat_thuy_san_dto_1 = require("./dto/update-san-xuat-thuy-san.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let SanXuatThuySanController = class SanXuatThuySanController {
    constructor(sanXuatThuySanService) {
        this.sanXuatThuySanService = sanXuatThuySanService;
    }
    create(createSanXuatThuySanDto) {
        return this.sanXuatThuySanService.create(createSanXuatThuySanDto);
    }
    findAll() {
        return this.sanXuatThuySanService.findAll();
    }
    getOne(id) {
        return this.sanXuatThuySanService.getOne(+id);
    }
    update(id, updateSanXuatThuySanDto) {
        return this.sanXuatThuySanService.update(+id, updateSanXuatThuySanDto);
    }
    deleteSanXuatVN(id) {
        return this.sanXuatThuySanService.deleteSanXuatTS(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_san_xuat_thuy_san_dto_1.CreateSanXuatThuySanDto]),
    __metadata("design:returntype", void 0)
], SanXuatThuySanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SanXuatThuySanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SanXuatThuySanController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_san_xuat_thuy_san_dto_1.UpdateSanXuatThuySanDto]),
    __metadata("design:returntype", void 0)
], SanXuatThuySanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.San_xuat_thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SanXuatThuySanController.prototype, "deleteSanXuatVN", null);
SanXuatThuySanController = __decorate([
    (0, swagger_1.ApiTags)('Sản Xuất Thủy Sản'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('san-xuat-thuy-san'),
    __metadata("design:paramtypes", [san_xuat_thuy_san_service_1.SanXuatThuySanService])
], SanXuatThuySanController);
exports.SanXuatThuySanController = SanXuatThuySanController;
//# sourceMappingURL=san-xuat-thuy-san.controller.js.map