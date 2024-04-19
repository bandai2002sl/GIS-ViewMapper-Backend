import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './authentication.service';
import { User } from './entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): Promise<{
        message: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<User>;
    updateUserRole(id: string, newRole: string): Promise<any>;
    updateUserPermission(id: string, newPermissionList: {
        id: number;
        permissionId: number;
        pageKey: string;
        active: number;
    }[]): Promise<any>;
    getAllUsers(): Promise<{
        success: boolean;
        users: User[];
        message?: undefined;
        error?: undefined;
    } | {
        success: boolean;
        message: string;
        error: any;
        users?: undefined;
    }>;
    deleteUser(userId: number): Promise<any>;
}
