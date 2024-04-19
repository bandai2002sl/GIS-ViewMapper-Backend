import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateReport {
    @ApiProperty()
    @IsNotEmpty()
    LoaiBaoCao: string;

    @ApiProperty()
    @IsNotEmpty()
    NguoiTao: string;

    @ApiProperty()
    @IsNotEmpty()
    ChucVu: string;

    @ApiProperty()
    @IsNotEmpty()
    SoSoKinhDoanh: number

    @ApiProperty()
    @IsNotEmpty()
    SoTauCa: number;

    @ApiProperty()
    @IsNotEmpty()
    SoCoSoSanXuat: number;

    @ApiProperty()
    @IsNotEmpty()
    SoCong: number;

    @ApiProperty()
    @IsNotEmpty()
    SoHoChua: number;

    @ApiProperty()
    @IsNotEmpty()
    SoTramBom: number;

    @ApiProperty()
    @IsNotEmpty()
    SoKenhMuong: number;

    @ApiProperty()
    @IsNotEmpty()
    DienTichTieuTieu: number;

    @ApiProperty()
    @IsNotEmpty()
    DonViBaoCao :string;

    @ApiProperty()
    @IsNotEmpty()
    TrangThai: string;

    @ApiProperty()
    @IsNotEmpty()
    Public: string;

    @ApiProperty()
    @IsNotEmpty()
    Role: string;

    @ApiProperty({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    CreatedOn: Date;
}