"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VungDonViHanhChinhModule = void 0;
const common_1 = require("@nestjs/common");
const vung_don_vi_hanh_chinh_service_1 = require("./vung-don-vi-hanh-chinh.service");
const vung_don_vi_hanh_chinh_controller_1 = require("./vung-don-vi-hanh-chinh.controller");
const typeorm_1 = require("@nestjs/typeorm");
const vung_don_vi_hanh_chinh_entity_1 = require("./entities/vung-don-vi-hanh-chinh.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let VungDonViHanhChinhModule = class VungDonViHanhChinhModule {
};
VungDonViHanhChinhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vung_don_vi_hanh_chinh_entity_1.VungDonViHanhChinh, administrative_unit_entity_1.AdministrativeUnit])],
        controllers: [vung_don_vi_hanh_chinh_controller_1.VungDonViHanhChinhController, administrative_unit_controller_1.AdministrativeUnitController],
        providers: [vung_don_vi_hanh_chinh_service_1.VungDonViHanhChinhService, administrative_unit_service_1.AdministrativeUnitService]
    })
], VungDonViHanhChinhModule);
exports.VungDonViHanhChinhModule = VungDonViHanhChinhModule;
//# sourceMappingURL=vung-don-vi-hanh-chinh.module.js.map