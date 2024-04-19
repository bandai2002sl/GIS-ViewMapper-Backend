import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
export declare class SanXuatVatNuoi extends BaseEntityCustom {
    id: number;
    diaChi: string;
    moTa: string;
    hinhAnh: string;
    tinhTrang: string;
    toaDo: string;
    icon: string;
    caNhanHtx: CaNhanHtx;
    vatNuoi: VatNuoi;
    kyBaoCao: KyBaoCao;
}
