"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenhVatNuoiModule = void 0;
const common_1 = require("@nestjs/common");
const benh_vat_nuoi_service_1 = require("./benh-vat-nuoi.service");
const benh_vat_nuoi_controller_1 = require("./benh-vat-nuoi.controller");
const typeorm_1 = require("@nestjs/typeorm");
const benh_vat_nuoi_entity_1 = require("./entities/benh-vat-nuoi.entity");
const vat_nuoi_entity_1 = require("../vat-nuoi/entities/vat-nuoi.entity");
const loai_benh_entity_1 = require("../loai-benh/entities/loai-benh.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const vat_nuoi_controller_1 = require("../vat-nuoi/vat-nuoi.controller");
const loai_benh_controller_1 = require("../loai-benh/loai-benh.controller");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const loai_benh_service_1 = require("../loai-benh/loai-benh.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let BenhVatNuoiModule = class BenhVatNuoiModule {
};
BenhVatNuoiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([benh_vat_nuoi_entity_1.BenhVatNuoi, vat_nuoi_entity_1.VatNuoi, loai_benh_entity_1.LoaiBenh, administrative_unit_entity_1.AdministrativeUnit, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [benh_vat_nuoi_controller_1.BenhVatNuoiController, vat_nuoi_controller_1.VatNuoiController, loai_benh_controller_1.LoaiBenhController, administrative_unit_controller_1.AdministrativeUnitController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [benh_vat_nuoi_service_1.BenhVatNuoiService, vat_nuoi_service_1.VatNuoiService, loai_benh_service_1.LoaiBenhService, administrative_unit_service_1.AdministrativeUnitService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], BenhVatNuoiModule);
exports.BenhVatNuoiModule = BenhVatNuoiModule;
//# sourceMappingURL=benh-vat-nuoi.module.js.map