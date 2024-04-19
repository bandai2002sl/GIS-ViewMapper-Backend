import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateChuyenDoiSuDungDatDto {

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsNumber()
    dienTich: number

    @ApiProperty()
    @IsDate()
    ngayChuyenDoi: Date;

    @ApiProperty()
    @IsString()
    toaDo: string;

    @ApiProperty()
    @IsString()
    icon: string;

    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsNumber()
    hinhThucChuyenDoiDatId: number;

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
