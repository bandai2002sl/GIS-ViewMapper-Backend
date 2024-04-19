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
exports.CoSoKinhDoanh = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const loai_kinh_doanh_entity_1 = require("../../loai-kinh-doanh/entities/loai-kinh-doanh.entity");
const typeorm_1 = require("typeorm");
let CoSoKinhDoanh = class CoSoKinhDoanh extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CoSoKinhDoanh.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_diem', length: '255' }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "diaDiem", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "hinhAnh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dang_ky_kinh_doanh', length: '255' }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "dangKyKinhDoanh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'so_dien_thoai', length: 20 }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "sdt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'trang_thai', length: '255' }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "trangThai", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], CoSoKinhDoanh.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], CoSoKinhDoanh.prototype, "caNhanHtx", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => loai_kinh_doanh_entity_1.LoaiKinhDoanh, (loaiKinhDoanh) => loaiKinhDoanh.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", loai_kinh_doanh_entity_1.LoaiKinhDoanh)
], CoSoKinhDoanh.prototype, "loaiKinhDoanh", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.coSoKinhDoanhs, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], CoSoKinhDoanh.prototype, "administrativeUnit", void 0);
CoSoKinhDoanh = __decorate([
    (0, typeorm_1.Entity)({ name: 'CoSoKinhDoanh' })
], CoSoKinhDoanh);
exports.CoSoKinhDoanh = CoSoKinhDoanh;
//# sourceMappingURL=co-so-kinh-doanh.entity.js.map