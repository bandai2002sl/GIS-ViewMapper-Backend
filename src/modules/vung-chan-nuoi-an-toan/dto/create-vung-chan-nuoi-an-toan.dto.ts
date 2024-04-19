import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateVungChanNuoiAnToanDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    diaChi: string;

    @ApiProperty()
    @IsString()
    quyMo: string;

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsDate()
    ngayChungNhan: Date

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
    vatNuoiId: number

    @ApiProperty()
    @IsNumber()
    kyBaoCaoId: number
}
