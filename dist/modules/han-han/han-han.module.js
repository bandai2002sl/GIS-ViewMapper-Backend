"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HanHanModule = void 0;
const common_1 = require("@nestjs/common");
const han_han_service_1 = require("./han-han.service");
const han_han_controller_1 = require("./han-han.controller");
const typeorm_1 = require("@nestjs/typeorm");
const han_han_entity_1 = require("./entities/han-han.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const crop_type_entity_1 = require("../crop-type/entities/crop-type.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const crop_type_controller_1 = require("../crop-type/crop-type.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const crop_type_service_1 = require("../crop-type/crop-type.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let HanHanModule = class HanHanModule {
};
HanHanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([han_han_entity_1.HanHan, administrative_unit_entity_1.AdministrativeUnit, crop_type_entity_1.CropType, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [han_han_controller_1.HanHanController, administrative_unit_controller_1.AdministrativeUnitController, crop_type_controller_1.CropTypeController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [han_han_service_1.HanHanService, administrative_unit_service_1.AdministrativeUnitService, crop_type_service_1.CropTypeService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], HanHanModule);
exports.HanHanModule = HanHanModule;
//# sourceMappingURL=han-han.module.js.map