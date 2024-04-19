import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
export declare class TauCa {
    id: number;
    soDangKy: number;
    diaChi: string;
    moTa: string;
    ngayDangKy: Date;
    tinhTrang: string;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
    caNhanHTX: CaNhanHtx;
}
