import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateMoHinhCongNgheCaoDto {

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    caNhanHtxId: number

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsNumber()
    dienTich: number;

    @ApiProperty()
    @IsString()
    congNgheSuDung: string;


    @ApiProperty()
    @IsString()
    trangThai: string;
}
