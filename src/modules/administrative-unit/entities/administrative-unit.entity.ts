import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntityCustom } from 'src/common/shared';
import { MoHinhCongNgheCao } from 'src/modules/mo-hinh-cong-nghe-cao/entities/mo-hinh-cong-nghe-cao.entity';
import { BenhCay } from 'src/modules/benh-cay/entities/benh-cay.entity';
import { ChuyenDoiSuDungDat } from 'src/modules/chuyen-doi-su-dung-dat/entities/chuyen-doi-su-dung-dat.entity';
import { HanHan } from 'src/modules/han-han/entities/han-han.entity';
import { SanXuatTrongTrot } from 'src/modules/san-xuat-trong-trot/entities/san-xuat-trong-trot.entity';
import { VungChanNuoiAnToan } from 'src/modules/vung-chan-nuoi-an-toan/entities/vung-chan-nuoi-an-toan.entity';
import { BenhVatNuoi } from 'src/modules/benh-vat-nuoi/entities/benh-vat-nuoi.entity';
import { CoSoKinhDoanh } from 'src/modules/co-so-kinh-doanh/entities/co-so-kinh-doanh.entity';
import { CoSoCheBien } from 'src/modules/co-so-che-bien/entities/co-so-che-bien.entity';
import { CaNhanHtx } from 'src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity';
import { VungDonViHanhChinh } from 'src/modules/vung-don-vi-hanh-chinh/entities/vung-don-vi-hanh-chinh.entity';
import { DuongDonViHanhChinh } from 'src/modules/duong-don-vi-hanh-chinh/entities/duong-don-vi-hanh-chinh.entity';
import { Cong } from 'src/modules/cong/entities/cong.entity';
import { HoChua } from 'src/modules/ho-chua/entities/ho-chua.entity';
import { TramBom } from 'src/modules/tram-bom/entities/tram-bom.entity';
import { KenhMuong } from 'src/modules/kenh-muong/entities/kenh-muong.entity';
import { DienTichTuoiTieu } from 'src/modules/dien-tich-tuoi-tieu/entities/dien-tich-tuoi-tieu.entity';
import { TauCa } from 'src/modules/tau-ca/entities/tau-ca.entity';


@Entity({ name: 'DonViHanhChinh' })
export class AdministrativeUnit extends BaseEntityCustom {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ApiProperty()
  @Column({
    type: 'nvarchar',
    name: 'ma',
    length: 50,
    unique: true,
    nullable: true,
  })
  maHanhChinh: string;

  @ApiProperty()
  @Column({ type: 'nvarchar', name: 'ten', unique: false, nullable: false })
  ten: string;

  @ApiProperty()
  @Column({ type: 'int', name: 'capHanhChinh', unique: false, nullable: false })
  capHanhChinh: number;

  @ApiProperty()
  @Column({
    type: 'nvarchar',
    name: 'tenVietTat',
    length: 50,
    unique: false,
    nullable: false,
  })
  tenVietTat: string;

  @ApiProperty()
  @Column({
    type: 'point',
    name: 'toaDo',
    unique: false,
    nullable: true,
  })
  toaDo: string;

  @OneToMany(() => MoHinhCongNgheCao, (MoHinhCongNgheCao) => MoHinhCongNgheCao.administrativeUnit)
  moHinhCongNgheCaos: MoHinhCongNgheCao[]

  @OneToMany(() => BenhCay, (benhCay) => benhCay.administrativeUnit)
  benhCays: BenhCay[]

  @OneToMany(() => ChuyenDoiSuDungDat, (chuyenDoiSuDungDat) => chuyenDoiSuDungDat.administrativeUnit)
  chuyenDoiSuDungDats: ChuyenDoiSuDungDat[]

  @OneToMany(() => HanHan, (hanHan) => hanHan.administrativeUnit)
  hanHans: HanHan[]

  @OneToMany(() => SanXuatTrongTrot, (sanXuatTrongTrot) => sanXuatTrongTrot.administrativeUnit)
  sanXuatTrongTrots: SanXuatTrongTrot[]

  @OneToMany(() => VungChanNuoiAnToan, (vungChanNuoiAnToan) => vungChanNuoiAnToan.administrativeUnit)
  vungChanNuoiAnToans: VungChanNuoiAnToan[]

  @OneToMany(() => BenhVatNuoi, (benhVatNuoi) => benhVatNuoi.administrativeUnit)
  benhVatNuois: BenhVatNuoi[]

  @OneToMany(() => CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.administrativeUnit)
  coSoKinhDoanhs: CoSoKinhDoanh[]

  @OneToMany(() => CoSoCheBien, (coSoCheBien) => coSoCheBien.administrativeUnit)
  coSoCheBiens: CoSoCheBien[]

  @OneToMany(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.administrativeUnit)
  caNhanHtxs: CaNhanHtx[]

  @OneToMany(() => VungDonViHanhChinh, (vungDonViHanhChinh) => vungDonViHanhChinh.administrativeUnit)
  vungDonViHanhChinhs: VungDonViHanhChinh[]

  @OneToMany(() => DuongDonViHanhChinh, (duongDonViHanhChinh) => duongDonViHanhChinh.administrativeUnit)
  duongDonViHanhChinhs: DuongDonViHanhChinh[]

  @OneToMany(() => Cong, (cong) => cong.administrativeUnit)
  congs: Cong[]

  @OneToMany(() => HoChua, (hoChua) => hoChua.administrativeUnit)
  hoChuas: HoChua[]

  @OneToMany(() => TramBom, (tramBom) => tramBom.administrativeUnit)
  tramBoms: TramBom[]

  @OneToMany(() => KenhMuong, (KenhMuong) => KenhMuong.administrativeUnit)
  kiengs: KenhMuong[]

  @OneToMany(() => DienTichTuoiTieu, (TuoiTieu) => TuoiTieu.cropType)
  sTuoiTieu: DienTichTuoiTieu[]

  @OneToMany(() => TauCa, (tauCa) => tauCa.administrativeUnit)
  tauCas: TauCa[]
}
