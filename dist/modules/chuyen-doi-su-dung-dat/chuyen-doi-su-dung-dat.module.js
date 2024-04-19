"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChuyenDoiSuDungDatModule = void 0;
const common_1 = require("@nestjs/common");
const chuyen_doi_su_dung_dat_service_1 = require("./chuyen-doi-su-dung-dat.service");
const chuyen_doi_su_dung_dat_controller_1 = require("./chuyen-doi-su-dung-dat.controller");
const typeorm_1 = require("@nestjs/typeorm");
const chuyen_doi_su_dung_dat_entity_1 = require("./entities/chuyen-doi-su-dung-dat.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const hinh_thuc_chuyen_doi_dat_entity_1 = require("../hinh-thuc-chuyen-doi-dat/entities/hinh-thuc-chuyen-doi-dat.entity");
const hinh_thuc_chuyen_doi_dat_controller_1 = require("../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.controller");
const hinh_thuc_chuyen_doi_dat_service_1 = require("../hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.service");
const ky_bao_cao_entity_1 = require("../ky-bao-cao/entities/ky-bao-cao.entity");
const ky_bao_cao_controller_1 = require("../ky-bao-cao/ky-bao-cao.controller");
const ky_bao_cao_service_1 = require("../ky-bao-cao/ky-bao-cao.service");
let ChuyenDoiSuDungDatModule = class ChuyenDoiSuDungDatModule {
};
ChuyenDoiSuDungDatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([chuyen_doi_su_dung_dat_entity_1.ChuyenDoiSuDungDat, administrative_unit_entity_1.AdministrativeUnit, hinh_thuc_chuyen_doi_dat_entity_1.HinhThucChuyenDoiDat, ky_bao_cao_entity_1.KyBaoCao])],
        controllers: [chuyen_doi_su_dung_dat_controller_1.ChuyenDoiSuDungDatController, administrative_unit_controller_1.AdministrativeUnitController, hinh_thuc_chuyen_doi_dat_controller_1.HinhThucChuyenDoiDatController, ky_bao_cao_controller_1.KyBaoCaoController],
        providers: [chuyen_doi_su_dung_dat_service_1.ChuyenDoiSuDungDatService, administrative_unit_service_1.AdministrativeUnitService, hinh_thuc_chuyen_doi_dat_service_1.HinhThucChuyenDoiDatService, ky_bao_cao_service_1.KyBaoCaoService]
    })
], ChuyenDoiSuDungDatModule);
exports.ChuyenDoiSuDungDatModule = ChuyenDoiSuDungDatModule;
//# sourceMappingURL=chuyen-doi-su-dung-dat.module.js.map