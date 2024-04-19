import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateHanHanDto {
    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsNumber()
    dienTich: number

    @ApiProperty()
    @IsDate()
    ngayGhiNhan: Date;

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsNumber()
    cropTypeId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
