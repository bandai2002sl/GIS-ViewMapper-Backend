// src/reports/report.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'tblKyBaoCao'})
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  LoaiBaoCao: string;

  @Column()
  NguoiTao: string;

  @Column()
  ChucVu: string;

  @Column()
  SoSoKinhDoanh: number

  @Column()
  SoTauCa: number;

  @Column()
  SoCoSoSanXuat: number;

  @Column()
  SoCong: number;

  @Column()
  SoHoChua: number;

  @Column()
  SoTramBom: number;

  @Column()
  SoKenhMuong: number;

  @Column()
  DienTichTieuTieu: number;

  @Column()
  DonViBaoCao :string;

  @Column()
  TrangThai: string;
  
  @Column()
  Public: string;
  
  @Column()
  Role: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  CreatedOn: Date;
}
