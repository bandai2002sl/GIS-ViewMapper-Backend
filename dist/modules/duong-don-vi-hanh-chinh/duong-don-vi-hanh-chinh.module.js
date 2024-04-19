"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuongDonViHanhChinhModule = void 0;
const common_1 = require("@nestjs/common");
const duong_don_vi_hanh_chinh_service_1 = require("./duong-don-vi-hanh-chinh.service");
const duong_don_vi_hanh_chinh_controller_1 = require("./duong-don-vi-hanh-chinh.controller");
const typeorm_1 = require("@nestjs/typeorm");
const duong_don_vi_hanh_chinh_entity_1 = require("./entities/duong-don-vi-hanh-chinh.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let DuongDonViHanhChinhModule = class DuongDonViHanhChinhModule {
};
DuongDonViHanhChinhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([duong_don_vi_hanh_chinh_entity_1.DuongDonViHanhChinh, administrative_unit_entity_1.AdministrativeUnit])],
        controllers: [duong_don_vi_hanh_chinh_controller_1.DuongDonViHanhChinhController, administrative_unit_controller_1.AdministrativeUnitController],
        providers: [duong_don_vi_hanh_chinh_service_1.DuongDonViHanhChinhService, administrative_unit_service_1.AdministrativeUnitService]
    })
], DuongDonViHanhChinhModule);
exports.DuongDonViHanhChinhModule = DuongDonViHanhChinhModule;
//# sourceMappingURL=duong-don-vi-hanh-chinh.module.js.map