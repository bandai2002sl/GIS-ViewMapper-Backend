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
exports.ThuySan = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const san_xuat_thuy_san_entity_1 = require("../../san-xuat-thuy-san/entities/san-xuat-thuy-san.entity");
const typeorm_1 = require("typeorm");
let ThuySan = class ThuySan extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ThuySan.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'thuy_san', length: "255" }),
    __metadata("design:type", String)
], ThuySan.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: "255" }),
    __metadata("design:type", String)
], ThuySan.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'hinh_anh', length: '255' }),
    __metadata("design:type", String)
], ThuySan.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: '255' }),
    __metadata("design:type", String)
], ThuySan.prototype, "tamNgung", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'varchar', length: '200', name: 'icon' }),
    __metadata("design:type", String)
], ThuySan.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => san_xuat_thuy_san_entity_1.SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.thuySan),
    __metadata("design:type", Array)
], ThuySan.prototype, "sanXuatThuySans", void 0);
ThuySan = __decorate([
    (0, typeorm_1.Entity)({ name: 'ThuySan' })
], ThuySan);
exports.ThuySan = ThuySan;
//# sourceMappingURL=thuy-san.entity.js.map