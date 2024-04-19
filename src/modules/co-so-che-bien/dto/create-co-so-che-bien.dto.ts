import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNumber, IsString } from "class-validator"
import { Co_Dang_Ky } from "../entities/co-so-che-bien.entity"

export class CreateCoSoCheBienDto {
    @ApiProperty()
    @IsString()
    diaChi: string

    @ApiProperty()
    @IsString()
    loaiCheBien: string

    @ApiProperty()
    @IsString()
    moTa: string

    @ApiProperty()
    @IsString()
    hinhAnh: string

    @ApiProperty()
    @IsString()
    trangThai: string

    @ApiProperty()
    @IsEnum(Co_Dang_Ky)
    coDangKy: Co_Dang_Ky

    @ApiProperty()
    @IsString()
    CoGCNATTP: string

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsNumber()
    caNhanHtxId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
