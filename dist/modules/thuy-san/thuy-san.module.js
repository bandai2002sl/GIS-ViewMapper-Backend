"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThuySanModule = void 0;
const common_1 = require("@nestjs/common");
const thuy_san_service_1 = require("./thuy-san.service");
const thuy_san_controller_1 = require("./thuy-san.controller");
const typeorm_1 = require("@nestjs/typeorm");
const thuy_san_entity_1 = require("./entities/thuy-san.entity");
let ThuySanModule = class ThuySanModule {
};
ThuySanModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([thuy_san_entity_1.ThuySan])],
        controllers: [thuy_san_controller_1.ThuySanController],
        providers: [thuy_san_service_1.ThuySanService]
    })
], ThuySanModule);
exports.ThuySanModule = ThuySanModule;
//# sourceMappingURL=thuy-san.module.js.map