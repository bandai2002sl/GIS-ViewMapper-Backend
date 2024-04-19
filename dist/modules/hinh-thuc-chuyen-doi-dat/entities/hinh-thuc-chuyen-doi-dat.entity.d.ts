import { BaseEntityCustom } from "src/common/shared";
import { ChuyenDoiSuDungDat } from "src/modules/chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity";
export declare class HinhThucChuyenDoiDat extends BaseEntityCustom {
    id: number;
    tenHinhThuc: string;
    tamNgung: string;
    chuyenDoiSuDungDats: ChuyenDoiSuDungDat[];
}
