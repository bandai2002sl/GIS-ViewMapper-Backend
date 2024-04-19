"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const gateway_gateway_1 = require("../modules/gateway/gateway.gateway");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../modules/auth/jwt.strategy");
const passport_1 = require("@nestjs/passport");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.get('JWT_SECRET'),
                    signOptions: {
                        expiresIn: '60s',
                    },
                }),
            }),
        ],
        providers: [config_1.ConfigService, gateway_gateway_1.GatewayGateway, passport_1.PassportModule, jwt_strategy_1.JwtStrategy],
        exports: [
            config_1.ConfigService,
            jwt_1.JwtModule,
            gateway_gateway_1.GatewayGateway,
            passport_1.PassportModule,
            jwt_strategy_1.JwtStrategy,
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map