import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
export declare enum HINH_THUC {
    TUOI = "T\u01B0\u1EDBi",
    TIEU = "Ti\u00EAu"
}
export declare class DienTichTuoiTieu extends BaseEntityCustom {
    id: number;
    dienTich: number;
    ngayThongKe: Date;
    hinhThuc: HINH_THUC;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
    cropType: CropType;
}
