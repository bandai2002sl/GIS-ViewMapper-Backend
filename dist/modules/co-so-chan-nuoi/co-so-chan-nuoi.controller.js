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
exports.CoSoChanNuoiController = void 0;
const common_1 = require("@nestjs/common");
const co_so_chan_nuoi_service_1 = require("./co-so-chan-nuoi.service");
const create_co_so_chan_nuoi_dto_1 = require("./dto/create-co-so-chan-nuoi.dto");
const update_co_so_chan_nuoi_dto_1 = require("./dto/update-co-so-chan-nuoi.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let CoSoChanNuoiController = class CoSoChanNuoiController {
    constructor(coSoChanNuoiService) {
        this.coSoChanNuoiService = coSoChanNuoiService;
    }
    create(createCoSoChanNuoiDto) {
        return this.coSoChanNuoiService.create(createCoSoChanNuoiDto);
    }
    findAll() {
        return this.coSoChanNuoiService.findAll();
    }
    getOne(id) {
        return this.coSoChanNuoiService.getOne(+id);
    }
    update(id, updateCoSoChanNuoiDto) {
        return this.coSoChanNuoiService.update(+id, updateCoSoChanNuoiDto);
    }
    deleteCoSoCN(id) {
        return this.coSoChanNuoiService.deleteCoSoCN(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_chan_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_co_so_chan_nuoi_dto_1.CreateCoSoChanNuoiDto]),
    __metadata("design:returntype", void 0)
], CoSoChanNuoiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_chan_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoSoChanNuoiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoSoChanNuoiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_chan_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_co_so_chan_nuoi_dto_1.UpdateCoSoChanNuoiDto]),
    __metadata("design:returntype", void 0)
], CoSoChanNuoiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_chan_nuoi),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoSoChanNuoiController.prototype, "deleteCoSoCN", null);
CoSoChanNuoiController = __decorate([
    (0, swagger_1.ApiTags)('Cơ Sở Chăn Nuôi'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('co-so-chan-nuoi'),
    __metadata("design:paramtypes", [co_so_chan_nuoi_service_1.CoSoChanNuoiService])
], CoSoChanNuoiController);
exports.CoSoChanNuoiController = CoSoChanNuoiController;
//# sourceMappingURL=co-so-chan-nuoi.controller.js.map