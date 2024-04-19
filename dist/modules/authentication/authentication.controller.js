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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth.guard");
const login_user_dto_1 = require("./dto/login-user.dto");
const swagger_1 = require("@nestjs/swagger");
const register_user_dto_1 = require("./dto/register-user.dto");
const authentication_service_1 = require("./authentication.service");
const roles_decorator_1 = require("./roles.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(registerUserDto) {
        return this.authService.register(registerUserDto);
    }
    login(loginUserDto) {
        return this.authService.login(loginUserDto);
    }
    async updateUserRole(id, newRole) {
        return this.authService.updateUserRole(id.toString(), newRole);
    }
    async updateUserPermission(id, newPermissionList) {
        return this.authService.updatePermission(parseInt(id), newPermissionList);
    }
    async getAllUsers() {
        try {
            const users = await this.authService.getAllUsers();
            return { success: true, users };
        }
        catch (error) {
            return { success: false, message: 'Failed to retrieve users', error: error.message };
        }
    }
    async deleteUser(userId) {
        try {
            const result = await this.authService.deleteUser(userId);
            if (result.success) {
                return { message: 'User deleted successfully' };
            }
            else {
                throw new common_1.HttpException(result.message, common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new common_1.HttpException('Failed to delete user', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Login successfully!' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Login fail!' }),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, roles_decorator_1.Roles)("0"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('update-role/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newRole')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUserRole", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Patch)('update-permission/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('newPermissionList')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUserPermission", null);
__decorate([
    (0, roles_decorator_1.Roles)("0"),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)("users"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "deleteUser", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Tài khoản'),
    (0, common_1.Controller)('authentication'),
    __metadata("design:paramtypes", [authentication_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=authentication.controller.js.map