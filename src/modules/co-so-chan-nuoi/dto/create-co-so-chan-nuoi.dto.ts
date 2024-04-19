import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsNumber, IsString } from "class-validator"

export class CreateCoSoChanNuoiDto {
    @ApiProperty()
    @IsString()
    tinhTrang: string

    @ApiProperty()
    @IsString()
    diaChi: string

    @ApiProperty()
    @IsString()
    toaDo: string

    @ApiProperty()
    @IsString()
    icon: string

    @ApiProperty()
    @IsNumber()
    caNhanHtxId: number

    @ApiProperty({ type: [Number] })
    @IsArray()
    @IsNumber({}, { each: true })
    vatNuoiIds: number[];

    @ApiProperty()
    @IsNumber()
    hinhThucChanNuoiId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}