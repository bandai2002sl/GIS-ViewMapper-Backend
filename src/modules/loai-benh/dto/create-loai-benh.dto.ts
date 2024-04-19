import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { DOI_TUONG } from "../entities/loai-benh.entity";


export class CreateLoaiBenhDto {

    @ApiProperty()
    @IsString()
    tenBenh: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsEnum(DOI_TUONG)
    doiTuong: DOI_TUONG

    @ApiProperty()
    @IsString()
    hinhAnh: string;

    @ApiProperty()
    @IsString()
    icon: string;
}
