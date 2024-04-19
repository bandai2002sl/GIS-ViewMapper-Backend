import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";

export class RegisterUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsNumber()
    role: number;
    
    @ApiProperty()
    @IsDate()
    createDate?: Date;

    
    constructor(userDto: Partial<RegisterUserDto>) {
        Object.assign(this, userDto);
        this.createDate = new Date(); 
    }
}
