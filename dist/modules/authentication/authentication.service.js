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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const permission_manager_entity_1 = require("./entities/permission-manager.entity");
let AuthService = class AuthService {
    constructor(userRepository, permissionManagerRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.permissionManagerRepository = permissionManagerRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registerUserDto) {
        const hashPassword = await this.hashPassword(registerUserDto.password);
        const saveUser = await this.userRepository.save({
            email: registerUserDto.email,
            password: hashPassword,
            refresh_token: "refresh_token_string",
            role: registerUserDto.role,
            createDate: registerUserDto.createDate,
        });
        const rolePermissions = {
            0: [
                { permissionId: 1, pageKey: '1_0' },
                { permissionId: 1, pageKey: '1_1' },
                { permissionId: 1, pageKey: '1_2' },
                { permissionId: 1, pageKey: '1_3' },
                { permissionId: 1, pageKey: '1_4' },
                { permissionId: 1, pageKey: '2_0' },
                { permissionId: 1, pageKey: '2_1' },
                { permissionId: 1, pageKey: '2_2' },
                { permissionId: 1, pageKey: '2_3' },
                { permissionId: 1, pageKey: '3_0' },
                { permissionId: 1, pageKey: '3_1' },
                { permissionId: 1, pageKey: '3_2' },
                { permissionId: 1, pageKey: '3_3' },
                { permissionId: 1, pageKey: '3_4' },
                { permissionId: 1, pageKey: '3_5' },
                { permissionId: 1, pageKey: '4_0' },
                { permissionId: 1, pageKey: '4_1' },
                { permissionId: 1, pageKey: '4_2' },
                { permissionId: 1, pageKey: '4_3' },
                { permissionId: 1, pageKey: '5_0' },
                { permissionId: 1, pageKey: '5_1' },
                { permissionId: 2, pageKey: '1_0' },
                { permissionId: 2, pageKey: '1_1' },
                { permissionId: 2, pageKey: '1_2' },
                { permissionId: 2, pageKey: '1_3' },
                { permissionId: 2, pageKey: '1_4' },
                { permissionId: 2, pageKey: '2_0' },
                { permissionId: 2, pageKey: '2_1' },
                { permissionId: 2, pageKey: '2_2' },
                { permissionId: 2, pageKey: '2_3' },
                { permissionId: 2, pageKey: '3_0' },
                { permissionId: 2, pageKey: '3_1' },
                { permissionId: 2, pageKey: '3_2' },
                { permissionId: 2, pageKey: '3_3' },
                { permissionId: 2, pageKey: '3_4' },
                { permissionId: 2, pageKey: '3_5' },
                { permissionId: 2, pageKey: '4_0' },
                { permissionId: 2, pageKey: '4_2' },
                { permissionId: 2, pageKey: '4_3' },
                { permissionId: 2, pageKey: '5_0' },
                { permissionId: 2, pageKey: '5_1' },
                { permissionId: 3, pageKey: '1_0' },
                { permissionId: 3, pageKey: '1_1' },
                { permissionId: 3, pageKey: '1_2' },
                { permissionId: 3, pageKey: '1_3' },
                { permissionId: 3, pageKey: '1_4' },
                { permissionId: 3, pageKey: '2_0' },
                { permissionId: 3, pageKey: '2_1' },
                { permissionId: 3, pageKey: '2_2' },
                { permissionId: 3, pageKey: '2_3' },
                { permissionId: 3, pageKey: '3_0' },
                { permissionId: 3, pageKey: '3_1' },
                { permissionId: 3, pageKey: '3_2' },
                { permissionId: 3, pageKey: '3_3' },
                { permissionId: 3, pageKey: '3_4' },
                { permissionId: 3, pageKey: '3_5' },
                { permissionId: 3, pageKey: '4_0' },
                { permissionId: 3, pageKey: '4_2' },
                { permissionId: 3, pageKey: '4_3' },
                { permissionId: 3, pageKey: '5_0' },
                { permissionId: 3, pageKey: '5_1' },
                { permissionId: 4, pageKey: '1_0' },
                { permissionId: 4, pageKey: '1_1' },
                { permissionId: 4, pageKey: '1_2' },
                { permissionId: 4, pageKey: '1_3' },
                { permissionId: 4, pageKey: '1_4' },
                { permissionId: 4, pageKey: '2_0' },
                { permissionId: 4, pageKey: '2_1' },
                { permissionId: 4, pageKey: '2_2' },
                { permissionId: 4, pageKey: '2_3' },
                { permissionId: 4, pageKey: '3_0' },
                { permissionId: 4, pageKey: '3_1' },
                { permissionId: 4, pageKey: '3_2' },
                { permissionId: 4, pageKey: '3_3' },
                { permissionId: 4, pageKey: '3_4' },
                { permissionId: 4, pageKey: '3_5' },
                { permissionId: 4, pageKey: '4_0' },
                { permissionId: 4, pageKey: '4_2' },
                { permissionId: 4, pageKey: '4_3' },
                { permissionId: 4, pageKey: '5_0' },
                { permissionId: 4, pageKey: '5_1' },
            ],
            1: [
                { permissionId: 1, pageKey: '2_0' },
                { permissionId: 1, pageKey: '2_1' },
                { permissionId: 1, pageKey: '2_2' },
                { permissionId: 1, pageKey: '2_3' },
                { permissionId: 1, pageKey: '3_0' },
                { permissionId: 1, pageKey: '3_1' },
                { permissionId: 1, pageKey: '3_2' },
                { permissionId: 1, pageKey: '3_3' },
                { permissionId: 1, pageKey: '3_4' },
                { permissionId: 1, pageKey: '3_5' },
                { permissionId: 1, pageKey: '4_0' },
                { permissionId: 1, pageKey: '4_1' },
                { permissionId: 1, pageKey: '4_2' },
                { permissionId: 1, pageKey: '5_0' },
                { permissionId: 1, pageKey: '5_1' },
                { permissionId: 2, pageKey: '2_0' },
                { permissionId: 2, pageKey: '2_1' },
                { permissionId: 2, pageKey: '2_2' },
                { permissionId: 2, pageKey: '2_3' },
                { permissionId: 2, pageKey: '3_0' },
                { permissionId: 2, pageKey: '3_1' },
                { permissionId: 2, pageKey: '3_2' },
                { permissionId: 2, pageKey: '3_3' },
                { permissionId: 2, pageKey: '3_4' },
                { permissionId: 2, pageKey: '3_5' },
                { permissionId: 2, pageKey: '4_0' },
                { permissionId: 2, pageKey: '4_2' },
                { permissionId: 2, pageKey: '5_0' },
                { permissionId: 2, pageKey: '5_1' },
                { permissionId: 3, pageKey: '2_0' },
                { permissionId: 3, pageKey: '2_1' },
                { permissionId: 3, pageKey: '2_2' },
                { permissionId: 3, pageKey: '2_3' },
                { permissionId: 3, pageKey: '3_0' },
                { permissionId: 3, pageKey: '3_1' },
                { permissionId: 3, pageKey: '3_2' },
                { permissionId: 3, pageKey: '3_3' },
                { permissionId: 3, pageKey: '3_4' },
                { permissionId: 3, pageKey: '3_5' },
                { permissionId: 3, pageKey: '4_0' },
                { permissionId: 3, pageKey: '4_2' },
                { permissionId: 3, pageKey: '5_0' },
                { permissionId: 3, pageKey: '5_1' },
                { permissionId: 4, pageKey: '2_0' },
                { permissionId: 4, pageKey: '2_1' },
                { permissionId: 4, pageKey: '2_2' },
                { permissionId: 4, pageKey: '2_3' },
                { permissionId: 4, pageKey: '3_0' },
                { permissionId: 4, pageKey: '3_1' },
                { permissionId: 4, pageKey: '3_2' },
                { permissionId: 4, pageKey: '3_3' },
                { permissionId: 4, pageKey: '3_4' },
                { permissionId: 4, pageKey: '3_5' },
                { permissionId: 4, pageKey: '4_0' },
                { permissionId: 4, pageKey: '4_2' },
                { permissionId: 4, pageKey: '5_0' },
                { permissionId: 4, pageKey: '5_1' },
            ],
            2: [
                { permissionId: 1, pageKey: '2_0' },
                { permissionId: 1, pageKey: '2_1' },
                { permissionId: 1, pageKey: '2_2' },
                { permissionId: 1, pageKey: '2_3' },
                { permissionId: 1, pageKey: '3_0' },
                { permissionId: 1, pageKey: '3_1' },
                { permissionId: 1, pageKey: '3_2' },
                { permissionId: 1, pageKey: '3_3' },
                { permissionId: 1, pageKey: '3_4' },
                { permissionId: 1, pageKey: '3_5' },
                { permissionId: 1, pageKey: '4_0' },
                { permissionId: 1, pageKey: '4_1' },
                { permissionId: 1, pageKey: '4_2' },
                { permissionId: 1, pageKey: '4_3' },
                { permissionId: 1, pageKey: '5_0' },
                { permissionId: 1, pageKey: '5_1' },
                { permissionId: 2, pageKey: '2_0' },
                { permissionId: 2, pageKey: '2_1' },
                { permissionId: 2, pageKey: '2_2' },
                { permissionId: 2, pageKey: '2_3' },
                { permissionId: 2, pageKey: '3_0' },
                { permissionId: 2, pageKey: '3_1' },
                { permissionId: 2, pageKey: '3_2' },
                { permissionId: 2, pageKey: '3_3' },
                { permissionId: 2, pageKey: '3_4' },
                { permissionId: 2, pageKey: '3_5' },
                { permissionId: 2, pageKey: '4_0' },
                { permissionId: 2, pageKey: '4_2' },
                { permissionId: 2, pageKey: '4_3' },
                { permissionId: 2, pageKey: '5_0' },
                { permissionId: 2, pageKey: '5_1' },
                { permissionId: 3, pageKey: '2_0' },
                { permissionId: 3, pageKey: '2_1' },
                { permissionId: 3, pageKey: '2_2' },
                { permissionId: 3, pageKey: '2_3' },
                { permissionId: 3, pageKey: '3_0' },
                { permissionId: 3, pageKey: '3_1' },
                { permissionId: 3, pageKey: '3_2' },
                { permissionId: 3, pageKey: '3_3' },
                { permissionId: 3, pageKey: '3_4' },
                { permissionId: 3, pageKey: '3_5' },
                { permissionId: 3, pageKey: '4_0' },
                { permissionId: 3, pageKey: '4_2' },
                { permissionId: 3, pageKey: '4_3' },
                { permissionId: 3, pageKey: '5_0' },
                { permissionId: 3, pageKey: '5_1' },
                { permissionId: 4, pageKey: '2_0' },
                { permissionId: 4, pageKey: '2_1' },
                { permissionId: 4, pageKey: '2_2' },
                { permissionId: 4, pageKey: '2_3' },
                { permissionId: 4, pageKey: '3_0' },
                { permissionId: 4, pageKey: '3_1' },
                { permissionId: 4, pageKey: '3_2' },
                { permissionId: 4, pageKey: '3_3' },
                { permissionId: 4, pageKey: '3_4' },
                { permissionId: 4, pageKey: '3_5' },
                { permissionId: 4, pageKey: '4_0' },
                { permissionId: 4, pageKey: '4_2' },
                { permissionId: 4, pageKey: '4_3' },
                { permissionId: 4, pageKey: '5_0' },
                { permissionId: 4, pageKey: '5_1' },
            ],
            3: [
                { permissionId: 1, pageKey: '1_0' },
                { permissionId: 1, pageKey: '1_1' },
                { permissionId: 1, pageKey: '1_2' },
                { permissionId: 1, pageKey: '1_3' },
                { permissionId: 1, pageKey: '1_4' },
                { permissionId: 1, pageKey: '2_0' },
                { permissionId: 1, pageKey: '2_1' },
                { permissionId: 1, pageKey: '2_2' },
                { permissionId: 1, pageKey: '2_3' },
                { permissionId: 1, pageKey: '3_0' },
                { permissionId: 1, pageKey: '3_1' },
                { permissionId: 1, pageKey: '3_2' },
                { permissionId: 1, pageKey: '3_3' },
                { permissionId: 1, pageKey: '3_4' },
                { permissionId: 1, pageKey: '3_5' },
                { permissionId: 1, pageKey: '4_0' },
                { permissionId: 1, pageKey: '4_1' },
                { permissionId: 1, pageKey: '4_2' },
                { permissionId: 1, pageKey: '4_3' },
                { permissionId: 1, pageKey: '5_0' },
                { permissionId: 1, pageKey: '5_1' },
                { permissionId: 2, pageKey: '1_0' },
                { permissionId: 2, pageKey: '1_1' },
                { permissionId: 2, pageKey: '1_2' },
                { permissionId: 2, pageKey: '1_3' },
                { permissionId: 2, pageKey: '1_4' },
                { permissionId: 2, pageKey: '2_0' },
                { permissionId: 2, pageKey: '2_1' },
                { permissionId: 2, pageKey: '2_2' },
                { permissionId: 2, pageKey: '2_3' },
                { permissionId: 2, pageKey: '3_0' },
                { permissionId: 2, pageKey: '3_1' },
                { permissionId: 2, pageKey: '3_2' },
                { permissionId: 2, pageKey: '3_3' },
                { permissionId: 2, pageKey: '3_4' },
                { permissionId: 2, pageKey: '3_5' },
                { permissionId: 2, pageKey: '4_0' },
                { permissionId: 2, pageKey: '4_2' },
                { permissionId: 2, pageKey: '4_3' },
                { permissionId: 2, pageKey: '5_0' },
                { permissionId: 2, pageKey: '5_1' },
                { permissionId: 3, pageKey: '1_0' },
                { permissionId: 3, pageKey: '1_1' },
                { permissionId: 3, pageKey: '1_2' },
                { permissionId: 3, pageKey: '1_3' },
                { permissionId: 3, pageKey: '1_4' },
                { permissionId: 3, pageKey: '2_0' },
                { permissionId: 3, pageKey: '2_1' },
                { permissionId: 3, pageKey: '2_2' },
                { permissionId: 3, pageKey: '2_3' },
                { permissionId: 3, pageKey: '3_0' },
                { permissionId: 3, pageKey: '3_1' },
                { permissionId: 3, pageKey: '3_2' },
                { permissionId: 3, pageKey: '3_3' },
                { permissionId: 3, pageKey: '3_4' },
                { permissionId: 3, pageKey: '3_5' },
                { permissionId: 3, pageKey: '4_0' },
                { permissionId: 3, pageKey: '4_2' },
                { permissionId: 3, pageKey: '4_3' },
                { permissionId: 3, pageKey: '5_0' },
                { permissionId: 3, pageKey: '5_1' },
                { permissionId: 4, pageKey: '1_0' },
                { permissionId: 4, pageKey: '1_1' },
                { permissionId: 4, pageKey: '1_2' },
                { permissionId: 4, pageKey: '1_3' },
                { permissionId: 4, pageKey: '1_4' },
                { permissionId: 4, pageKey: '2_0' },
                { permissionId: 4, pageKey: '2_1' },
                { permissionId: 4, pageKey: '2_2' },
                { permissionId: 4, pageKey: '2_3' },
                { permissionId: 4, pageKey: '3_0' },
                { permissionId: 4, pageKey: '3_1' },
                { permissionId: 4, pageKey: '3_2' },
                { permissionId: 4, pageKey: '3_3' },
                { permissionId: 4, pageKey: '3_4' },
                { permissionId: 4, pageKey: '3_5' },
                { permissionId: 4, pageKey: '4_0' },
                { permissionId: 4, pageKey: '4_2' },
                { permissionId: 4, pageKey: '4_3' },
                { permissionId: 4, pageKey: '5_0' },
                { permissionId: 4, pageKey: '5_1' },
            ],
        };
        const permissionList = rolePermissions[registerUserDto.role];
        if (permissionList) {
            await this.addPermissionToUser(saveUser, permissionList);
        }
        return { message: 'Registration successful' };
    }
    async updatePermission(userId, newPermissionList) {
        try {
            const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['permissionManager'] });
            if (!user) {
                return { success: false, message: 'User not found' };
            }
            const currentPermissions = user.permissionManager || [];
            await Promise.all(currentPermissions
                .filter(permission => permission.userId === userId)
                .map(permission => this.permissionManagerRepository.remove(permission)));
            await this.addPermissionToUser(user, newPermissionList);
            return { success: true, message: 'User permissions updated successfully' };
        }
        catch (error) {
            return { success: false, message: 'Failed to update user permissions', error: error.message };
        }
    }
    async addPermissionToUser(user, permissionList) {
        const promises = permissionList.map(async (permission) => {
            await this.permissionManagerRepository.save(Object.assign({ user }, permission));
        });
        await Promise.all(promises);
    }
    async login(loginUserDto) {
        const user = await this.userRepository.findOne({
            where: { email: loginUserDto.email },
            relations: ['permissionManager'],
        });
        if (!user) {
            throw new common_1.HttpException("Email is not exist", common_1.HttpStatus.UNAUTHORIZED);
        }
        const checkPass = bcrypt.compareSync(loginUserDto.password, user.password);
        if (!checkPass) {
            throw new common_1.HttpException('Password is not correct', common_1.HttpStatus.UNAUTHORIZED);
        }
        const payload = { id: user.id, email: user.email, role: user.role };
        const tokens = this.generateToken(payload);
        return {
            access_token: (await tokens).access_token,
            refresh_token: (await tokens).refresh_token,
            role: user.role,
            permissionList: user.permissionManager.map((pm) => ({
                permissionId: pm.permissionId,
                pageKey: pm.pageKey,
                active: pm.active,
            })),
        };
    }
    async updateUserRole(userId, newRole) {
        try {
            const user = await this.userRepository.findOne({ where: { id: parseInt(userId) } });
            if (!user) {
                return { success: false, message: 'User not found' };
            }
            user.role = parseInt(newRole, 10);
            await this.userRepository.save(user);
            return { success: true, message: 'User role updated successfully' };
        }
        catch (error) {
            return { success: false, message: 'Failed to update user role', error: error.message };
        }
    }
    async getAllUsers() {
        try {
            const usersWithPermissions = await this.userRepository
                .createQueryBuilder('user')
                .leftJoinAndSelect('user.permissionManager', 'permissionManager')
                .getMany();
            return usersWithPermissions;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to retrieve users', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteUser(userId) {
        try {
            const user = await this.userRepository.findOne({ where: { id: userId } });
            if (!user) {
                return { success: false, message: 'User not found' };
            }
            const permissions = await this.permissionManagerRepository.find({ where: { userId: userId } });
            await Promise.all(permissions.map(permission => this.permissionManagerRepository.remove(permission)));
            await this.userRepository.remove(user);
            return { success: true, message: 'User deleted successfully' };
        }
        catch (error) {
            return { success: false, message: 'Failed to delete user', error: error.message };
        }
    }
    async refreshToken(refresh_token) {
        try {
            const verify = await this.jwtService.verifyAsync(refresh_token, {
                secret: "123456"
            });
            const checkExistToken = await this.userRepository.findOneBy({ email: verify.email, refresh_token });
            if (checkExistToken) {
                return this.generateToken({ id: verify.id, email: verify.email });
            }
            else {
                throw new common_1.HttpException('Refresh token is not valid', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new common_1.HttpException('Refresh token is not valid', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generateToken(payload) {
        const access_token = await this.jwtService.signAsync(payload, ({
            expiresIn: '1d',
        }));
        const refresh_token = await this.jwtService.signAsync(payload, {
            secret: this.configService.get('SECRET_KEY'),
            expiresIn: this.configService.get('TOKEN_EXPIRATION'),
        });
        await this.userRepository.update({ email: payload.email }, { refresh_token: refresh_token });
        return { access_token, refresh_token };
    }
    async hashPassword(password) {
        const saltRound = 6;
        const hash = await bcrypt.hash(password, saltRound);
        return hash;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_manager_entity_1.PermissionManager)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=authentication.service.js.map