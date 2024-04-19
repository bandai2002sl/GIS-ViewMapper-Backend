"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DienTichTuoiTieuModule = void 0;
const common_1 = require("@nestjs/common");
const dien_tich_tuoi_tieu_service_1 = require("./dien-tich-tuoi-tieu.service");
const dien_tich_tuoi_tieu_controller_1 = require("./dien-tich-tuoi-tieu.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dien_tich_tuoi_tieu_entity_1 = require("./entities/dien-tich-tuoi-tieu.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const crop_type_entity_1 = require("../crop-type/entities/crop-type.entity");
const crop_type_controller_1 = require("../crop-type/crop-type.controller");
const crop_type_service_1 = require("../crop-type/crop-type.service");
let DienTichTuoiTieuModule = class DienTichTuoiTieuModule {
};
DienTichTuoiTieuModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                dien_tich_tuoi_tieu_entity_1.DienTichTuoiTieu,
                administrative_unit_entity_1.AdministrativeUnit,
                crop_type_entity_1.CropType
            ])],
        controllers: [
            dien_tich_tuoi_tieu_controller_1.DienTichTuoiTieuController,
            administrative_unit_controller_1.AdministrativeUnitController,
            crop_type_controller_1.CropTypeController
        ],
        providers: [
            dien_tich_tuoi_tieu_service_1.DienTichTuoiTieuService,
            administrative_unit_service_1.AdministrativeUnitService,
            crop_type_service_1.CropTypeService
        ]
    })
], DienTichTuoiTieuModule);
exports.DienTichTuoiTieuModule = DienTichTuoiTieuModule;
//# sourceMappingURL=dien-tich-tuoi-tieu.module.js.map