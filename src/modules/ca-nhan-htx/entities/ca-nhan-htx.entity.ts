import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CoSoChanNuoi } from "src/modules/co-so-chan-nuoi/entities/co-so-chan-nuoi.entity";
import { CoSoCheBien } from "src/modules/co-so-che-bien/entities/co-so-che-bien.entity";
import { CoSoKinhDoanh } from "src/modules/co-so-kinh-doanh/entities/co-so-kinh-doanh.entity";
import { LienKet } from "src/modules/lien-ket/entities/lien-ket.entity";
import { MoHinhCongNgheCao } from "src/modules/mo-hinh-cong-nghe-cao/entities/mo-hinh-cong-nghe-cao.entity";
import { SanXuatVatNuoi } from "src/modules/san-xuat-vat-nuoi/entities/san-xuat-vat-nuoi.entity";
import { TauCa } from "src/modules/tau-ca/entities/tau-ca.entity";
import { SanXuatThuySan } from "src/modules/san-xuat-thuy-san/entities/san-xuat-thuy-san.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'CaNhanHtx' })
export class CaNhanHtx extends BaseEntityCustom {

    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten' })
    name: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'so_dien_thoai', length: 20 })
    sdt: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    address: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'linh_vuc_hoat_dong', length: '255' })
    linhVucHoatDong: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'hinh_anh', length: '255' })
    hinhAnh: string;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_thanh_lap' })
    ngayThanhLap: Date;


    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'loai_hinh', length: '255' })
    loaiHinh: string;

    @ApiProperty()
    @Column({ type: 'int', name: 'so_nguoi' })
    soNguoi: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trang_thai', length: '255' })
    trangThai: string;

    @ApiProperty()
    @Column({
        type: 'point',
        name: 'toaDo',
        unique: false,
        nullable: true,
    })
    toaDo: string;

    @ApiProperty()
    @Column({ type: 'varchar', length: '200', name: 'icon' })
    icon: string;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.caNhanHtxs, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @OneToMany(() => MoHinhCongNgheCao, (moHinhCongNgheCao) => moHinhCongNgheCao.caNhanHtx)
    moHinhCongNgheCaos: MoHinhCongNgheCao[]

    @OneToMany(() => LienKet, (lienKet) => lienKet.caNhanHtx)
    lienKets: LienKet[]

    @OneToMany(() => SanXuatVatNuoi, (sanXuatVatNuoi) => sanXuatVatNuoi.caNhanHtx)
    sanXuatVatNuois: SanXuatVatNuoi[]

    @OneToMany(() => CoSoKinhDoanh, (coSoKinhDoanh) => coSoKinhDoanh.caNhanHtx)
    coSoKinhDoanhs: CoSoKinhDoanh[]

    @OneToMany(() => CoSoCheBien, (coSoCheBien) => coSoCheBien.caNhanHtx)
    coSoCheBiens: CoSoCheBien[]

    @OneToMany(() => CoSoChanNuoi, (coSoChanNuoi) => coSoChanNuoi.caNhanHtx)
    coSoChanNuois: CoSoChanNuoi[]

    @OneToMany(() => TauCa, (tauCa) => tauCa.caNhanHTX)
    tauCas: TauCa[]

    @OneToMany(() => SanXuatThuySan, (sanXuatThuySan) => sanXuatThuySan.caNhanHtx)
    sanXuatThuySans: SanXuatThuySan[]
}
