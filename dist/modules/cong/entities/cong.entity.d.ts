import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
export declare enum LOAIKICHTHUOC {
    LON = "L\u1EDBn",
    VUA = "V\u1EEBa",
    NHO = "Nh\u1ECF"
}
export declare enum LOAIHINH {
    TUOI = "T\u01B0\u1EDBi",
    TIEU = "Ti\u00EAu",
    CAHAI = "T\u01B0\u1EDBi ti\u00EAu k\u1EBFt h\u1EE3p"
}
export declare class Cong extends BaseEntityCustom {
    id: number;
    ten: string;
    diaChi: string;
    kichCo: string;
    loaiKichThuoc: LOAIKICHTHUOC;
    loaiHinh: LOAIHINH;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
}
