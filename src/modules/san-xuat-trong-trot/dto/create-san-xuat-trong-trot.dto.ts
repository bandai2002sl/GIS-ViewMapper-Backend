import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateSanXuatTrongTrotDto {
    @ApiProperty()
    @IsNumber()
    cropTypeId: number

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number

    @ApiProperty()
    @IsNumber()
    dienTichTrong: number;

    @ApiProperty()
    @IsNumber()
    dienTichTrongMoi: number;

    @ApiProperty()
    @IsNumber()
    dienTichChoSanPham: number;

    @ApiProperty()
    @IsNumber()
    nangSuat: number;

    @ApiProperty()
    @IsNumber()
    sanLuong: number;

    @ApiProperty()
    @IsDate()
    thoiDiemBaoCao: Date;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;
}
