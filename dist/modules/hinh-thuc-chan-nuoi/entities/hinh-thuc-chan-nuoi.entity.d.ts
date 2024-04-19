import { BaseEntityCustom } from "src/common/shared";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
export declare class HinhThucChanNuoi extends BaseEntityCustom {
    id: number;
    tenHinhThuc: string;
    tamNgung: string;
    coSoChanNuois: CoSoChanNuoi[];
}
