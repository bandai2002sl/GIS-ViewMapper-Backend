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
exports.CongController = void 0;
const common_1 = require("@nestjs/common");
const cong_service_1 = require("./cong.service");
const create_cong_dto_1 = require("./dto/create-cong.dto");
const update_cong_dto_1 = require("./dto/update-cong.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let CongController = class CongController {
    constructor(congService) {
        this.congService = congService;
    }
    create(createCongDto) {
        return this.congService.create(createCongDto);
    }
    findAll() {
        return this.congService.findAll();
    }
    findOne(id) {
        return this.congService.getOne(+id);
    }
    update(id, updateCongDto) {
        return this.congService.update(+id, updateCongDto);
    }
    remove(id) {
        return this.congService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cong_dto_1.CreateCongDto]),
    __metadata("design:returntype", void 0)
], CongController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CongController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CongController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cong_dto_1.UpdateCongDto]),
    __metadata("design:returntype", void 0)
], CongController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Cong),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CongController.prototype, "remove", null);
CongController = __decorate([
    (0, swagger_1.ApiTags)('Cống'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('cong'),
    __metadata("design:paramtypes", [cong_service_1.CongService])
], CongController);
exports.CongController = CongController;
//# sourceMappingURL=cong.controller.js.map