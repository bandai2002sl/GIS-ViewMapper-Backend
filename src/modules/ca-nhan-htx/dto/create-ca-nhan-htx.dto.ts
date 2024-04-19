import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCaNhanHtxDto {
    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    sdt: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsString()
    linhVucHoatDong: string;

    @ApiProperty()
    @IsString()
    hinhAnh: string;

    @ApiProperty()
    @IsDate()
    ngayThanhLap: Date;


    @ApiProperty()
    @IsString()
    loaiHinh: string;

    @ApiProperty()
    @IsNumber()
    soNguoi: number;

    @ApiProperty()
    @IsString()
    trangThai: string;

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;
}
