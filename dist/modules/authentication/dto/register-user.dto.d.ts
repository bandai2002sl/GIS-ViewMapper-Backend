export declare class RegisterUserDto {
    email: string;
    password: string;
    role: number;
    createDate?: Date;
    constructor(userDto: Partial<RegisterUserDto>);
}
