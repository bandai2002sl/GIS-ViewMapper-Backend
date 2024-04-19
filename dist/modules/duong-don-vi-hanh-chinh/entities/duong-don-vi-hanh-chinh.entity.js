"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuongDonViHanhChinh = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const typeorm_1 = require("typeorm");
let DuongDonViHanhChinh = class DuongDonViHanhChinh extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DuongDonViHanhChinh.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'geometry', spatialFeatureType: 'MULTIPOLYGON', name: 'Duong' }),
    __metadata("design:type", String)
], DuongDonViHanhChinh.prototype, "duong", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.duongDonViHanhChinhs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], DuongDonViHanhChinh.prototype, "administrativeUnit", void 0);
DuongDonViHanhChinh = __decorate([
    (0, typeorm_1.Entity)({ name: 'DuongDonViHanhChinh' })
], DuongDonViHanhChinh);
exports.DuongDonViHanhChinh = DuongDonViHanhChinh;
//# sourceMappingURL=duong-don-vi-hanh-chinh.entity.js.map