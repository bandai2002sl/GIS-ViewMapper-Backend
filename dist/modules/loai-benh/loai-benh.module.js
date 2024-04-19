"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaiBenhModule = void 0;
const common_1 = require("@nestjs/common");
const loai_benh_service_1 = require("./loai-benh.service");
const loai_benh_controller_1 = require("./loai-benh.controller");
const typeorm_1 = require("@nestjs/typeorm");
const loai_benh_entity_1 = require("./entities/loai-benh.entity");
let LoaiBenhModule = class LoaiBenhModule {
};
LoaiBenhModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([loai_benh_entity_1.LoaiBenh])],
        controllers: [loai_benh_controller_1.LoaiBenhController],
        providers: [loai_benh_service_1.LoaiBenhService]
    })
], LoaiBenhModule);
exports.LoaiBenhModule = LoaiBenhModule;
//# sourceMappingURL=loai-benh.module.js.map