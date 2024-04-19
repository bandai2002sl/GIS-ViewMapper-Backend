import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateLoaiKinhDoanhDto {
    @ApiProperty()
    @IsString()
    loaiKinhDoanh: string

    @ApiProperty()
    @IsString()
    moTa: string

    @ApiProperty()
    @IsString()
    tamNgung: string

}
