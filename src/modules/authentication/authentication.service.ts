import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RegisterUserDto } from './dto/register-user.dto';
import { PermissionManager } from './entities/permission-manager.entity';



@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(PermissionManager) private permissionManagerRepository: Repository<PermissionManager>,
        private jwtService: JwtService,
        private configService:ConfigService
    ) { }

     async register(registerUserDto: RegisterUserDto): Promise<{message: string}> {
        const hashPassword = await this.hashPassword(registerUserDto.password);

        const saveUser =  await this.userRepository.save({
            email: registerUserDto.email,
            password: hashPassword,
            refresh_token: "refresh_token_string",
            role: registerUserDto.role,
            createDate: registerUserDto.createDate,
        });
        
         /* Xác định quyền tương ứng với từng vai trò
         + nhóm quyền tài khoản:
         0: admin
         1: xa
         2: huyen
         3: tinh 

         + nhóm quyền: CRUD
         1: Thêm
         2: sửa
         3: xoá
         4: xem

         + nhóm quyền trang
         1_0 -> 1_4 tưởng ứng menu các cấp
         1_0: Đơn vị hành chính
         1_1 :Đơn vị hành chính
         1_2: Vùng đơn vị hành chính
         1_4: Kỳ báo cáo 
         */
        const rolePermissions = {
            // admin
            0: [
                // thêm
                {permissionId: 1, pageKey: '1_0'},
                {permissionId: 1, pageKey: '1_1'},
                {permissionId: 1, pageKey: '1_2'},
                {permissionId: 1, pageKey: '1_3'},
                {permissionId: 1, pageKey: '1_4'},
                {permissionId: 1, pageKey: '2_0'},
                {permissionId: 1, pageKey: '2_1'},
                {permissionId: 1, pageKey: '2_2'},
                {permissionId: 1, pageKey: '2_3'},
                {permissionId: 1, pageKey: '3_0'},
                {permissionId: 1, pageKey: '3_1'},
                {permissionId: 1, pageKey: '3_2'},
                {permissionId: 1, pageKey: '3_3'},
                {permissionId: 1, pageKey: '3_4'},
                {permissionId: 1, pageKey: '3_5'},
                {permissionId: 1, pageKey: '4_0'},
                {permissionId: 1, pageKey: '4_1'},
                {permissionId: 1, pageKey: '4_2'},
                {permissionId: 1, pageKey: '4_3'},
                {permissionId: 1, pageKey: '5_0'},
                {permissionId: 1, pageKey: '5_1'},
                // sửa
                {permissionId: 2, pageKey: '1_0'},
                {permissionId: 2, pageKey: '1_1'},
                {permissionId: 2, pageKey: '1_2'},
                {permissionId: 2, pageKey: '1_3'},
                {permissionId: 2, pageKey: '1_4'},
                {permissionId: 2, pageKey: '2_0'},
                {permissionId: 2, pageKey: '2_1'},
                {permissionId: 2, pageKey: '2_2'},
                {permissionId: 2, pageKey: '2_3'},
                {permissionId: 2, pageKey: '3_0'},
                {permissionId: 2, pageKey: '3_1'},
                {permissionId: 2, pageKey: '3_2'},
                {permissionId: 2, pageKey: '3_3'},
                {permissionId: 2, pageKey: '3_4'},
                {permissionId: 2, pageKey: '3_5'},
                {permissionId: 2, pageKey: '4_0'},
                // {permissionId: 2, pageKey: '4_1'},
                {permissionId: 2, pageKey: '4_2'},
                {permissionId: 2, pageKey: '4_3'},
                {permissionId: 2, pageKey: '5_0'},
                {permissionId: 2, pageKey: '5_1'},
                
                // xoá
                {permissionId: 3, pageKey: '1_0'},
                {permissionId: 3, pageKey: '1_1'},
                {permissionId: 3, pageKey: '1_2'},
                {permissionId: 3, pageKey: '1_3'},
                {permissionId: 3, pageKey: '1_4'},
                {permissionId: 3, pageKey: '2_0'},
                {permissionId: 3, pageKey: '2_1'},
                {permissionId: 3, pageKey: '2_2'},
                {permissionId: 3, pageKey: '2_3'},
                {permissionId: 3, pageKey: '3_0'},
                {permissionId: 3, pageKey: '3_1'},
                {permissionId: 3, pageKey: '3_2'},
                {permissionId: 3, pageKey: '3_3'},
                {permissionId: 3, pageKey: '3_4'},
                {permissionId: 3, pageKey: '3_5'},
                {permissionId: 3, pageKey: '4_0'},
                // {permissionId: 3, pageKey: '4_1'},
                {permissionId: 3, pageKey: '4_2'},
                {permissionId: 3, pageKey: '4_3'},
                {permissionId: 3, pageKey: '5_0'},
                {permissionId: 3, pageKey: '5_1'},
                
                // xem

                {permissionId: 4, pageKey: '1_0'},
                {permissionId: 4, pageKey: '1_1'},
                {permissionId: 4, pageKey: '1_2'},
                {permissionId: 4, pageKey: '1_3'},
                {permissionId: 4, pageKey: '1_4'},
                {permissionId: 4, pageKey: '2_0'},
                {permissionId: 4, pageKey: '2_1'},
                {permissionId: 4, pageKey: '2_2'},
                {permissionId: 4, pageKey: '2_3'},
                {permissionId: 4, pageKey: '3_0'},
                {permissionId: 4, pageKey: '3_1'},
                {permissionId: 4, pageKey: '3_2'},
                {permissionId: 4, pageKey: '3_3'},
                {permissionId: 4, pageKey: '3_4'},
                {permissionId: 4, pageKey: '3_5'},
                {permissionId: 4, pageKey: '4_0'},
                // {permissionId: 4, pageKey: '4_1'},
                {permissionId: 4, pageKey: '4_2'},
                {permissionId: 4, pageKey: '4_3'},
                {permissionId: 4, pageKey: '5_0'},
                {permissionId: 4, pageKey: '5_1'},
                
            ],
            // xã
            1: [
                // thêm
                // {permissionId: 1, pageKey: '1_0'},
                // {permissionId: 1, pageKey: '1_1'},
                // {permissionId: 1, pageKey: '1_2'},
                // {permissionId: 1, pageKey: '1_3'},
                // {permissionId: 1, pageKey: '1_4'},
                {permissionId: 1, pageKey: '2_0'},
                {permissionId: 1, pageKey: '2_1'},
                {permissionId: 1, pageKey: '2_2'},
                {permissionId: 1, pageKey: '2_3'},
                {permissionId: 1, pageKey: '3_0'},
                {permissionId: 1, pageKey: '3_1'},
                {permissionId: 1, pageKey: '3_2'},
                {permissionId: 1, pageKey: '3_3'},
                {permissionId: 1, pageKey: '3_4'},
                {permissionId: 1, pageKey: '3_5'},
                {permissionId: 1, pageKey: '4_0'},
                {permissionId: 1, pageKey: '4_1'},
                {permissionId: 1, pageKey: '4_2'},
                // {permissionId: 1, pageKey: '4_3'},
                {permissionId: 1, pageKey: '5_0'},
                {permissionId: 1, pageKey: '5_1'},
                // sửa
                // {permissionId: 2, pageKey: '1_0'},
                // {permissionId: 2, pageKey: '1_1'},
                // {permissionId: 2, pageKey: '1_2'},
                // {permissionId: 2, pageKey: '1_3'},
                // {permissionId: 2, pageKey: '1_4'},
                {permissionId: 2, pageKey: '2_0'},
                {permissionId: 2, pageKey: '2_1'},
                {permissionId: 2, pageKey: '2_2'},
                {permissionId: 2, pageKey: '2_3'},
                {permissionId: 2, pageKey: '3_0'},
                {permissionId: 2, pageKey: '3_1'},
                {permissionId: 2, pageKey: '3_2'},
                {permissionId: 2, pageKey: '3_3'},
                {permissionId: 2, pageKey: '3_4'},
                {permissionId: 2, pageKey: '3_5'},
                {permissionId: 2, pageKey: '4_0'},
                // {permissionId: 2, pageKey: '4_1'},
                {permissionId: 2, pageKey: '4_2'},
                // {permissionId: 2, pageKey: '4_3'},
                {permissionId: 2, pageKey: '5_0'},
                {permissionId: 2, pageKey: '5_1'},
                
                // xoá
                // {permissionId: 3, pageKey: '1_0'},
                // {permissionId: 3, pageKey: '1_1'},
                // {permissionId: 3, pageKey: '1_2'},
                // {permissionId: 3, pageKey: '1_3'},
                // {permissionId: 3, pageKey: '1_4'},
                {permissionId: 3, pageKey: '2_0'},
                {permissionId: 3, pageKey: '2_1'},
                {permissionId: 3, pageKey: '2_2'},
                {permissionId: 3, pageKey: '2_3'},
                {permissionId: 3, pageKey: '3_0'},
                {permissionId: 3, pageKey: '3_1'},
                {permissionId: 3, pageKey: '3_2'},
                {permissionId: 3, pageKey: '3_3'},
                {permissionId: 3, pageKey: '3_4'},
                {permissionId: 3, pageKey: '3_5'},
                {permissionId: 3, pageKey: '4_0'},
                // {permissionId: 3, pageKey: '4_1'},
                {permissionId: 3, pageKey: '4_2'},
                // {permissionId: 3, pageKey: '4_3'},
                {permissionId: 3, pageKey: '5_0'},
                {permissionId: 3, pageKey: '5_1'},
                
                // xem

                // {permissionId: 4, pageKey: '1_0'},
                // {permissionId: 4, pageKey: '1_1'},
                // {permissionId: 4, pageKey: '1_2'},
                // {permissionId: 4, pageKey: '1_3'},
                // {permissionId: 4, pageKey: '1_4'},
                {permissionId: 4, pageKey: '2_0'},
                {permissionId: 4, pageKey: '2_1'},
                {permissionId: 4, pageKey: '2_2'},
                {permissionId: 4, pageKey: '2_3'},
                {permissionId: 4, pageKey: '3_0'},
                {permissionId: 4, pageKey: '3_1'},
                {permissionId: 4, pageKey: '3_2'},
                {permissionId: 4, pageKey: '3_3'},
                {permissionId: 4, pageKey: '3_4'},
                {permissionId: 4, pageKey: '3_5'},
                {permissionId: 4, pageKey: '4_0'},
                // {permissionId: 4, pageKey: '4_1'},
                {permissionId: 4, pageKey: '4_2'},
                // {permissionId: 4, pageKey: '4_3'},
                {permissionId: 4, pageKey: '5_0'},
                {permissionId: 4, pageKey: '5_1'},
            ],
            // huyện
            2: [
                // thêm
                // {permissionId: 1, pageKey: '1_0'},
                // {permissionId: 1, pageKey: '1_1'},
                // {permissionId: 1, pageKey: '1_2'},
                // {permissionId: 1, pageKey: '1_3'},
                // {permissionId: 1, pageKey: '1_4'},
                {permissionId: 1, pageKey: '2_0'},
                {permissionId: 1, pageKey: '2_1'},
                {permissionId: 1, pageKey: '2_2'},
                {permissionId: 1, pageKey: '2_3'},
                {permissionId: 1, pageKey: '3_0'},
                {permissionId: 1, pageKey: '3_1'},
                {permissionId: 1, pageKey: '3_2'},
                {permissionId: 1, pageKey: '3_3'},
                {permissionId: 1, pageKey: '3_4'},
                {permissionId: 1, pageKey: '3_5'},
                {permissionId: 1, pageKey: '4_0'},
                {permissionId: 1, pageKey: '4_1'},
                {permissionId: 1, pageKey: '4_2'},
                {permissionId: 1, pageKey: '4_3'},
                {permissionId: 1, pageKey: '5_0'},
                {permissionId: 1, pageKey: '5_1'},
                // sửa
                // {permissionId: 2, pageKey: '1_0'},
                // {permissionId: 2, pageKey: '1_1'},
                // {permissionId: 2, pageKey: '1_2'},
                // {permissionId: 2, pageKey: '1_3'},
                // {permissionId: 2, pageKey: '1_4'},
                {permissionId: 2, pageKey: '2_0'},
                {permissionId: 2, pageKey: '2_1'},
                {permissionId: 2, pageKey: '2_2'},
                {permissionId: 2, pageKey: '2_3'},
                {permissionId: 2, pageKey: '3_0'},
                {permissionId: 2, pageKey: '3_1'},
                {permissionId: 2, pageKey: '3_2'},
                {permissionId: 2, pageKey: '3_3'},
                {permissionId: 2, pageKey: '3_4'},
                {permissionId: 2, pageKey: '3_5'},
                {permissionId: 2, pageKey: '4_0'},
                // {permissionId: 2, pageKey: '4_1'},
                {permissionId: 2, pageKey: '4_2'},
                {permissionId: 2, pageKey: '4_3'},
                {permissionId: 2, pageKey: '5_0'},
                {permissionId: 2, pageKey: '5_1'},
                
                // xoá
                // {permissionId: 3, pageKey: '1_0'},
                // {permissionId: 3, pageKey: '1_1'},
                // {permissionId: 3, pageKey: '1_2'},
                // {permissionId: 3, pageKey: '1_3'},
                // {permissionId: 3, pageKey: '1_4'},
                {permissionId: 3, pageKey: '2_0'},
                {permissionId: 3, pageKey: '2_1'},
                {permissionId: 3, pageKey: '2_2'},
                {permissionId: 3, pageKey: '2_3'},
                {permissionId: 3, pageKey: '3_0'},
                {permissionId: 3, pageKey: '3_1'},
                {permissionId: 3, pageKey: '3_2'},
                {permissionId: 3, pageKey: '3_3'},
                {permissionId: 3, pageKey: '3_4'},
                {permissionId: 3, pageKey: '3_5'},
                {permissionId: 3, pageKey: '4_0'},
                // {permissionId: 3, pageKey: '4_1'},
                {permissionId: 3, pageKey: '4_2'},
                {permissionId: 3, pageKey: '4_3'},
                {permissionId: 3, pageKey: '5_0'},
                {permissionId: 3, pageKey: '5_1'},
                
                // xem

                // {permissionId: 4, pageKey: '1_0'},
                // {permissionId: 4, pageKey: '1_1'},
                // {permissionId: 4, pageKey: '1_2'},
                // {permissionId: 4, pageKey: '1_3'},
                // {permissionId: 4, pageKey: '1_4'},
                {permissionId: 4, pageKey: '2_0'},
                {permissionId: 4, pageKey: '2_1'},
                {permissionId: 4, pageKey: '2_2'},
                {permissionId: 4, pageKey: '2_3'},
                {permissionId: 4, pageKey: '3_0'},
                {permissionId: 4, pageKey: '3_1'},
                {permissionId: 4, pageKey: '3_2'},
                {permissionId: 4, pageKey: '3_3'},
                {permissionId: 4, pageKey: '3_4'},
                {permissionId: 4, pageKey: '3_5'},
                {permissionId: 4, pageKey: '4_0'},
                // {permissionId: 4, pageKey: '4_1'},
                {permissionId: 4, pageKey: '4_2'},
                {permissionId: 4, pageKey: '4_3'},
                {permissionId: 4, pageKey: '5_0'},
                {permissionId: 4, pageKey: '5_1'},
            ],
            // tỉnh
            3: [
                // thêm
                {permissionId: 1, pageKey: '1_0'},
                {permissionId: 1, pageKey: '1_1'},
                {permissionId: 1, pageKey: '1_2'},
                {permissionId: 1, pageKey: '1_3'},
                {permissionId: 1, pageKey: '1_4'},
                {permissionId: 1, pageKey: '2_0'},
                {permissionId: 1, pageKey: '2_1'},
                {permissionId: 1, pageKey: '2_2'},
                {permissionId: 1, pageKey: '2_3'},
                {permissionId: 1, pageKey: '3_0'},
                {permissionId: 1, pageKey: '3_1'},
                {permissionId: 1, pageKey: '3_2'},
                {permissionId: 1, pageKey: '3_3'},
                {permissionId: 1, pageKey: '3_4'},
                {permissionId: 1, pageKey: '3_5'},
                {permissionId: 1, pageKey: '4_0'},
                {permissionId: 1, pageKey: '4_1'},
                {permissionId: 1, pageKey: '4_2'},
                {permissionId: 1, pageKey: '4_3'},
                {permissionId: 1, pageKey: '5_0'},
                {permissionId: 1, pageKey: '5_1'},
                // sửa
                {permissionId: 2, pageKey: '1_0'},
                {permissionId: 2, pageKey: '1_1'},
                {permissionId: 2, pageKey: '1_2'},
                {permissionId: 2, pageKey: '1_3'},
                {permissionId: 2, pageKey: '1_4'},
                {permissionId: 2, pageKey: '2_0'},
                {permissionId: 2, pageKey: '2_1'},
                {permissionId: 2, pageKey: '2_2'},
                {permissionId: 2, pageKey: '2_3'},
                {permissionId: 2, pageKey: '3_0'},
                {permissionId: 2, pageKey: '3_1'},
                {permissionId: 2, pageKey: '3_2'},
                {permissionId: 2, pageKey: '3_3'},
                {permissionId: 2, pageKey: '3_4'},
                {permissionId: 2, pageKey: '3_5'},
                {permissionId: 2, pageKey: '4_0'},
                // {permissionId: 2, pageKey: '4_1'},
                {permissionId: 2, pageKey: '4_2'},
                {permissionId: 2, pageKey: '4_3'},
                {permissionId: 2, pageKey: '5_0'},
                {permissionId: 2, pageKey: '5_1'},
                
                // xoá
                {permissionId: 3, pageKey: '1_0'},
                {permissionId: 3, pageKey: '1_1'},
                {permissionId: 3, pageKey: '1_2'},
                {permissionId: 3, pageKey: '1_3'},
                {permissionId: 3, pageKey: '1_4'},
                {permissionId: 3, pageKey: '2_0'},
                {permissionId: 3, pageKey: '2_1'},
                {permissionId: 3, pageKey: '2_2'},
                {permissionId: 3, pageKey: '2_3'},
                {permissionId: 3, pageKey: '3_0'},
                {permissionId: 3, pageKey: '3_1'},
                {permissionId: 3, pageKey: '3_2'},
                {permissionId: 3, pageKey: '3_3'},
                {permissionId: 3, pageKey: '3_4'},
                {permissionId: 3, pageKey: '3_5'},
                {permissionId: 3, pageKey: '4_0'},
                // {permissionId: 3, pageKey: '4_1'},
                {permissionId: 3, pageKey: '4_2'},
                {permissionId: 3, pageKey: '4_3'},
                {permissionId: 3, pageKey: '5_0'},
                {permissionId: 3, pageKey: '5_1'},
                
                // xem

                {permissionId: 4, pageKey: '1_0'},
                {permissionId: 4, pageKey: '1_1'},
                {permissionId: 4, pageKey: '1_2'},
                {permissionId: 4, pageKey: '1_3'},
                {permissionId: 4, pageKey: '1_4'},
                {permissionId: 4, pageKey: '2_0'},
                {permissionId: 4, pageKey: '2_1'},
                {permissionId: 4, pageKey: '2_2'},
                {permissionId: 4, pageKey: '2_3'},
                {permissionId: 4, pageKey: '3_0'},
                {permissionId: 4, pageKey: '3_1'},
                {permissionId: 4, pageKey: '3_2'},
                {permissionId: 4, pageKey: '3_3'},
                {permissionId: 4, pageKey: '3_4'},
                {permissionId: 4, pageKey: '3_5'},
                {permissionId: 4, pageKey: '4_0'},
                // {permissionId: 4, pageKey: '4_1'},
                {permissionId: 4, pageKey: '4_2'},
                {permissionId: 4, pageKey: '4_3'},
                {permissionId: 4, pageKey: '5_0'},
                {permissionId: 4, pageKey: '5_1'},
            ],
        };

        // Lấy quyền tương ứng với vai trò
        const permissionList = rolePermissions[registerUserDto.role];
        if (permissionList) {
            // Thêm quyền vào bảng permissionManager
            await this.addPermissionToUser(saveUser, permissionList);
        }



            return { message: 'Registration successful'};
    }

     async updatePermission(userId: number, newPermissionList: {id: number, permissionId: number, pageKey: string, active : number }[]): Promise<any> {
        try {
            // Lấy người dùng từ UserRepository (hoặc từ database)
            const user = await this.userRepository.findOne({ where: { id: userId }, relations: ['permissionManager'] });
            // Kiểm tra xem người dùng có tồn tại hay không
            if (!user) {
                return { success: false, message: 'User not found' };
            }

            // Lấy danh sách quyền hiện tại của người dùng
            const currentPermissions = user.permissionManager || [];

             // Lọc ra những quyền không thuộc về user hiện tại và xóa chúng
            await Promise.all(currentPermissions
            .filter(permission => permission.userId === userId)
            .map(permission => this.permissionManagerRepository.remove(permission)));


            // Thêm các quyền mới cho người dùng
            await this.addPermissionToUser(user, newPermissionList);

            return { success: true, message: 'User permissions updated successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to update user permissions', error: error.message };
        }
    }


    async addPermissionToUser(user: User, permissionList: { permissionId: number, pageKey: string }[]): Promise<void> {
        const promises = permissionList.map(async (permission) => {
            // Lưu quyền vào bảng permissionManager
            await this.permissionManagerRepository.save({
                user,
                ...permission,
            });
        });

        await Promise.all(promises);
    }

   

    async login(loginUserDto: LoginUserDto): Promise<any> {
        const user = await this.userRepository.findOne(
            {
                where: { email: loginUserDto.email },
                relations: ['permissionManager'],
            }
        )
        if (!user) {
            throw new HttpException("Email is not exist", HttpStatus.UNAUTHORIZED);
        }
        const checkPass = bcrypt.compareSync(loginUserDto.password, user.password);
        if (!checkPass) {
            throw new HttpException('Password is not correct', HttpStatus.UNAUTHORIZED);
        }
        //generate access token and refresh token 
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
    // Trong AuthService

    

    async updateUserRole(userId: string, newRole: string): Promise<any> {
        try {
            // Lấy người dùng từ UsersService (hoặc từ database)
            const user = await this.userRepository.findOne({ where: { id: parseInt(userId) } });

            // Kiểm tra xem người dùng có tồn tại hay không
            if (!user) {
            // Xử lý khi người dùng không tồn tại
            return { success: false, message: 'User not found' };
            }

            // Cập nhật vai trò của người dùng
            user.role = parseInt(newRole, 10);

            // Lưu người dùng đã cập nhật vào database
            await this.userRepository.save(user);

            return { success: true, message: 'User role updated successfully' };
        } catch (error) {
            // Xử lý lỗi khi cập nhật vai trò
            return { success: false, message: 'Failed to update user role', error: error.message };
        }
    }


            // Inside AuthService class
    async getAllUsers(): Promise<User[]> {
        try {
            const usersWithPermissions = await this.userRepository
            .createQueryBuilder('user')
            .leftJoinAndSelect('user.permissionManager', 'permissionManager')
            .getMany();

        return usersWithPermissions;
        } catch (error) {
            // Handle errors appropriately
            throw new HttpException('Failed to retrieve users', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteUser(userId: number): Promise<any> {
        try {
            // Check if the user exists
            const user = await this.userRepository.findOne({where: {id : userId}});
            if (!user) {
            return { success: false, message: 'User not found' };
            }

             // Xử lý ràng buộc trong mã ứng dụng
            const permissions = await this.permissionManagerRepository.find({ where: { userId: userId } });
            await Promise.all(permissions.map(permission => this.permissionManagerRepository.remove(permission)));

            // Xóa người dùng
            await this.userRepository.remove(user);

            return { success: true, message: 'User deleted successfully' };
        } catch (error) {
            return { success: false, message: 'Failed to delete user', error: error.message };
        }
    }




    

    async refreshToken(refresh_token: string): Promise<any> {
        try {
            const verify = await this.jwtService.verifyAsync(refresh_token, {
                secret: "123456"
            })
            const checkExistToken = await this.userRepository.findOneBy({ email: verify.email, refresh_token })
            if (checkExistToken) {
                return this.generateToken({ id: verify.id, email: verify.email })
            } else {
                throw new HttpException('Refresh token is not valid', HttpStatus.BAD_REQUEST);
            }

        } catch (error) {
            throw new HttpException('Refresh token is not valid', HttpStatus.BAD_REQUEST)
        }
    }

    private async generateToken(payload: { id: number, email: string }) {
        const access_token = await this.jwtService.signAsync(payload, ({
            expiresIn: '1d',
        }));
        const refresh_token = await this.jwtService.signAsync(payload, {
            secret: this.configService.get<string>('SECRET_KEY'),
            expiresIn:this.configService.get<string>('TOKEN_EXPIRATION'),
        })
        await this.userRepository.update(
            { email: payload.email },
            { refresh_token: refresh_token }
        )

        return { access_token, refresh_token };
    }

    
    private async hashPassword(password: string): Promise<string> {
        const saltRound = 6;
        const hash = await bcrypt.hash(password, saltRound);

        return hash;
    }

}