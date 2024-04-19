import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
export declare enum LOAIHINH {
    TUOI = "T\u01B0\u1EDBi",
    TIEU = "Ti\u00EAu",
    CAHAI = "T\u01B0\u1EDBi ti\u00EAu k\u1EBFt h\u1EE3p"
}
export declare class TramBom extends BaseEntityCustom {
    id: number;
    ten: string;
    diaChi: string;
    congXuat: number;
    loaiHinh: LOAIHINH;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
}
