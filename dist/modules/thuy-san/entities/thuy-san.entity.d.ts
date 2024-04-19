import { BaseEntityCustom } from "src/common/shared";
import { SanXuatThuySan } from "src/modules/san-xuat-thuy-san/entities/san-xuat-thuy-san.entity";
export declare class ThuySan extends BaseEntityCustom {
    id: number;
    name: string;
    moTa: string;
    image: string;
    tamNgung: string;
    icon: string;
    sanXuatThuySans: SanXuatThuySan[];
}
