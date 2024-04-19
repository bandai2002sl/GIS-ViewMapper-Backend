import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { ThuySan } from "src/modules/thuy-san/entities/thuy-san.entity";
export declare class SanXuatThuySan extends BaseEntityCustom {
    id: number;
    diaChi: string;
    moTa: string;
    hinhAnh: string;
    tinhTrang: string;
    toaDo: string;
    icon: string;
    caNhanHtx: CaNhanHtx;
    thuySan: ThuySan;
    kyBaoCao: KyBaoCao;
}
