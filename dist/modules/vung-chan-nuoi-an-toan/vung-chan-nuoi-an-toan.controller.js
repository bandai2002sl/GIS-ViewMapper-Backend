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
exports.VungChanNuoiAnToanController = void 0;
const common_1 = require("@nestjs/common");
const vung_chan_nuoi_an_toan_service_1 = require("./vung-chan-nuoi-an-toan.service");
const create_vung_chan_nuoi_an_toan_dto_1 = require("./dto/create-vung-chan-nuoi-an-toan.dto");
const update_vung_chan_nuoi_an_toan_dto_1 = require("./dto/update-vung-chan-nuoi-an-toan.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let VungChanNuoiAnToanController = class VungChanNuoiAnToanController {
    constructor(vungChanNuoiAnToanService) {
        this.vungChanNuoiAnToanService = vungChanNuoiAnToanService;
    }
    create(createVungChanNuoiAnToanDto) {
        return this.vungChanNuoiAnToanService.create(createVungChanNuoiAnToanDto);
    }
    findAll() {
        return this.vungChanNuoiAnToanService.findAll();
    }
    getOne(id) {
        return this.vungChanNuoiAnToanService.getOne(+id);
    }
    update(id, updateVungChanNuoiAnToanDto) {
        return this.vungChanNuoiAnToanService.update(+id, updateVungChanNuoiAnToanDto);
    }
    deleteVungAnToan(id) {
        return this.vungChanNuoiAnToanService.deleteVungAnToan(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_chan_nuoi_an_toan),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vung_chan_nuoi_an_toan_dto_1.CreateVungChanNuoiAnToanDto]),
    __metadata("design:returntype", void 0)
], VungChanNuoiAnToanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_chan_nuoi_an_toan),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VungChanNuoiAnToanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VungChanNuoiAnToanController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_chan_nuoi_an_toan),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vung_chan_nuoi_an_toan_dto_1.UpdateVungChanNuoiAnToanDto]),
    __metadata("design:returntype", void 0)
], VungChanNuoiAnToanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Vung_chan_nuoi_an_toan),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VungChanNuoiAnToanController.prototype, "deleteVungAnToan", null);
VungChanNuoiAnToanController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('vung-chan-nuoi-an-toan'),
    __metadata("design:paramtypes", [vung_chan_nuoi_an_toan_service_1.VungChanNuoiAnToanService])
], VungChanNuoiAnToanController);
exports.VungChanNuoiAnToanController = VungChanNuoiAnToanController;
//# sourceMappingURL=vung-chan-nuoi-an-toan.controller.js.map