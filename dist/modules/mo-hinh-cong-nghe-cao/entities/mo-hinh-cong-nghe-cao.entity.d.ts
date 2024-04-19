import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
export declare class MoHinhCongNgheCao extends BaseEntityCustom {
    id: number;
    address: string;
    moTa: string;
    dienTich: number;
    congNgheSuDung: string;
    trangThai: string;
    administrativeUnit: AdministrativeUnit;
    caNhanHtx: CaNhanHtx;
}
