import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNumber, IsString, isString } from "class-validator";
import { LOAIHO } from "../entities/ho-chua.entity";


export class CreateHoChuaDto {
    @ApiProperty()
    @IsString()
    ten: string;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsNumber()
    dungTichThietKe: number;

    @ApiProperty()
    @IsNumber()
    dienTichTuoiThietKe: number;

    @ApiProperty()
    @IsNumber()
    dienTichTuoiThucTe: number;

    @ApiProperty()
    @IsEnum(LOAIHO)
    loaiHo: LOAIHO;

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
