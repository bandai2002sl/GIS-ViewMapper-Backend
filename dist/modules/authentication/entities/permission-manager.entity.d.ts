import { User } from './user.entity';
export declare class PermissionManager {
    id: number;
    userId: number;
    permissionId: number;
    pageKey: string;
    active: number;
    user: User;
}
