import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateBenhVatNuoiDto {
    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    nguyenNhan: string;

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
    vatNuoiId: number

    @ApiProperty()
    @IsNumber()
    loaiBenhId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
