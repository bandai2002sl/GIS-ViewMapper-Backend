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
exports.LienKet = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const ca_nhan_htx_entity_1 = require("../../ca-nhan-htx/entities/ca-nhan-htx.entity");
const typeorm_1 = require("typeorm");
let LienKet = class LienKet extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LienKet.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_thuc_lien_ket', length: '255' }),
    __metadata("design:type", String)
], LienKet.prototype, "hinhThucLienKet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_lien_ket' }),
    __metadata("design:type", Date)
], LienKet.prototype, "ngayLienKet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'trang_thai', length: '255' }),
    __metadata("design:type", String)
], LienKet.prototype, "trangThai", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ca_nhan_htx_entity_1.CaNhanHtx, (caNhanHtx) => caNhanHtx.lienKets, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", ca_nhan_htx_entity_1.CaNhanHtx)
], LienKet.prototype, "caNhanHtx", void 0);
LienKet = __decorate([
    (0, typeorm_1.Entity)({ name: 'LienKet' })
], LienKet);
exports.LienKet = LienKet;
//# sourceMappingURL=lien-ket.entity.js.map