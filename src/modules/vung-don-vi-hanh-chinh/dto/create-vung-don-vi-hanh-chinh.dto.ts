import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateVungDonViHanhChinhDto {
    @ApiProperty()
    @IsNumber()
    administrativeUnitId: number

    @ApiProperty()
    @IsString()
    moTa: string;

    @ApiProperty()
    @IsString()
    vung: string;
}
