"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoSoChanNuoiModule = void 0;
const common_1 = require("@nestjs/common");
const co_so_chan_nuoi_service_1 = require("./co-so-chan-nuoi.service");
const co_so_chan_nuoi_controller_1 = require("./co-so-chan-nuoi.controller");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_chan_nuoi_entity_1 = require("./entities/co-so-chan-nuoi.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const vat_nuoi_entity_1 = require("../vat-nuoi/entities/vat-nuoi.entity");
const hinh_thuc_chan_nuoi_entity_1 = require("../hinh-thuc-chan-nuoi/entities/hinh-thuc-chan-nuoi.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const vat_nuoi_controller_1 = require("../vat-nuoi/vat-nuoi.controller");
const hinh_thuc_chan_nuoi_controller_1 = require("../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const vat_nuoi_service_1 = require("../vat-nuoi/vat-nuoi.service");
const hinh_thuc_chan_nuoi_service_1 = require("../hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.service");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let CoSoChanNuoiModule = class CoSoChanNuoiModule {
};
CoSoChanNuoiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([co_so_chan_nuoi_entity_1.CoSoChanNuoi, ca_nhan_htx_entity_1.CaNhanHtx, vat_nuoi_entity_1.VatNuoi, hinh_thuc_chan_nuoi_entity_1.HinhThucChanNuoi, administrative_unit_entity_1.AdministrativeUnit, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [co_so_chan_nuoi_controller_1.CoSoChanNuoiController, ca_nhan_htx_controller_1.CaNhanHtxController, vat_nuoi_controller_1.VatNuoiController, hinh_thuc_chan_nuoi_controller_1.HinhThucChanNuoiController, administrative_unit_controller_1.AdministrativeUnitController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [co_so_chan_nuoi_service_1.CoSoChanNuoiService, ca_nhan_htx_service_1.CaNhanHtxService, vat_nuoi_service_1.VatNuoiService, hinh_thuc_chan_nuoi_service_1.HinhThucChanNuoiService, administrative_unit_service_1.AdministrativeUnitService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], CoSoChanNuoiModule);
exports.CoSoChanNuoiModule = CoSoChanNuoiModule;
//# sourceMappingURL=co-so-chan-nuoi.module.js.map