import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateTauCaDto {
    @ApiProperty()
    @IsNumber()
    soDangKy: number

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    tinhTrang: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsDate()
    ngayDangKy: Date;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    caNhanHTXId: number

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;
}
