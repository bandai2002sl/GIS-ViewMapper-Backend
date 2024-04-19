import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
export declare enum Co_Dang_Ky {
    Khong = "Kh\u00F4ng",
    Co = "C\u00F3"
}
export declare class CoSoCheBien extends BaseEntityCustom {
    id: number;
    diaChi: string;
    loaiCheBien: string;
    moTa: string;
    hinhAnh: string;
    trangThai: string;
    coDangKy: Co_Dang_Ky;
    CoGCNATTP: string;
    toaDo: string;
    icon: string;
    caNhanHtx: CaNhanHtx;
    administrativeUnit: AdministrativeUnit;
    kyBaoCao: KyBaoCao;
}
