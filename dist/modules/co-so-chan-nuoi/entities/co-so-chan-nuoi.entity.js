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
exports.CoSoChanNuoi = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const hinh_thuc_chan_nuoi_entity_1 = require("../../hinh-thuc-chan-nuoi/entities/hinh-thuc-chan-nuoi.entity");
const ky_bao_cao_entity_1 = require("../../ky-bao-cao/entities/ky-bao-cao.entity");
const vat_nuoi_entity_1 = require("../../vat-nuoi/entities/vat-nuoi.entity");
const typeorm_1 = require("typeorm");
let CoSoChanNuoi = class CoSoChanNuoi extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CoSoChanNuoi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tinh_trang', length: '255' }),
    __metadata("design:type", String)
], CoSoChanNuoi.prototype, "tinhTrang", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], CoSoChanNuoi.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], CoSoChanNuoi.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], CoSoChanNuoi.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.coSoChanNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], CoSoChanNuoi.prototype, "caNhanHtx", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => vat_nuoi_entity_1.VatNuoi, (vatNuoi) => vatNuoi.coSoChanNuois, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinTable)({ name: 'CoSoChanNuoiVatNuoi' }),
    __metadata("design:type", Array)
], CoSoChanNuoi.prototype, "vatNuoi", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => hinh_thuc_chan_nuoi_entity_1.HinhThucChanNuoi, (hinhThucChanNuoi) => hinhThucChanNuoi.coSoChanNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", hinh_thuc_chan_nuoi_entity_1.HinhThucChanNuoi)
], CoSoChanNuoi.prototype, "hinhThucChanNuoi", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ky_bao_cao_entity_1.KyBaoCao, (kyBaoCao) => kyBaoCao.coSoChanNuois, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ky_bao_cao_entity_1.KyBaoCao)
], CoSoChanNuoi.prototype, "kyBaoCao", void 0);
CoSoChanNuoi = __decorate([
    (0, typeorm_1.Entity)({ name: 'CoSoChanNuoi' })
], CoSoChanNuoi);
exports.CoSoChanNuoi = CoSoChanNuoi;
//# sourceMappingURL=co-so-chan-nuoi.entity.js.map