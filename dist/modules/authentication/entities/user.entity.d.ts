import { PermissionManager } from './permission-manager.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: number;
    createDate: Date;
    refresh_token: string;
    permissionManager: PermissionManager[];
}
