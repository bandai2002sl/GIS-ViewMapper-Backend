import { ApiProperty } from "@nestjs/swagger";
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
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";


@Entity({ name: 'KyBaoCao' })
export class KyBaoCao extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'tenBaoCao', length: "255" })
    tenBaoCao: string;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'thoiDiemBatDau' })
    thoiDiemBatDau: Date;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'thoiDiemKetThuc' })
    thoiDiemKetThuc: Date;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trangThai', length: '255' })
    trangThai: string;

    @OneToMany(() => SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.kyBaoCao)
    sanXuatTrongTrots: SanXuatTrongTrot[]

    @OneToMany(() => BenhCay, (benhCay) => benhCay.kyBaoCao)
    benhCays: BenhCay[]

    @OneToMany(() => ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.kyBaoCao)
    chuyenDoiSuDungDats: ChuyenDoiSuDungDat[]

    @OneToMany(() => HanHan, (hanHan) => hanHan.kyBaoCao)
    hanHans: HanHan[]

    @OneToMany(() => CoSoCheBien, (coSoCheBien) => coSoCheBien.kyBaoCao)
    coSoCheBiens: CoSoCheBien[]

    @OneToMany(() => SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.kyBaoCao)
    sanXuatVatNuois: SanXuatVatNuoi[]

    @OneToMany(() => CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.kyBaoCao)
    coSoChanNuois: CoSoChanNuoi[]

    @OneToMany(() => VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.kyBaoCao)
    vungChanNuoiAnToans: VungChanNuoiAnToan[]

    @OneToMany(() => BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.kyBaoCao)
    benhVatNuois: BenhVatNuoi[]

    @OneToMany(() => SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.kyBaoCao)
    sanXuatThuySans: SanXuatThuySan[]
}
