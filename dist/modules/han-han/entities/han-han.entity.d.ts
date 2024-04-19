import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
export declare class HanHan extends BaseEntityCustom {
    id: number;
    diaChi: string;
    dienTich: number;
    ngayGhiNhan: Date;
    toaDo: string;
    icon: string;
    cropType: CropType;
    administrativeUnit: AdministrativeUnit;
    kyBaoCao: KyBaoCao;
}
