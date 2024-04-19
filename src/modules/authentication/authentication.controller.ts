// auth.controller.ts
import { Body, Controller, Post, UseGuards, ValidationPipe, UsePipes, Patch, Request, Get, Param, Put, HttpException, HttpStatus, ParseIntPipe, Delete } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './authentication.service';
import { User } from './entities/user.entity';
import { Roles } from './roles.decorator';

@ApiTags('Tài khoản')
@Controller('authentication')
export class AuthController {

  constructor(private authService: AuthService){}


    @Post('register')
    @UsePipes(ValidationPipe)
    register(@Body() registerUserDto:RegisterUserDto): Promise<{message : string}> {
        return this.authService.register(registerUserDto);
    }

   @Post('login')
    @ApiResponse({status:201, description:'Login successfully!'})
    @ApiResponse({status:401, description:'Login fail!'})
    @UsePipes(ValidationPipe)
    login(@Body() loginUserDto:LoginUserDto):Promise<User> {

        return this.authService.login(loginUserDto);
    }

    @Roles("0")
    @UseGuards(AuthGuard)
    @Patch('update-role/:id')
    async updateUserRole(@Param('id') id: string, @Body('newRole') newRole: string, ) {
        return this.authService.updateUserRole(id.toString(), newRole);
    }

   
    @UseGuards(AuthGuard)
    @Patch('update-permission/:id')
    async updateUserPermission(@Param('id') id: string, @Body('newPermissionList') newPermissionList: {id : number, permissionId: number, pageKey: string, active : number }[], ) {
        return this.authService.updatePermission(parseInt(id), newPermissionList);
    }

    @Roles("0")
    @UseGuards(AuthGuard)
    @Get("users")
    async getAllUsers() {
        try {
            const users = await this.authService.getAllUsers();
            return { success: true, users };
        } catch (error) {
            // Handle errors appropriately
            return { success: false, message: 'Failed to retrieve users', error: error.message };
        }
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) userId: number): Promise<any> {
        try {
        // Call the service method to delete the user
        const result = await this.authService.deleteUser(userId);

        // Check if the deletion was successful
        if (result.success) {
            return { message: 'User deleted successfully' };
        } else {
            // Handle the case where the user deletion was not successful
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        } catch (error) {
        // Handle other errors appropriately
        throw new HttpException('Failed to delete user', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
