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
exports.HinhThucChuyenDoiDat = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const chuyen_doi_su_dung_dat_entity_1 = require("../../chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity");
const typeorm_1 = require("typeorm");
let HinhThucChuyenDoiDat = class HinhThucChuyenDoiDat extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], HinhThucChuyenDoiDat.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten_hinh_thuc', length: '255' }),
    __metadata("design:type", String)
], HinhThucChuyenDoiDat.prototype, "tenHinhThuc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: "255" }),
    __metadata("design:type", String)
], HinhThucChuyenDoiDat.prototype, "tamNgung", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => chuyen_doi_su_dung_dat_entity_1.ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.hinhThucChuyenDoiDat),
    __metadata("design:type", Array)
], HinhThucChuyenDoiDat.prototype, "chuyenDoiSuDungDats", void 0);
HinhThucChuyenDoiDat = __decorate([
    (0, typeorm_1.Entity)({ name: 'HinhThucChuyenDoiDat' })
], HinhThucChuyenDoiDat);
exports.HinhThucChuyenDoiDat = HinhThucChuyenDoiDat;
//# sourceMappingURL=hinh-thuc-chuyen-doi-dat.entity.js.map