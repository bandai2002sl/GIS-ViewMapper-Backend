"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HinhThucChuyenDoiDatModule = void 0;
const common_1 = require("@nestjs/common");
const hinh_thuc_chuyen_doi_dat_service_1 = require("./hinh-thuc-chuyen-doi-dat.service");
const hinh_thuc_chuyen_doi_dat_controller_1 = require("./hinh-thuc-chuyen-doi-dat.controller");
const typeorm_1 = require("@nestjs/typeorm");
const hinh_thuc_chuyen_doi_dat_entity_1 = require("./entities/hinh-thuc-chuyen-doi-dat.entity");
let HinhThucChuyenDoiDatModule = class HinhThucChuyenDoiDatModule {
};
HinhThucChuyenDoiDatModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([hinh_thuc_chuyen_doi_dat_entity_1.HinhThucChuyenDoiDat])],
        controllers: [hinh_thuc_chuyen_doi_dat_controller_1.HinhThucChuyenDoiDatController],
        providers: [hinh_thuc_chuyen_doi_dat_service_1.HinhThucChuyenDoiDatService]
    })
], HinhThucChuyenDoiDatModule);
exports.HinhThucChuyenDoiDatModule = HinhThucChuyenDoiDatModule;
//# sourceMappingURL=hinh-thuc-chuyen-doi-dat.module.js.map