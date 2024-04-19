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
exports.BenhVatNuoi = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const ky_bao_cao_entity_1 = require("../../ky-bao-cao/entities/ky-bao-cao.entity");
const loai_benh_entity_1 = require("../../loai-benh/entities/loai-benh.entity");
const vat_nuoi_entity_1 = require("../../vat-nuoi/entities/vat-nuoi.entity");
const typeorm_1 = require("typeorm");
let BenhVatNuoi = class BenhVatNuoi extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], BenhVatNuoi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], BenhVatNuoi.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'nguyen_nhan', length: "255" }),
    __metadata("design:type", String)
], BenhVatNuoi.prototype, "nguyenNhan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'decimal',
        name: 'dien_tich',
        precision: 10,
        scale: 6,
    }),
    __metadata("design:type", Number)
], BenhVatNuoi.prototype, "dienTich", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_ghi_nhan' }),
    __metadata("design:type", Date)
], BenhVatNuoi.prototype, "ngayGhiNhan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], BenhVatNuoi.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], BenhVatNuoi.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vat_nuoi_entity_1.VatNuoi, (vatNuoi) => vatNuoi.benhVatNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", vat_nuoi_entity_1.VatNuoi)
], BenhVatNuoi.prototype, "vatNuoi", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loai_benh_entity_1.LoaiBenh, (loaiBenh) => loaiBenh.benhVatNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", loai_benh_entity_1.LoaiBenh)
], BenhVatNuoi.prototype, "loaiBenh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.benhVatNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], BenhVatNuoi.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ky_bao_cao_entity_1.KyBaoCao, (kyBaoCao) => kyBaoCao.benhVatNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ky_bao_cao_entity_1.KyBaoCao)
], BenhVatNuoi.prototype, "kyBaoCao", void 0);
BenhVatNuoi = __decorate([
    (0, typeorm_1.Entity)({ name: 'BenhVatNuoi' })
], BenhVatNuoi);
exports.BenhVatNuoi = BenhVatNuoi;
//# sourceMappingURL=benh-vat-nuoi.entity.js.map