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
exports.UploadEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const shared_1 = require("../../../common/shared");
let UploadEntity = class UploadEntity extends shared_1.BaseEntityCustom {
};
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'id ' }),
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], UploadEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'typeFile ' }),
    (0, typeorm_1.Column)({ type: 'tinyint', name: 'kieu_tep', default: 0 }),
    __metadata("design:type", Number)
], UploadEntity.prototype, "typeFile", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.Column)({
        type: 'text',
        name: 'duong_dan',
    }),
    __metadata("design:type", String)
], UploadEntity.prototype, "path", void 0);
UploadEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Files' })
], UploadEntity);
exports.UploadEntity = UploadEntity;
//# sourceMappingURL=upload.entity.js.map