import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAdministrativeUnitDto {
    @ApiProperty()
    @IsString()
    maHanhChinh: string;

    @ApiProperty()
    @IsString()
    ten: string;

    @ApiProperty()
    @IsNumber()
    capHanhChinh: number;

    @ApiProperty()
    @IsString()
    tenVietTat: string;


    @ApiProperty()
    @IsString()
    toaDo: string;
}
