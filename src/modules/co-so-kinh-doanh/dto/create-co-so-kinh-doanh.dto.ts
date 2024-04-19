import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateCoSoKinhDoanhDto {
    @ApiProperty()
    @IsString()
    diaDiem: string

    @ApiProperty()
    @IsString()
    hinhAnh: string

    @ApiProperty()
    @IsString()
    dangKyKinhDoanh: string

    @ApiProperty()
    @IsString()
    sdt: string;

    @ApiProperty()
    @IsString()
    trangThai: string

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
    loaiKinhDoanhId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number
}
