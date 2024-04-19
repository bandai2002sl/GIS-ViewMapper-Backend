import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
export declare class VungChanNuoiAnToan extends BaseEntityCustom {
    id: number;
    name: string;
    diaChi: string;
    quyMo: string;
    moTa: string;
    ngayChungNhan: Date;
    toaDo: string;
    icon: string;
    administrativeUnit: AdministrativeUnit;
    vatNuoi: VatNuoi;
    kyBaoCao: KyBaoCao;
}
