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
exports.LoaiBenh = exports.DOI_TUONG = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const benh_cay_entity_1 = require("../../benh-cay/entities/benh-cay.entity");
const benh_vat_nuoi_entity_1 = require("../../benh-vat-nuoi/entities/benh-vat-nuoi.entity");
const typeorm_1 = require("typeorm");
var DOI_TUONG;
(function (DOI_TUONG) {
    DOI_TUONG["CayTrong"] = "C\u00E2y tr\u1ED3ng";
    DOI_TUONG["VatNuoi"] = "V\u1EADt nu\u00F4i";
})(DOI_TUONG = exports.DOI_TUONG || (exports.DOI_TUONG = {}));
let LoaiBenh = class LoaiBenh extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LoaiBenh.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten_benh', length: '255' }),
    __metadata("design:type", String)
], LoaiBenh.prototype, "tenBenh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], LoaiBenh.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'enum', name: 'doi_tuong', enum: DOI_TUONG, default: DOI_TUONG.CayTrong }),
    __metadata("design:type", String)
], LoaiBenh.prototype, "doiTuong", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], LoaiBenh.prototype, "hinhAnh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], LoaiBenh.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_cay_entity_1.BenhCay, (benhCay) => benhCay.loaiBenh),
    __metadata("design:type", Array)
], LoaiBenh.prototype, "benhCays", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_vat_nuoi_entity_1.BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.loaiBenh),
    __metadata("design:type", Array)
], LoaiBenh.prototype, "benhVatNuois", void 0);
LoaiBenh = __decorate([
    (0, typeorm_1.Entity)({ name: 'LoaiBenh' })
], LoaiBenh);
exports.LoaiBenh = LoaiBenh;
//# sourceMappingURL=loai-benh.entity.js.map