"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TramBomModule = void 0;
const common_1 = require("@nestjs/common");
const tram_bom_service_1 = require("./tram-bom.service");
const tram_bom_controller_1 = require("./tram-bom.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tram_bom_entity_1 = require("./entities/tram-bom.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let TramBomModule = class TramBomModule {
};
TramBomModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                tram_bom_entity_1.TramBom,
                administrative_unit_entity_1.AdministrativeUnit
            ])],
        controllers: [
            tram_bom_controller_1.TramBomController,
            administrative_unit_controller_1.AdministrativeUnitController
        ],
        providers: [
            tram_bom_service_1.TramBomService,
            administrative_unit_service_1.AdministrativeUnitService
        ]
    })
], TramBomModule);
exports.TramBomModule = TramBomModule;
//# sourceMappingURL=tram-bom.module.js.map