"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TauCaModule = void 0;
const common_1 = require("@nestjs/common");
const tau_ca_service_1 = require("./tau-ca.service");
const tau_ca_controller_1 = require("./tau-ca.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tau_ca_entity_1 = require("./entities/tau-ca.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
let TauCaModule = class TauCaModule {
};
TauCaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                tau_ca_entity_1.TauCa,
                administrative_unit_entity_1.AdministrativeUnit,
                ca_nhan_htx_entity_1.CaNhanHtx
            ])],
        controllers: [
            tau_ca_controller_1.TauCaController,
            administrative_unit_controller_1.AdministrativeUnitController,
            ca_nhan_htx_controller_1.CaNhanHtxController
        ],
        providers: [tau_ca_service_1.TauCaService,
            administrative_unit_service_1.AdministrativeUnitService,
            ca_nhan_htx_service_1.CaNhanHtxService
        ]
    })
], TauCaModule);
exports.TauCaModule = TauCaModule;
//# sourceMappingURL=tau-ca.module.js.map