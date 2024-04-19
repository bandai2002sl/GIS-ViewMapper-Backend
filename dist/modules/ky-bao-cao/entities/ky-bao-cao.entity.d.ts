import { BaseEntityCustom } from "src/common/shared";
import { BenhCay } from "src/modules/benh-cay/entities/benh-cay.entity";
import { BenhVatNuoi } from "src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity";
import { ChuyenDoiSuDungDat } from "src/modules/chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
import { CoSoCheBien } from "src/modules/co-so-che-bien/entities/co-so-che-bien.entity";
import { HanHan } from "src/modules/han-han/entities/han-han.entity";
import { SanXuatThuySan } from "src/modules/san-xuat-thuy-san/entities/san-xuat-thuy-san.entity";
import { SanXuatTrongTrot } from "src/modules/san-xuat-trong-trot/entities/san-xuat-trong-trot.entity";
import { SanXuatVatNuoi } from "src/modules/san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity";
import { VungChanNuoiAnToan } from "src/modules/vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity";
export declare class KyBaoCao extends BaseEntityCustom {
    id: number;
    tenBaoCao: string;
    thoiDiemBatDau: Date;
    thoiDiemKetThuc: Date;
    trangThai: string;
    sanXuatTrongTrots: SanXuatTrongTrot[];
    benhCays: BenhCay[];
    chuyenDoiSuDungDats: ChuyenDoiSuDungDat[];
    hanHans: HanHan[];
    coSoCheBiens: CoSoCheBien[];
    sanXuatVatNuois: SanXuatVatNuoi[];
    coSoChanNuois: CoSoChanNuoi[];
    vungChanNuoiAnToans: VungChanNuoiAnToan[];
    benhVatNuois: BenhVatNuoi[];
    sanXuatThuySans: SanXuatThuySan[];
}
