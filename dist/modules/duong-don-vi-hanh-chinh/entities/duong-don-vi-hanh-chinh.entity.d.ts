import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
export declare class DuongDonViHanhChinh extends BaseEntityCustom {
    id: number;
    duong: string;
    administrativeUnit: AdministrativeUnit;
}
