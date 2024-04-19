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
exports.ChuyenDoiSuDungDatController = void 0;
const common_1 = require("@nestjs/common");
const chuyen_doi_su_dung_dat_service_1 = require("./chuyen-doi-su-dung-dat.service");
const create_chuyen_doi_su_dung_dat_dto_1 = require("./dto/create-chuyen-doi-su-dung-dat.dto");
const update_chuyen_doi_su_dung_dat_dto_1 = require("./dto/update-chuyen-doi-su-dung-dat.dto");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../common/shared");
let ChuyenDoiSuDungDatController = class ChuyenDoiSuDungDatController {
    constructor(chuyenDoiSuDungDatService) {
        this.chuyenDoiSuDungDatService = chuyenDoiSuDungDatService;
    }
    create(createChuyenDoiSuDungDatDto) {
        return this.chuyenDoiSuDungDatService.create(createChuyenDoiSuDungDatDto);
    }
    findAll() {
        return this.chuyenDoiSuDungDatService.findAll();
    }
    getOne(id) {
        return this.chuyenDoiSuDungDatService.getOne(+id);
    }
    update(id, updateChuyenDoiSuDungDatDto) {
        return this.chuyenDoiSuDungDatService.update(+id, updateChuyenDoiSuDungDatDto);
    }
    deleteChuyenDoiDat(id) {
        return this.chuyenDoiSuDungDatService.deleteChuyenDoiDat(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Chuyen_doi_su_dung_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_chuyen_doi_su_dung_dat_dto_1.CreateChuyenDoiSuDungDatDto]),
    __metadata("design:returntype", void 0)
], ChuyenDoiSuDungDatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Chuyen_doi_su_dung_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChuyenDoiSuDungDatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChuyenDoiSuDungDatController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Chuyen_doi_su_dung_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_chuyen_doi_su_dung_dat_dto_1.UpdateChuyenDoiSuDungDatDto]),
    __metadata("design:returntype", void 0)
], ChuyenDoiSuDungDatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Chuyen_doi_su_dung_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChuyenDoiSuDungDatController.prototype, "deleteChuyenDoiDat", null);
ChuyenDoiSuDungDatController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('chuyen-doi-su-dung-dat'),
    __metadata("design:paramtypes", [chuyen_doi_su_dung_dat_service_1.ChuyenDoiSuDungDatService])
], ChuyenDoiSuDungDatController);
exports.ChuyenDoiSuDungDatController = ChuyenDoiSuDungDatController;
//# sourceMappingURL=chuyen-doi-su-dung-dat.controller.js.map