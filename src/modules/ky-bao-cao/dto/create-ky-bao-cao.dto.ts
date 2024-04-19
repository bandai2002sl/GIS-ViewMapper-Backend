import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateKyBaoCaoDto {
    @ApiProperty()
    @IsString()
    tenBaoCao: string;

    @ApiProperty()
    @IsDate()
    thoiDiemBatDau: Date;

    @ApiProperty()
    @IsDate()
    thoiDiemKetThuc: Date;

    @ApiProperty()
    @IsString()
    trangThai: string;
}
