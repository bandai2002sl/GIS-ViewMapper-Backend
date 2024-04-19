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
exports.HinhThucChanNuoi = void 0;
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
const co_so_chan_nuoi_entity_1 = require("../../co-so-chan-nuoi/entities/co-so-chan-nuoi.entity");
const typeorm_1 = require("typeorm");
let HinhThucChanNuoi = class HinhThucChanNuoi extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], HinhThucChanNuoi.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'ten_hinh_thuc', length: '255' }),
    __metadata("design:type", String)
], HinhThucChanNuoi.prototype, "tenHinhThuc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({ type: 'nvarchar', name: 'tam_ngung', length: '255' }),
    __metadata("design:type", String)
], HinhThucChanNuoi.prototype, "tamNgung", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => co_so_chan_nuoi_entity_1.CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.hinhThucChanNuoi),
    __metadata("design:type", Array)
], HinhThucChanNuoi.prototype, "coSoChanNuois", void 0);
HinhThucChanNuoi = __decorate([
    (0, typeorm_1.Entity)({ name: 'HinhThucChanNuoi' })
], HinhThucChanNuoi);
exports.HinhThucChanNuoi = HinhThucChanNuoi;
//# sourceMappingURL=hinh-thuc-chan-nuoi.entity.js.map