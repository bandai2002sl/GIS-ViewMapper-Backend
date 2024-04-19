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
exports.CaNhanHtx = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const co_so_chan_nuoi_entity_1 = require("../../co-so-chan-nuoi/entities/co-so-chan-nuoi.entity");
const co_so_che_bien_entity_1 = require("../../co-so-che-bien/entities/co-so-che-bien.entity");
const co_so_kinh_doanh_entity_1 = require("../../co-so-kinh-doanh/entities/co-so-kinh-doanh.entity");
const lien_ket_entity_1 = require("../../lien-ket/entities/lien-ket.entity");
const mo_hinh_cong_nghe_cao_entity_1 = require("../../mo-hinh-cong-nghe-cao/entities/mo-hinh-cong-nghe-cao.entity");
const san_xuat_vat_nuoi_entity_1 = require("../../san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity");
const tau_ca_entity_1 = require("../../tau-ca/entities/tau-ca.entity");
const san_xuat_thuy_san_entity_1 = require("../../san-xuat-thuy-san/entities/san-xuat-thuy-san.entity");
const typeorm_1 = require("typeorm");
let CaNhanHtx = class CaNhanHtx extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CaNhanHtx.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'so_dien_thoai', length: 20 }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "sdt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'linh_vuc_hoat_dong', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "linhVucHoatDong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "hinhAnh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_thanh_lap' }),
    __metadata("design:type", Date)
], CaNhanHtx.prototype, "ngayThanhLap", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'loai_hinh', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "loaiHinh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'int', name: 'so_nguoi' }),
    __metadata("design:type", Number)
], CaNhanHtx.prototype, "soNguoi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'trang_thai', length: '255' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "trangThai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], CaNhanHtx.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.caNhanHtxs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], CaNhanHtx.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mo_hinh_cong_nghe_cao_entity_1.MoHinhCongNgheCao, (moHinhCongNgheCao) => moHinhCongNgheCao.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "moHinhCongNgheCaos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lien_ket_entity_1.LienKet, (lienKet) => lienKet.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "lienKets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_vat_nuoi_entity_1.SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "sanXuatVatNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_kinh_doanh_entity_1.CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "coSoKinhDoanhs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_che_bien_entity_1.CoSoCheBien, (coSoCheBien) => coSoCheBien.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "coSoCheBiens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_chan_nuoi_entity_1.CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "coSoChanNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tau_ca_entity_1.TauCa, (tauCa) => tauCa.caNhanHTX),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "tauCas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_thuy_san_entity_1.SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.caNhanHtx),
    __metadata("design:type", Array)
], CaNhanHtx.prototype, "sanXuatThuySans", void 0);
CaNhanHtx = __decorate([
    (0, typeorm_1.Entity)({ name: 'CaNhanHtx' })
], CaNhanHtx);
exports.CaNhanHtx = CaNhanHtx;
//# sourceMappingURL=ca-nhan-htx.entity.js.map