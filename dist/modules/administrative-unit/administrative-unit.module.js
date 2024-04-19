"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeUnitModule = void 0;
const common_1 = require("@nestjs/common");
const administrative_unit_service_1 = require("./administrative-unit.service");
const administrative_unit_entity_1 = require("./entities/administrative-unit.entity");
const typeorm_1 = require("@nestjs/typeorm");
const administrative_unit_controller_1 = require("./administrative-unit.controller");
const san_xuat_trong_trot_entity_1 = require("../san-xuat-trong-trot/entities/san-xuat-trong-trot.entity");
const san_xuat_trong_trot_controller_1 = require("../san-xuat-trong-trot/san-xuat-trong-trot.controller");
const san_xuat_trong_trot_service_1 = require("../san-xuat-trong-trot/san-xuat-trong-trot.service");
const crop_type_entity_1 = require("../crop-type/entities/crop-type.entity");
const crop_type_controller_1 = require("../crop-type/crop-type.controller");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
let AdministrativeUnitModule = class AdministrativeUnitModule {
};
AdministrativeUnitModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([administrative_unit_entity_1.AdministrativeUnit, san_xuat_trong_trot_entity_1.SanXuatTrongTrot, crop_type_entity_1.CropType, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [administrative_unit_controller_1.AdministrativeUnitController, san_xuat_trong_trot_controller_1.SanXuatTrongTrotController, crop_type_controller_1.CropTypeController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [administrative_unit_service_1.AdministrativeUnitService, san_xuat_trong_trot_service_1.SanXuatTrongTrotService, crop_type_service_1.CropTypeService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], AdministrativeUnitModule);
exports.AdministrativeUnitModule = AdministrativeUnitModule;
//# sourceMappingURL=administrative-unit.module.js.map