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
exports.HanHanController = void 0;
const common_1 = require("@nestjs/common");
const han_han_service_1 = require("./han-han.service");
const create_han_han_dto_1 = require("./dto/create-han-han.dto");
const update_han_han_dto_1 = require("./dto/update-han-han.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let HanHanController = class HanHanController {
    constructor(hanHanService) {
        this.hanHanService = hanHanService;
    }
    create(createHanHanDto) {
        return this.hanHanService.create(createHanHanDto);
    }
    findAll() {
        return this.hanHanService.findAll();
    }
    getOne(id) {
        return this.hanHanService.getOne(+id);
    }
    update(id, updateHanHanDto) {
        return this.hanHanService.update(+id, updateHanHanDto);
    }
    deleteHanHan(id) {
        return this.hanHanService.deleteHanHan(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Han_han),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_han_han_dto_1.CreateHanHanDto]),
    __metadata("design:returntype", void 0)
], HanHanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Han_han),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HanHanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HanHanController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Han_han),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_han_han_dto_1.UpdateHanHanDto]),
    __metadata("design:returntype", void 0)
], HanHanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Han_han),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HanHanController.prototype, "deleteHanHan", null);
HanHanController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('han-han'),
    __metadata("design:paramtypes", [han_han_service_1.HanHanService])
], HanHanController);
exports.HanHanController = HanHanController;
//# sourceMappingURL=han-han.controller.js.map