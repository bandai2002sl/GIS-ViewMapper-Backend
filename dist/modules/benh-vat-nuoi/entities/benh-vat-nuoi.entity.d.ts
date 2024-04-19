import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { LoaiBenh } from "src/modules/loai-benh/entities/loai-benh.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
export declare class BenhVatNuoi extends BaseEntityCustom {
    id: number;
    diaChi: string;
    nguyenNhan: string;
    dienTich: number;
    ngayGhiNhan: Date;
    toaDo: string;
    icon: string;
    vatNuoi: VatNuoi;
    loaiBenh: LoaiBenh;
    administrativeUnit: AdministrativeUnit;
    kyBaoCao: KyBaoCao;
}
