"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanXuatThuySanModule = void 0;
const common_1 = require("@nestjs/common");
const san_xuat_thuy_san_service_1 = require("./san-xuat-thuy-san.service");
const san_xuat_thuy_san_controller_1 = require("./san-xuat-thuy-san.controller");
const typeorm_1 = require("@nestjs/typeorm");
const san_xuat_thuy_san_entity_1 = require("./entities/san-xuat-thuy-san.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const thuy_san_entity_1 = require("../thuy-san/entities/thuy-san.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const thuy_san_controller_1 = require("../thuy-san/thuy-san.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const thuy_san_service_1 = require("../thuy-san/thuy-san.service");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let SanXuatThuySanModule = class SanXuatThuySanModule {
};
SanXuatThuySanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([san_xuat_thuy_san_entity_1.SanXuatThuySan, ca_nhan_htx_entity_1.CaNhanHtx, thuy_san_entity_1.ThuySan, administrative_unit_entity_1.AdministrativeUnit, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [san_xuat_thuy_san_controller_1.SanXuatThuySanController, ca_nhan_htx_controller_1.CaNhanHtxController, thuy_san_controller_1.ThuySanController, administrative_unit_controller_1.AdministrativeUnitController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [san_xuat_thuy_san_service_1.SanXuatThuySanService, ca_nhan_htx_service_1.CaNhanHtxService, thuy_san_service_1.ThuySanService, administrative_unit_service_1.AdministrativeUnitService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], SanXuatThuySanModule);
exports.SanXuatThuySanModule = SanXuatThuySanModule;
//# sourceMappingURL=san-xuat-thuy-san.module.js.map