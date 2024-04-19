import { BaseEntityCustom } from "src/common/shared";
import { BenhCay } from "src/modules/benh-cay/entities/benh-cay.entity";
import { BenhVatNuoi } from "src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity";
export declare enum DOI_TUONG {
    CayTrong = "C\u00E2y tr\u1ED3ng",
    VatNuoi = "V\u1EADt nu\u00F4i"
}
export declare class LoaiBenh extends BaseEntityCustom {
    id: number;
    tenBenh: string;
    moTa: string;
    doiTuong: DOI_TUONG;
    hinhAnh: string;
    icon: string;
    benhCays: BenhCay[];
    benhVatNuois: BenhVatNuoi[];
}
