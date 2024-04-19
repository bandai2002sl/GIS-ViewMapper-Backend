import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateBenhCayDto {
    @ApiProperty()
    @IsNumber()
    cropTypeId: number

    @ApiProperty()
    @IsNumber()
    loaiBenhId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsString()
    hinhAnh: string;

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
}
