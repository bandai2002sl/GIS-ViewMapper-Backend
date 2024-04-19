import { BaseEntityCustom } from 'src/common/shared';
import { SanXuatTrongTrot } from 'src/modules/san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { BenhCay } from 'src/modules/benh-cay/entities/benh-cay.entity';
import { HanHan } from 'src/modules/han-han/entities/han-han.entity';
import { DienTichTuoiTieu } from 'src/modules/dien-tich-tuoi-tieu/entities/dien-tich-tuoi-tieu.entity';
export declare class CropType extends BaseEntityCustom {
    id: number;
    name: string;
    moTa: string;
    image: string;
    tamNgung: string;
    icon: string;
    sanXuatTrongTrots: SanXuatTrongTrot[];
    benhCays: BenhCay[];
    hanHans: HanHan[];
    sTuoiTieu: DienTichTuoiTieu[];
}
