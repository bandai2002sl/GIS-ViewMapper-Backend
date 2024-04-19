import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
export declare class VungDonViHanhChinh extends BaseEntityCustom {
    id: number;
    moTa: string;
    vung: string;
    administrativeUnit: AdministrativeUnit;
}
