import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterUserDto } from './dto/register-user.dto';
import { PermissionManager } from './entities/permission-manager.entity';
export declare class AuthService {
    private userRepository;
    private permissionManagerRepository;
    private jwtService;
    private configService;
    constructor(userRepository: Repository<User>, permissionManagerRepository: Repository<PermissionManager>, jwtService: JwtService, configService: ConfigService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
    }>;
    updatePermission(userId: number, newPermissionList: {
        id: number;
        permissionId: number;
        pageKey: string;
        active: number;
    }[]): Promise<any>;
    addPermissionToUser(user: User, permissionList: {
        permissionId: number;
        pageKey: string;
    }[]): Promise<void>;
    login(loginUserDto: LoginUserDto): Promise<any>;
    updateUserRole(userId: string, newRole: string): Promise<any>;
    getAllUsers(): Promise<User[]>;
    deleteUser(userId: number): Promise<any>;
    refreshToken(refresh_token: string): Promise<any>;
    private generateToken;
    private hashPassword;
}
