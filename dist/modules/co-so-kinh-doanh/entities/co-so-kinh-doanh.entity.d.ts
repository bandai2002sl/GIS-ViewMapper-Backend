import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { LoaiKinhDoanh } from "src/modules/loai-kinh-doanh/entities/loai-kinh-doanh.entity";
export declare class CoSoKinhDoanh extends BaseEntityCustom {
    id: number;
    diaDiem: string;
    hinhAnh: string;
    dangKyKinhDoanh: string;
    sdt: string;
    trangThai: string;
    toaDo: string;
    icon: string;
    caNhanHtx: CaNhanHtx;
    loaiKinhDoanh: LoaiKinhDoanh;
    administrativeUnit: AdministrativeUnit;
}
