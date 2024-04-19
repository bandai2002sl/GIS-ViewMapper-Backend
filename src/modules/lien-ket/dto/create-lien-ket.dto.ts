import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateLienKetDto {

    @ApiProperty()
    @IsNumber()
    caNhanHtxId: number

    @ApiProperty()
    @IsString()
    hinhThucLienKet: string;

    @ApiProperty()
    @IsDate()
    ngayLienKet: Date;

    @ApiProperty()
    @IsString()
    trangThai: string;
}
