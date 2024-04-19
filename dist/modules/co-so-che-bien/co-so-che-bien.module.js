"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoSoCheBienModule = void 0;
const common_1 = require("@nestjs/common");
const co_so_che_bien_service_1 = require("./co-so-che-bien.service");
const co_so_che_bien_controller_1 = require("./co-so-che-bien.controller");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_che_bien_entity_1 = require("./entities/co-so-che-bien.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let CoSoCheBienModule = class CoSoCheBienModule {
};
CoSoCheBienModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([co_so_che_bien_entity_1.CoSoCheBien, administrative_unit_entity_1.AdministrativeUnit, ca_nhan_htx_entity_1.CaNhanHtx, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [co_so_che_bien_controller_1.CoSoCheBienController, administrative_unit_controller_1.AdministrativeUnitController, ca_nhan_htx_controller_1.CaNhanHtxController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [co_so_che_bien_service_1.CoSoCheBienService, administrative_unit_service_1.AdministrativeUnitService, ca_nhan_htx_service_1.CaNhanHtxService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], CoSoCheBienModule);
exports.CoSoCheBienModule = CoSoCheBienModule;
//# sourceMappingURL=co-so-che-bien.module.js.map