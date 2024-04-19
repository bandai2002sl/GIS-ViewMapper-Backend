"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KenhMuongModule = void 0;
const common_1 = require("@nestjs/common");
const kenh_muong_service_1 = require("./kenh-muong.service");
const kenh_muong_controller_1 = require("./kenh-muong.controller");
const typeorm_1 = require("@nestjs/typeorm");
const kenh_muong_entity_1 = require("./entities/kenh-muong.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let KenhMuongModule = class KenhMuongModule {
};
KenhMuongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                kenh_muong_entity_1.KenhMuong,
                administrative_unit_entity_1.AdministrativeUnit
            ])],
        controllers: [
            kenh_muong_controller_1.KenhMuongController,
            administrative_unit_controller_1.AdministrativeUnitController
        ],
        providers: [
            kenh_muong_service_1.KenhMuongService,
            administrative_unit_service_1.AdministrativeUnitService
        ]
    })
], KenhMuongModule);
exports.KenhMuongModule = KenhMuongModule;
//# sourceMappingURL=kenh-muong.module.js.map