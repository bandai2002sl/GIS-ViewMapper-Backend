"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VungChanNuoiAnToanModule = void 0;
const common_1 = require("@nestjs/common");
const vung_chan_nuoi_an_toan_service_1 = require("./vung-chan-nuoi-an-toan.service");
const vung_chan_nuoi_an_toan_controller_1 = require("./vung-chan-nuoi-an-toan.controller");
const typeorm_1 = require("@nestjs/typeorm");
const vung_chan_nuoi_an_toan_entity_1 = require("./entities/vung-chan-nuoi-an-toan.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const vat_nuoi_entity_1 = require("../vat-nuoi/entities/vat-nuoi.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const vat_nuoi_controller_1 = require("../vat-nuoi/vat-nuoi.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let VungChanNuoiAnToanModule = class VungChanNuoiAnToanModule {
};
VungChanNuoiAnToanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vung_chan_nuoi_an_toan_entity_1.VungChanNuoiAnToan, administrative_unit_entity_1.AdministrativeUnit, vat_nuoi_entity_1.VatNuoi, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [vung_chan_nuoi_an_toan_controller_1.VungChanNuoiAnToanController, administrative_unit_controller_1.AdministrativeUnitController, vat_nuoi_controller_1.VatNuoiController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [vung_chan_nuoi_an_toan_service_1.VungChanNuoiAnToanService, administrative_unit_service_1.AdministrativeUnitService, vat_nuoi_service_1.VatNuoiService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], VungChanNuoiAnToanModule);
exports.VungChanNuoiAnToanModule = VungChanNuoiAnToanModule;
//# sourceMappingURL=vung-chan-nuoi-an-toan.module.js.map