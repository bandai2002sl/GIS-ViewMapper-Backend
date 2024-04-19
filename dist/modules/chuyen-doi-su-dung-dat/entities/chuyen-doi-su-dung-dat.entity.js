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
exports.ChuyenDoiSuDungDat = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const hinh_thuc_chuyen_doi_dat_entity_1 = require("../../hinh-thuc-chuyen-doi-dat/entities/hinh-thuc-chuyen-doi-dat.entity");
const ky_bao_cao_entity_1 = require("../../ky-bao-cao/entities/ky-bao-cao.entity");
const typeorm_1 = require("typeorm");
let ChuyenDoiSuDungDat = class ChuyenDoiSuDungDat extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ChuyenDoiSuDungDat.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: "255" }),
    __metadata("design:type", String)
], ChuyenDoiSuDungDat.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], ChuyenDoiSuDungDat.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'decimal',
        name: 'dien_tich',
        precision: 10,
        scale: 6,
    }),
    __metadata("design:type", Number)
], ChuyenDoiSuDungDat.prototype, "dienTich", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], ChuyenDoiSuDungDat.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], ChuyenDoiSuDungDat.prototype, "icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_chuyen_doi' }),
    __metadata("design:type", Date)
], ChuyenDoiSuDungDat.prototype, "ngayChuyenDoi", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], ChuyenDoiSuDungDat.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hinh_thuc_chuyen_doi_dat_entity_1.HinhThucChuyenDoiDat, (hinhThucChuyenDoiDat) => hinhThucChuyenDoiDat.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", hinh_thuc_chuyen_doi_dat_entity_1.HinhThucChuyenDoiDat)
], ChuyenDoiSuDungDat.prototype, "hinhThucChuyenDoiDat", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ky_bao_cao_entity_1.KyBaoCao, (kyBaoCao) => kyBaoCao.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ky_bao_cao_entity_1.KyBaoCao)
], ChuyenDoiSuDungDat.prototype, "kyBaoCao", void 0);
ChuyenDoiSuDungDat = __decorate([
    (0, typeorm_1.Entity)({ name: 'ChuyenDoiSuDungDat' })
], ChuyenDoiSuDungDat);
exports.ChuyenDoiSuDungDat = ChuyenDoiSuDungDat;
//# sourceMappingURL=chuyen-doi-su-dung-dat.entity.js.map