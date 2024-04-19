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
exports.ThuySanController = void 0;
const common_1 = require("@nestjs/common");
const thuy_san_service_1 = require("./thuy-san.service");
const create_thuy_san_dto_1 = require("./dto/create-thuy-san.dto");
const update_thuy_san_dto_1 = require("./dto/update-thuy-san.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let ThuySanController = class ThuySanController {
    constructor(thuySanService) {
        this.thuySanService = thuySanService;
    }
    create(createThuySanDto) {
        return this.thuySanService.create(createThuySanDto);
    }
    findAll() {
        return this.thuySanService.findAll();
    }
    findOne(id) {
        return this.thuySanService.getOne(+id);
    }
    update(id, updateThuySanDto) {
        return this.thuySanService.update(+id, updateThuySanDto);
    }
    remove(id) {
        return this.thuySanService.deleteThuySan(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_thuy_san_dto_1.CreateThuySanDto]),
    __metadata("design:returntype", void 0)
], ThuySanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThuySanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThuySanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_thuy_san_dto_1.UpdateThuySanDto]),
    __metadata("design:returntype", void 0)
], ThuySanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Thuy_san),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ThuySanController.prototype, "remove", null);
ThuySanController = __decorate([
    (0, swagger_1.ApiTags)('Thủy sản'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('thuy-san'),
    __metadata("design:paramtypes", [thuy_san_service_1.ThuySanService])
], ThuySanController);
exports.ThuySanController = ThuySanController;
//# sourceMappingURL=thuy-san.controller.js.map