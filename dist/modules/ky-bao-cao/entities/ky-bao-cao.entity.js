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
exports.KyBaoCao = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const benh_cay_entity_1 = require("../../benh-cay/entities/benh-cay.entity");
const benh_vat_nuoi_entity_1 = require("../../benh-vat-nuoi/entities/benh-vat-nuoi.entity");
const chuyen_doi_su_dung_dat_entity_1 = require("../../chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity");
const co_so_chan_nuoi_entity_1 = require("../../co-so-chan-nuoi/entities/co-so-chan-nuoi.entity");
const co_so_che_bien_entity_1 = require("../../co-so-che-bien/entities/co-so-che-bien.entity");
const han_han_entity_1 = require("../../han-han/entities/han-han.entity");
const san_xuat_thuy_san_entity_1 = require("../../san-xuat-thuy-san/entities/san-xuat-thuy-san.entity");
const san_xuat_trong_trot_entity_1 = require("../../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity");
const san_xuat_vat_nuoi_entity_1 = require("../../san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity");
const vung_chan_nuoi_an_toan_entity_1 = require("../../vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity");
const typeorm_1 = require("typeorm");
let KyBaoCao = class KyBaoCao extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], KyBaoCao.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tenBaoCao', length: "255" }),
    __metadata("design:type", String)
], KyBaoCao.prototype, "tenBaoCao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'thoiDiemBatDau' }),
    __metadata("design:type", Date)
], KyBaoCao.prototype, "thoiDiemBatDau", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'thoiDiemKetThuc' }),
    __metadata("design:type", Date)
], KyBaoCao.prototype, "thoiDiemKetThuc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'trangThai', length: '255' }),
    __metadata("design:type", String)
], KyBaoCao.prototype, "trangThai", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_trong_trot_entity_1.SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "sanXuatTrongTrots", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_cay_entity_1.BenhCay, (benhCay) => benhCay.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "benhCays", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chuyen_doi_su_dung_dat_entity_1.ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "chuyenDoiSuDungDats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => han_han_entity_1.HanHan, (hanHan) => hanHan.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "hanHans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_che_bien_entity_1.CoSoCheBien, (coSoCheBien) => coSoCheBien.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "coSoCheBiens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_vat_nuoi_entity_1.SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "sanXuatVatNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_chan_nuoi_entity_1.CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "coSoChanNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vung_chan_nuoi_an_toan_entity_1.VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "vungChanNuoiAnToans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_vat_nuoi_entity_1.BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "benhVatNuois", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_thuy_san_entity_1.SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.kyBaoCao),
    __metadata("design:type", Array)
], KyBaoCao.prototype, "sanXuatThuySans", void 0);
KyBaoCao = __decorate([
    (0, typeorm_1.Entity)({ name: 'KyBaoCao' })
], KyBaoCao);
exports.KyBaoCao = KyBaoCao;
//# sourceMappingURL=ky-bao-cao.entity.js.map