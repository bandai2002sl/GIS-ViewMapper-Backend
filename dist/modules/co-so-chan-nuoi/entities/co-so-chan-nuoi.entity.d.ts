import { BaseEntityCustom } from "src/common/shared";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { HinhThucChanNuoi } from "src/modules/hinh-thuc-chan-nuoi/entities/hinh-thuc-chan-nuoi.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
export declare class CoSoChanNuoi extends BaseEntityCustom {
    id: number;
    tinhTrang: string;
    diaChi: string;
    toaDo: string;
    icon: string;
    caNhanHtx: CaNhanHtx;
    vatNuoi: VatNuoi[];
    hinhThucChanNuoi: HinhThucChanNuoi;
    kyBaoCao: KyBaoCao;
}
