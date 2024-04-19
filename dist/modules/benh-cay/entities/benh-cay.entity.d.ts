import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { LoaiBenh } from "src/modules/loai-benh/entities/loai-benh.entity";
export declare class BenhCay extends BaseEntityCustom {
    id: number;
    diaChi: string;
    moTa: string;
    hinhAnh: string;
    dienTich: number;
    ngayGhiNhan: Date;
    toaDo: string;
    icon: string;
    cropType: CropType;
    loaiBenh: LoaiBenh;
    administrativeUnit: AdministrativeUnit;
    kyBaoCao: KyBaoCao;
}
