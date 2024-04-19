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
exports.VatNuoi = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const benh_vat_nuoi_entity_1 = require("../../benh-vat-nuoi/entities/benh-vat-nuoi.entity");
const co_so_chan_nuoi_entity_1 = require("../../co-so-chan-nuoi/entities/co-so-chan-nuoi.entity");
const san_xuat_vat_nuoi_entity_1 = require("../../san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity");
const vung_chan_nuoi_an_toan_entity_1 = require("../../vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity");
const typeorm_1 = require("typeorm");
let VatNuoi = class VatNuoi extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], VatNuoi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'vat_nuoi', length: "255" }),
    __metadata("design:type", String)
], VatNuoi.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: "255" }),
    __metadata("design:type", String)
], VatNuoi.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], VatNuoi.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: '255' }),
    __metadata("design:type", String)
], VatNuoi.prototype, "tamNgung", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], VatNuoi.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_vat_nuoi_entity_1.SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.vatNuoi),
    __metadata("design:type", Array)
], VatNuoi.prototype, "sanXuatVatNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vung_chan_nuoi_an_toan_entity_1.VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.vatNuoi),
    __metadata("design:type", Array)
], VatNuoi.prototype, "vungChanNuoiAnToans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_vat_nuoi_entity_1.BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.vatNuoi),
    __metadata("design:type", Array)
], VatNuoi.prototype, "benhVatNuois", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => co_so_chan_nuoi_entity_1.CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.vatNuoi),
    (0, typeorm_1.JoinTable)({ name: 'CoSoChanNuoiVatNuoi' }),
    __metadata("design:type", Array)
], VatNuoi.prototype, "coSoChanNuois", void 0);
VatNuoi = __decorate([
    (0, typeorm_1.Entity)({ name: 'VatNuoi' })
], VatNuoi);
exports.VatNuoi = VatNuoi;
//# sourceMappingURL=vat-nuoi.entity.js.map