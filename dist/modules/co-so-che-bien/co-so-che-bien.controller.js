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
exports.CoSoCheBienController = void 0;
const common_1 = require("@nestjs/common");
const co_so_che_bien_service_1 = require("./co-so-che-bien.service");
const create_co_so_che_bien_dto_1 = require("./dto/create-co-so-che-bien.dto");
const update_co_so_che_bien_dto_1 = require("./dto/update-co-so-che-bien.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let CoSoCheBienController = class CoSoCheBienController {
    constructor(coSoCheBienService) {
        this.coSoCheBienService = coSoCheBienService;
    }
    create(createCoSoCheBienDto) {
        return this.coSoCheBienService.create(createCoSoCheBienDto);
    }
    findAll() {
        return this.coSoCheBienService.findAll();
    }
    getOne(id) {
        return this.coSoCheBienService.getOne(+id);
    }
    update(id, updateCoSoCheBienDto) {
        return this.coSoCheBienService.update(+id, updateCoSoCheBienDto);
    }
    deleteCheBien(id) {
        return this.coSoCheBienService.deleteCheBien(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_che_bien),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_co_so_che_bien_dto_1.CreateCoSoCheBienDto]),
    __metadata("design:returntype", void 0)
], CoSoCheBienController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_che_bien),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CoSoCheBienController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoSoCheBienController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_che_bien),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_co_so_che_bien_dto_1.UpdateCoSoCheBienDto]),
    __metadata("design:returntype", void 0)
], CoSoCheBienController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Co_so_che_bien),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CoSoCheBienController.prototype, "deleteCheBien", null);
CoSoCheBienController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('co-so-che-bien'),
    __metadata("design:paramtypes", [co_so_che_bien_service_1.CoSoCheBienService])
], CoSoCheBienController);
exports.CoSoCheBienController = CoSoCheBienController;
//# sourceMappingURL=co-so-che-bien.controller.js.map