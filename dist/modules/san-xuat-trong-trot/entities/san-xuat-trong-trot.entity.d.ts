import { BaseEntityCustom } from "src/common/shared";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
export declare class SanXuatTrongTrot extends BaseEntityCustom {
    id: number;
    diaChi: string;
    dienTichTrong: number;
    dienTichTrongMoi: number;
    dienTichChoSanPham: number;
    nangSuat: number;
    sanLuong: number;
    thoiDiemBaoCao: Date;
    toaDo: string;
    icon: string;
    cropType: CropType;
    administrativeUnit: AdministrativeUnit;
    kyBaoCao: KyBaoCao;
}
