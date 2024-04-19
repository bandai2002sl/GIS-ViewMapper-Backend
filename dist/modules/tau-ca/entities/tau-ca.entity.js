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
exports.TauCa = void 0;
const swagger_1 = require("@nestjs/swagger");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const typeorm_1 = require("typeorm");
let TauCa = class TauCa {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TauCa.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'int', name: 'so_dang_ky' }),
    __metadata("design:type", Number)
], TauCa.prototype, "soDangKy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], TauCa.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], TauCa.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_dang_ky' }),
    __metadata("design:type", Date)
], TauCa.prototype, "ngayDangKy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tinh_trang', length: '255', nullable: true }),
    __metadata("design:type", String)
], TauCa.prototype, "tinhTrang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TauCa.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], TauCa.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.tauCas),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], TauCa.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHTX) => caNhanHTX.tauCas),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], TauCa.prototype, "caNhanHTX", void 0);
TauCa = __decorate([
    (0, typeorm_1.Entity)({ name: 'TauCa' })
], TauCa);
exports.TauCa = TauCa;
//# sourceMappingURL=tau-ca.entity.js.map