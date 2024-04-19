import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
export declare class LienKet extends BaseEntityCustom {
    id: number;
    hinhThucLienKet: string;
    ngayLienKet: Date;
    trangThai: string;
    caNhanHtx: CaNhanHtx;
}
