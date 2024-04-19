import { BaseEntityCustom } from "src/common/shared";
import { BenhVatNuoi } from "src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
import { SanXuatVatNuoi } from "src/modules/san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity";
import { VungChanNuoiAnToan } from "src/modules/vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity";
export declare class VatNuoi extends BaseEntityCustom {
    id: number;
    name: string;
    moTa: string;
    image: string;
    tamNgung: string;
    icon: string;
    sanXuatVatNuois: SanXuatVatNuoi[];
    vungChanNuoiAnToans: VungChanNuoiAnToan[];
    benhVatNuois: BenhVatNuoi[];
    coSoChanNuois: CoSoChanNuoi[];
}
