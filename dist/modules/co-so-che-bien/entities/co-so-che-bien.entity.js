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
exports.CoSoCheBien = exports.Co_Dang_Ky = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const ky_bao_cao_entity_1 = require("../../ky-bao-cao/entities/ky-bao-cao.entity");
const typeorm_1 = require("typeorm");
var Co_Dang_Ky;
(function (Co_Dang_Ky) {
    Co_Dang_Ky["Khong"] = "Kh\u00F4ng";
    Co_Dang_Ky["Co"] = "C\u00F3";
})(Co_Dang_Ky = exports.Co_Dang_Ky || (exports.Co_Dang_Ky = {}));
let CoSoCheBien = class CoSoCheBien extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CoSoCheBien.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'loai_che_bien', length: '255' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "loaiCheBien", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "hinhAnh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'trang_thai', length: '255' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "trangThai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'enum', name: 'co_dang_ky', enum: Co_Dang_Ky, default: Co_Dang_Ky.Khong }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "coDangKy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', length: '200', name: 'CoGCNATTP' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "CoGCNATTP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], CoSoCheBien.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoCheBiens, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], CoSoCheBien.prototype, "caNhanHtx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.coSoCheBiens, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], CoSoCheBien.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ky_bao_cao_entity_1.KyBaoCao, (kyBaoCao) => kyBaoCao.coSoCheBiens, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ky_bao_cao_entity_1.KyBaoCao)
], CoSoCheBien.prototype, "kyBaoCao", void 0);
CoSoCheBien = __decorate([
    (0, typeorm_1.Entity)({ name: 'CoSoCheBien' })
], CoSoCheBien);
exports.CoSoCheBien = CoSoCheBien;
//# sourceMappingURL=co-so-che-bien.entity.js.map