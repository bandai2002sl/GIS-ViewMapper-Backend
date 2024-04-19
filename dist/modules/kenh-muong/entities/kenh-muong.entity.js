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
exports.KenhMuong = void 0;
const swagger_1 = require("@nestjs/swagger");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const typeorm_1 = require("typeorm");
let KenhMuong = class KenhMuong {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], KenhMuong.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten', length: '255' }),
    __metadata("design:type", String)
], KenhMuong.prototype, "ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'chieu_dai' }),
    __metadata("design:type", Number)
], KenhMuong.prototype, "chieuDai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'chieu_dai_kien_co' }),
    __metadata("design:type", Number)
], KenhMuong.prototype, "chieuDaiKienCo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], KenhMuong.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], KenhMuong.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.kiengs),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], KenhMuong.prototype, "administrativeUnit", void 0);
KenhMuong = __decorate([
    (0, typeorm_1.Entity)({ name: 'KenhMuong' })
], KenhMuong);
exports.KenhMuong = KenhMuong;
//# sourceMappingURL=kenh-muong.entity.js.map