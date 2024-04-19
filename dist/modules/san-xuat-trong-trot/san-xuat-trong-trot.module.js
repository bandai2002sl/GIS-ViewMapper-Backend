"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanXuatTrongTrotModule = void 0;
const common_1 = require("@nestjs/common");
const san_xuat_trong_trot_service_1 = require("./san-xuat-trong-trot.service");
const san_xuat_trong_trot_controller_1 = require("./san-xuat-trong-trot.controller");
const typeorm_1 = require("@nestjs/typeorm");
const san_xuat_trong_trot_entity_1 = require("./entities/san-xuat-trong-trot.entity");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const crop_type_entity_1 = require("../crop-type/entities/crop-type.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const crop_type_controller_1 = require("../crop-type/crop-type.controller");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let SanXuatTrongTrotModule = class SanXuatTrongTrotModule {
};
SanXuatTrongTrotModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([san_xuat_trong_trot_entity_1.SanXuatTrongTrot, crop_type_entity_1.CropType, administrative_unit_entity_1.AdministrativeUnit, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [san_xuat_trong_trot_controller_1.SanXuatTrongTrotController, crop_type_controller_1.CropTypeController, administrative_unit_controller_1.AdministrativeUnitController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [san_xuat_trong_trot_service_1.SanXuatTrongTrotService, crop_type_service_1.CropTypeService, administrative_unit_service_1.AdministrativeUnitService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], SanXuatTrongTrotModule);
exports.SanXuatTrongTrotModule = SanXuatTrongTrotModule;
//# sourceMappingURL=san-xuat-trong-trot.module.js.map