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
exports.HoChua = exports.LOAIHO = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const administrative_unit_entity_1 = require("../../administrative-unit/entities/administrative-unit.entity");
const typeorm_1 = require("typeorm");
var LOAIHO;
(function (LOAIHO) {
    LOAIHO["DAPHOCHUAQUANTRONG"] = "\u0110\u1EADp h\u1ED3 ch\u1EE9a quan tr\u1ECDng \u0111\u1EB7c bi\u1EC7t";
    LOAIHO["DAPHOCHUANUOCLON"] = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc l\u1EDBn";
    LOAIHO["DAPHOCHUANUOCVUA"] = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc v\u1EEBa";
    LOAIHO["DAPHOCHUANUOCNHO"] = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc nh\u1ECF";
})(LOAIHO = exports.LOAIHO || (exports.LOAIHO = {}));
let HoChua = class HoChua extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], HoChua.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten', length: '255' }),
    __metadata("design:type", String)
], HoChua.prototype, "ten", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'dia_chi', length: '255' }),
    __metadata("design:type", String)
], HoChua.prototype, "diaChi", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'dung_tich_thiet_ke' }),
    __metadata("design:type", Number)
], HoChua.prototype, "dungTichThietKe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'dien_tich_tuoi_thiet_ke' }),
    __metadata("design:type", Number)
], HoChua.prototype, "dienTichTuoiThietKe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'decimal', name: 'dien_tich_tuoi_thuc_te' }),
    __metadata("design:type", Number)
], HoChua.prototype, "dienTichTuoiThucTe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'enum', name: 'loai_ho', enum: LOAIHO, default: LOAIHO.DAPHOCHUANUOCNHO }),
    __metadata("design:type", String)
], HoChua.prototype, "loaiHo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    }),
    __metadata("design:type", String)
], HoChua.prototype, "toaDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], HoChua.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => administrative_unit_entity_1.AdministrativeUnit, (administrativeUnit) => administrativeUnit.hoChuas),
    __metadata("design:type", administrative_unit_entity_1.AdministrativeUnit)
], HoChua.prototype, "administrativeUnit", void 0);
HoChua = __decorate([
    (0, typeorm_1.Entity)({ name: 'HoChua' })
], HoChua);
exports.HoChua = HoChua;
//# sourceMappingURL=ho-chua.entity.js.map