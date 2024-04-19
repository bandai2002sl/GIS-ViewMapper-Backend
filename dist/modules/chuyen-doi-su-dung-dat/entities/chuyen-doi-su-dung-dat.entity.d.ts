import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { HinhThucChuyenDoiDat } from "src/modules/hinh-thuc-chuyen-doi-dat/entities/hinh-thuc-chuyen-doi-dat.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
export declare class ChuyenDoiSuDungDat extends BaseEntityCustom {
    id: number;
    moTa: string;
    diaChi: string;
    dienTich: number;
    toaDo: string;
    icon: string;
    ngayChuyenDoi: Date;
    administrativeUnit: AdministrativeUnit;
    hinhThucChuyenDoiDat: HinhThucChuyenDoiDat;
    kyBaoCao: KyBaoCao;
}
