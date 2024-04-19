import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
export declare enum LOAIHO {
    DAPHOCHUAQUANTRONG = "\u0110\u1EADp h\u1ED3 ch\u1EE9a quan tr\u1ECDng \u0111\u1EB7c bi\u1EC7t",
    DAPHOCHUANUOCLON = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc l\u1EDBn",
    DAPHOCHUANUOCVUA = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc v\u1EEBa",
    DAPHOCHUANUOCNHO = "\u0110\u1EADp h\u1ED3 ch\u1EE9a n\u01B0\u1EDBc nh\u1ECF"
}
export declare class HoChua extends BaseEntityCustom {
    id: number;
    ten: string;
    diaChi: string;
    dungTichThietKe: number;
    dienTichTuoiThietKe: number;
    dienTichTuoiThucTe: number;
    loaiHo: LOAIHO;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
}
