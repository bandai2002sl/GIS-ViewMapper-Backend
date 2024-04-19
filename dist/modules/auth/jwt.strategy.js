"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAuthGuard = exports.JwtAuthGuard = exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
const core_1 = require("@nestjs/core");
const axios_2 = require("axios");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(config) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET'),
        });
        this.config = config;
    }
    async validate(payload) {
        return { userId: payload.sub, username: payload.username };
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
let AdminAuthGuard = class AdminAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(httpService, reflector) {
        super();
        this.httpService = httpService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['authorization'];
        const pageKey = this.reflector.get('pageKey', context.getHandler());
        const permissionKey = this.reflector.get('permissionKey', context.getHandler());
        {
            console.log(pageKey, permissionKey, token);
        }
        if (pageKey && permissionKey && token) {
            return this.callApiAndCheckPermission(pageKey, permissionKey, token).then((canActivate) => {
                if (!canActivate) {
                    throw new common_1.UnauthorizedException();
                }
                return canActivate;
            });
        }
        return super.canActivate(context);
    }
    async callApiAndCheckPermission(pageKey, permissionKey, token) {
        try {
            const response = await axios_2.default.get(`${process.env.SERVER_PERMISSION}/permission/check/${pageKey}?permissionKey=${permissionKey}`, {
                headers: {
                    Authorization: token,
                },
            });
            return response.status == 200;
        }
        catch (error) {
            return false;
        }
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
AdminAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        core_1.Reflector])
], AdminAuthGuard);
exports.AdminAuthGuard = AdminAuthGuard;
//# sourceMappingURL=jwt.strategy.js.map