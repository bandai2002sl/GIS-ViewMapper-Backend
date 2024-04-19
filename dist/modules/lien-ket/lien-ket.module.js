"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LienKetModule = void 0;
const common_1 = require("@nestjs/common");
const lien_ket_service_1 = require("./lien-ket.service");
const lien_ket_controller_1 = require("./lien-ket.controller");
const typeorm_1 = require("@nestjs/typeorm");
const lien_ket_entity_1 = require("./entities/lien-ket.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let LienKetModule = class LienKetModule {
};
LienKetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lien_ket_entity_1.LienKet, ca_nhan_htx_entity_1.CaNhanHtx, administrative_unit_entity_1.AdministrativeUnit])],
        controllers: [lien_ket_controller_1.LienKetController, ca_nhan_htx_controller_1.CaNhanHtxController, administrative_unit_controller_1.AdministrativeUnitController],
        providers: [lien_ket_service_1.LienKetService, ca_nhan_htx_service_1.CaNhanHtxService, administrative_unit_service_1.AdministrativeUnitService]
    })
], LienKetModule);
exports.LienKetModule = LienKetModule;
//# sourceMappingURL=lien-ket.module.js.map