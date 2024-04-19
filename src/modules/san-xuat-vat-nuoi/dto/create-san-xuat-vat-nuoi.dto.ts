import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateSanXuatVatNuoiDto {
    @ApiProperty()
    @IsString()
    diaChi: string

    @ApiProperty()
    @IsString()
    moTa: string

    @ApiProperty()
    @IsString()
    hinhAnh: string

    @ApiProperty()
    @IsString()
    tinhTrang: string

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
    vatNuoiId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
