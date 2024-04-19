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
exports.DienTichTuoiTieu = exports.HINH_THUC = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const crop_type_entity_1 = require("../../crop-type/entities/crop-type.entity");
const typeorm_1 = require("typeorm");
var HINH_THUC;
(function (HINH_THUC) {
    HINH_THUC["TUOI"] = "T\u01B0\u1EDBi";
    HINH_THUC["TIEU"] = "Ti\u00EAu";
})(HINH_THUC = exports.HINH_THUC || (exports.HINH_THUC = {}));
let DienTichTuoiTieu = class DienTichTuoiTieu extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], DienTichTuoiTieu.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'dien_tich' }),
    __metadata("design:type", Number)
], DienTichTuoiTieu.prototype, "dienTich", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'datetime', name: 'ngay_thong_ke' }),
    __metadata("design:type", Date)
], DienTichTuoiTieu.prototype, "ngayThongKe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'enum', name: 'hinh_thuc', enum: HINH_THUC, default: HINH_THUC.TIEU }),
    __metadata("design:type", String)
], DienTichTuoiTieu.prototype, "hinhThuc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], DienTichTuoiTieu.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], DienTichTuoiTieu.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.sTuoiTieu),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], DienTichTuoiTieu.prototype, "administrativeUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => crop_type_entity_1.CropType, (cropType) => cropType.hanHans),
    __metadata("design:type", crop_type_entity_1.CropType)
], DienTichTuoiTieu.prototype, "cropType", void 0);
DienTichTuoiTieu = __decorate([
    (0, typeorm_1.Entity)({ name: 'DienTichTuoiTieu' })
], DienTichTuoiTieu);
exports.DienTichTuoiTieu = DienTichTuoiTieu;
//# sourceMappingURL=dien-tich-tuoi-tieu.entity.js.map