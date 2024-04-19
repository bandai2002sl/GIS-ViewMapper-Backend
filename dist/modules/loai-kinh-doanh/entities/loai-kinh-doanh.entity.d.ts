import { BaseEntityCustom } from "src/common/shared";
import { CoSoKinhDoanh } from "src/modules/co-so-kinh-doanh/entities/co-so-kinh-doanh.entity";
export declare class LoaiKinhDoanh extends BaseEntityCustom {
    id: number;
    loaiKinhDoanh: string;
    moTa: string;
    tamNgung: string;
    coSoKinhDoanhs: CoSoKinhDoanh[];
}
