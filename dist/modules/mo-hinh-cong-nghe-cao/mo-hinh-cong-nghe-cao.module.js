"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoHinhCongNgheCaoModule = void 0;
const common_1 = require("@nestjs/common");
const mo_hinh_cong_nghe_cao_service_1 = require("./mo-hinh-cong-nghe-cao.service");
const mo_hinh_cong_nghe_cao_controller_1 = require("./mo-hinh-cong-nghe-cao.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mo_hinh_cong_nghe_cao_entity_1 = require("./entities/mo-hinh-cong-nghe-cao.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let MoHinhCongNgheCaoModule = class MoHinhCongNgheCaoModule {
};
MoHinhCongNgheCaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([mo_hinh_cong_nghe_cao_entity_1.MoHinhCongNgheCao, ca_nhan_htx_entity_1.CaNhanHtx, administrative_unit_entity_1.AdministrativeUnit])],
        controllers: [mo_hinh_cong_nghe_cao_controller_1.MoHinhCongNgheCaoController, ca_nhan_htx_controller_1.CaNhanHtxController, administrative_unit_controller_1.AdministrativeUnitController],
        providers: [mo_hinh_cong_nghe_cao_service_1.MoHinhCongNgheCaoService, ca_nhan_htx_service_1.CaNhanHtxService, administrative_unit_service_1.AdministrativeUnitService]
    })
], MoHinhCongNgheCaoModule);
exports.MoHinhCongNgheCaoModule = MoHinhCongNgheCaoModule;
//# sourceMappingURL=mo-hinh-cong-nghe-cao.module.js.map