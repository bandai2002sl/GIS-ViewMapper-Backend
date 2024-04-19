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
exports.LoaiKinhDoanh = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const co_so_kinh_doanh_entity_1 = require("../../co-so-kinh-doanh/entities/co-so-kinh-doanh.entity");
const typeorm_1 = require("typeorm");
let LoaiKinhDoanh = class LoaiKinhDoanh extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LoaiKinhDoanh.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'loai_kinh_doanh', length: '255' }),
    __metadata("design:type", String)
], LoaiKinhDoanh.prototype, "loaiKinhDoanh", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'mo_ta', length: '255' }),
    __metadata("design:type", String)
], LoaiKinhDoanh.prototype, "moTa", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: '255' }),
    __metadata("design:type", String)
], LoaiKinhDoanh.prototype, "tamNgung", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_kinh_doanh_entity_1.CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.loaiKinhDoanh),
    __metadata("design:type", Array)
], LoaiKinhDoanh.prototype, "coSoKinhDoanhs", void 0);
LoaiKinhDoanh = __decorate([
    (0, typeorm_1.Entity)({ name: 'LoaiKinhDoanh' })
], LoaiKinhDoanh);
exports.LoaiKinhDoanh = LoaiKinhDoanh;
//# sourceMappingURL=loai-kinh-doanh.entity.js.map