import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { LOAIHINH } from "../entities/tram-bom.entity";


export class CreateTramBomDto {
    @ApiProperty()
    @IsString()
    ten: string;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsNumber()
    congXuat: number;

    @ApiProperty()
    @IsEnum(LOAIHINH)
    loaiHinh: LOAIHINH;

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number;
}
