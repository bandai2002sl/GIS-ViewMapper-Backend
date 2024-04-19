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
exports.SanXuatThuySan = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const ky_bao_cao_entity_1 = require("../../ky-bao-cao/entities/ky-bao-cao.entity");
const thuy_san_entity_1 = require("../../thuy-san/entities/thuy-san.entity");
const typeorm_1 = require("typeorm");
let SanXuatThuySan = class SanXuatThuySan extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SanXuatThuySan.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "hinhAnh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tinh_trang', length: '255' }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "tinhTrang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], SanXuatThuySan.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.sanXuatThuySans, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], SanXuatThuySan.prototype, "caNhanHtx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => thuy_san_entity_1.ThuySan, (thuySan) => thuySan.sanXuatThuySans, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", thuy_san_entity_1.ThuySan)
], SanXuatThuySan.prototype, "thuySan", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ky_bao_cao_entity_1.KyBaoCao, (kyBaoCao) => kyBaoCao.sanXuatThuySans, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ky_bao_cao_entity_1.KyBaoCao)
], SanXuatThuySan.prototype, "kyBaoCao", void 0);
SanXuatThuySan = __decorate([
    (0, typeorm_1.Entity)({ name: 'SanXuatThuySan' })
], SanXuatThuySan);
exports.SanXuatThuySan = SanXuatThuySan;
//# sourceMappingURL=san-xuat-thuy-san.entity.js.map