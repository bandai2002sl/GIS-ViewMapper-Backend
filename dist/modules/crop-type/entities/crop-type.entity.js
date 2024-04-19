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
exports.CropType = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const san_xuat_trong_trot_entity_1 = require("../../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity");
const benh_cay_entity_1 = require("../../benh-cay/entities/benh-cay.entity");
const han_han_entity_1 = require("../../han-han/entities/han-han.entity");
const dien_tich_tuoi_tieu_entity_1 = require("../../dien-tich-tuoi-tieu/entities/dien-tich-tuoi-tieu.entity");
let CropType = class CropType extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], CropType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten', length: "255" }),
    __metadata("design:type", String)
], CropType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: "255" }),
    __metadata("design:type", String)
], CropType.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], CropType.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: '255' }),
    __metadata("design:type", String)
], CropType.prototype, "tamNgung", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], CropType.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_trong_trot_entity_1.SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.cropType),
    __metadata("design:type", Array)
], CropType.prototype, "sanXuatTrongTrots", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => benh_cay_entity_1.BenhCay, (benhCay) => benhCay.cropType),
    __metadata("design:type", Array)
], CropType.prototype, "benhCays", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => han_han_entity_1.HanHan, (hanHan) => hanHan.cropType),
    __metadata("design:type", Array)
], CropType.prototype, "hanHans", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dien_tich_tuoi_tieu_entity_1.DienTichTuoiTieu, (TuoiTieu) => TuoiTieu.cropType),
    __metadata("design:type", Array)
], CropType.prototype, "sTuoiTieu", void 0);
CropType = __decorate([
    (0, typeorm_1.Entity)({ name: 'CropType' })
], CropType);
exports.CropType = CropType;
//# sourceMappingURL=crop-type.entity.js.map