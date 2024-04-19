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
exports.TramBom = exports.LOAIHINH = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const typeorm_1 = require("typeorm");
var LOAIHINH;
(function (LOAIHINH) {
    LOAIHINH["TUOI"] = "T\u01B0\u1EDBi";
    LOAIHINH["TIEU"] = "Ti\u00EAu";
    LOAIHINH["CAHAI"] = "T\u01B0\u1EDBi ti\u00EAu k\u1EBFt h\u1EE3p";
})(LOAIHINH = exports.LOAIHINH || (exports.LOAIHINH = {}));
let TramBom = class TramBom extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], TramBom.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten', length: '255' }),
    __metadata("design:type", String)
], TramBom.prototype, "ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], TramBom.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'cong_Xuat' }),
    __metadata("design:type", Number)
], TramBom.prototype, "congXuat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'enum', name: 'loai_hinh', enum: LOAIHINH, default: LOAIHINH.CAHAI }),
    __metadata("design:type", String)
], TramBom.prototype, "loaiHinh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], TramBom.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], TramBom.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.tramBoms),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], TramBom.prototype, "administrativeUnit", void 0);
TramBom = __decorate([
    (0, typeorm_1.Entity)({ name: 'TramBom' })
], TramBom);
exports.TramBom = TramBom;
//# sourceMappingURL=tram-bom.entity.js.map