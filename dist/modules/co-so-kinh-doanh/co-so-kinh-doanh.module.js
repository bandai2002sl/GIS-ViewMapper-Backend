"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoSoKinhDoanhModule = void 0;
const common_1 = require("@nestjs/common");
const co_so_kinh_doanh_service_1 = require("./co-so-kinh-doanh.service");
const co_so_kinh_doanh_controller_1 = require("./co-so-kinh-doanh.controller");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_kinh_doanh_entity_1 = require("./entities/co-so-kinh-doanh.entity");
const ca_nhan_htx_entity_1 = require("../ca-nhan-htx/entities/ca-nhan-htx.entity");
const loai_kinh_doanh_entity_1 = require("../loai-kinh-doanh/entities/loai-kinh-doanh.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const ca_nhan_htx_controller_1 = require("../ca-nhan-htx/ca-nhan-htx.controller");
const loai_kinh_doanh_controller_1 = require("../loai-kinh-doanh/loai-kinh-doanh.controller");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const loai_kinh_doanh_service_1 = require("../loai-kinh-doanh/loai-kinh-doanh.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let CoSoKinhDoanhModule = class CoSoKinhDoanhModule {
};
CoSoKinhDoanhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([co_so_kinh_doanh_entity_1.CoSoKinhDoanh, ca_nhan_htx_entity_1.CaNhanHtx, loai_kinh_doanh_entity_1.LoaiKinhDoanh, administrative_unit_entity_1.AdministrativeUnit])],
        controllers: [co_so_kinh_doanh_controller_1.CoSoKinhDoanhController, ca_nhan_htx_controller_1.CaNhanHtxController, loai_kinh_doanh_controller_1.LoaiKinhDoanhController, administrative_unit_controller_1.AdministrativeUnitController],
        providers: [co_so_kinh_doanh_service_1.CoSoKinhDoanhService, ca_nhan_htx_service_1.CaNhanHtxService, loai_kinh_doanh_service_1.LoaiKinhDoanhService, administrative_unit_service_1.AdministrativeUnitService]
    })
], CoSoKinhDoanhModule);
exports.CoSoKinhDoanhModule = CoSoKinhDoanhModule;
//# sourceMappingURL=co-so-kinh-doanh.module.js.map