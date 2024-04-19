"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaiKinhDoanhModule = void 0;
const common_1 = require("@nestjs/common");
const loai_kinh_doanh_service_1 = require("./loai-kinh-doanh.service");
const loai_kinh_doanh_controller_1 = require("./loai-kinh-doanh.controller");
const typeorm_1 = require("@nestjs/typeorm");
const loai_kinh_doanh_entity_1 = require("./entities/loai-kinh-doanh.entity");
let LoaiKinhDoanhModule = class LoaiKinhDoanhModule {
};
LoaiKinhDoanhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([loai_kinh_doanh_entity_1.LoaiKinhDoanh])],
        controllers: [loai_kinh_doanh_controller_1.LoaiKinhDoanhController],
        providers: [loai_kinh_doanh_service_1.LoaiKinhDoanhService]
    })
], LoaiKinhDoanhModule);
exports.LoaiKinhDoanhModule = LoaiKinhDoanhModule;
//# sourceMappingURL=loai-kinh-doanh.module.js.map