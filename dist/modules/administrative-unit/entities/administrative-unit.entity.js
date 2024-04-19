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
exports.AdministrativeUnit = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const mo_hinh_cong_nghe_cao_entity_1 = require("../../mo-hinh-cong-nghe-cao/entities/mo-hinh-cong-nghe-cao.entity");
const benh_cay_entity_1 = require("../../benh-cay/entities/benh-cay.entity");
const chuyen_doi_su_dung_dat_entity_1 = require("../../chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity");
const han_han_entity_1 = require("../../han-han/entities/han-han.entity");
const san_xuat_trong_trot_entity_1 = require("../../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity");
const vung_chan_nuoi_an_toan_entity_1 = require("../../vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity");
const benh_vat_nuoi_entity_1 = require("../../benh-vat-nuoi/entities/benh-vat-nuoi.entity");
const co_so_kinh_doanh_entity_1 = require("../../co-so-kinh-doanh/entities/co-so-kinh-doanh.entity");
const co_so_che_bien_entity_1 = require("../../co-so-che-bien/entities/co-so-che-bien.entity");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const vung_don_vi_hanh_chinh_entity_1 = require("../../vung-don-vi-hanh-chinh/entities/vung-don-vi-hanh-chinh.entity");
const duong_don_vi_hanh_chinh_entity_1 = require("../../duong-don-vi-hanh-chinh/entities/duong-don-vi-hanh-chinh.entity");
const cong_entity_1 = require("../../cong/entities/cong.entity");
const ho_chua_entity_1 = require("../../ho-chua/entities/ho-chua.entity");
const tram_bom_entity_1 = require("../../tram-bom/entities/tram-bom.entity");
const kenh_muong_entity_1 = require("../../kenh-muong/entities/kenh-muong.entity");
const dien_tich_tuoi_tieu_entity_1 = require("../../dien-tich-tuoi-tieu/entities/dien-tich-tuoi-tieu.entity");
const tau_ca_entity_1 = require("../../tau-ca/entities/tau-ca.entity");
let AdministrativeUnit = class AdministrativeUnit extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], AdministrativeUnit.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'nvarchar',
        name: 'ma',
        length: 50,
        unique: true,
        nullable: true,
    }),
    __metadata("design:type", String)
], AdministrativeUnit.prototype, "maHanhChinh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten', unique: false, nullable: false }),
    __metadata("design:type", String)
], AdministrativeUnit.prototype, "ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'int', name: 'capHanhChinh', unique: false, nullable: false }),
    __metadata("design:type", Number)
], AdministrativeUnit.prototype, "capHanhChinh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'nvarchar',
        name: 'tenVietTat',
        length: 50,
        unique: false,
        nullable: false,
    }),
    __metadata("design:type", String)
], AdministrativeUnit.prototype, "tenVietTat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], AdministrativeUnit.prototype, "toaDo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => mo_hinh_cong_nghe_cao_entity_1.MoHinhCongNgheCao, (MoHinhCongNgheCao) => MoHinhCongNgheCao.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "moHinhCongNgheCaos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_cay_entity_1.BenhCay, (benhCay) => benhCay.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "benhCays", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chuyen_doi_su_dung_dat_entity_1.ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "chuyenDoiSuDungDats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => han_han_entity_1.HanHan, (hanHan) => hanHan.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "hanHans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_trong_trot_entity_1.SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "sanXuatTrongTrots", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vung_chan_nuoi_an_toan_entity_1.VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "vungChanNuoiAnToans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_vat_nuoi_entity_1.BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "benhVatNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_kinh_doanh_entity_1.CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "coSoKinhDoanhs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_che_bien_entity_1.CoSoCheBien, (coSoCheBien) => coSoCheBien.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "coSoCheBiens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "caNhanHtxs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vung_don_vi_hanh_chinh_entity_1.VungDonViHanhChinh, (vungDonViHanhChinh) => vungDonViHanhChinh.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "vungDonViHanhChinhs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => duong_don_vi_hanh_chinh_entity_1.DuongDonViHanhChinh, (duongDonViHanhChinh) => duongDonViHanhChinh.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "duongDonViHanhChinhs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cong_entity_1.Cong, (cong) => cong.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "congs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ho_chua_entity_1.HoChua, (hoChua) => hoChua.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "hoChuas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tram_bom_entity_1.TramBom, (tramBom) => tramBom.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "tramBoms", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kenh_muong_entity_1.KenhMuong, (KenhMuong) => KenhMuong.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "kiengs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dien_tich_tuoi_tieu_entity_1.DienTichTuoiTieu, (TuoiTieu) => TuoiTieu.cropType),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "sTuoiTieu", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tau_ca_entity_1.TauCa, (tauCa) => tauCa.administrativeUnit),
    __metadata("design:type", Array)
], AdministrativeUnit.prototype, "tauCas", void 0);
AdministrativeUnit = __decorate([
    (0, typeorm_1.Entity)({ name: 'DonViHanhChinh' })
], AdministrativeUnit);
exports.AdministrativeUnit = AdministrativeUnit;
//# sourceMappingURL=administrative-unit.entity.js.map