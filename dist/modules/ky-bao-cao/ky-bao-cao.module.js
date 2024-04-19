"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KyBaoCaoModule = void 0;
const common_1 = require("@nestjs/common");
const ky_bao_cao_service_1 = require("./ky-bao-cao.service");
const ky_bao_cao_controller_1 = require("./ky-bao-cao.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ky_bao_cao_entity_1 = require("./entities/ky-bao-cao.entity");
const san_xuat_trong_trot_entity_1 = require("../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const san_xuat_trong_trot_controller_1 = require("../san-xuat-trong-trot/san-xuat-trong-trot.controller");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const san_xuat_trong_trot_service_1 = require("../san-xuat-trong-trot/san-xuat-trong-trot.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const crop_type_entity_1 = require("../crop-type/entities/crop-type.entity");
const crop_type_controller_1 = require("../crop-type/crop-type.controller");
const crop_type_service_1 = require("../crop-type/crop-type.service");
let KyBaoCaoModule = class KyBaoCaoModule {
};
KyBaoCaoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ky_bao_cao_entity_1.KyBaoCao, san_xuat_trong_trot_entity_1.SanXuatTrongTrot, administrative_unit_entity_1.AdministrativeUnit, crop_type_entity_1.CropType])],
        controllers: [ky_bao_cao_controller_1.KyBaoCaoController, san_xuat_trong_trot_controller_1.SanXuatTrongTrotController, administrative_unit_controller_1.AdministrativeUnitController, crop_type_controller_1.CropTypeController],
        providers: [ky_bao_cao_service_1.KyBaoCaoService, san_xuat_trong_trot_service_1.SanXuatTrongTrotService, administrative_unit_service_1.AdministrativeUnitService, crop_type_service_1.CropTypeService]
    })
], KyBaoCaoModule);
exports.KyBaoCaoModule = KyBaoCaoModule;
//# sourceMappingURL=ky-bao-cao.module.js.map