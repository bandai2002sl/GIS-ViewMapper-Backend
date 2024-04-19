import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { HinhThucChuyenDoiDat } from "src/modules/hinh-thuc-chuyen-doi-dat/entities/hinh-thuc-chuyen-doi-dat.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'ChuyenDoiSuDungDat' })
export class ChuyenDoiSuDungDat extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: "255" })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich',
        precision: 10,
        scale: 6,
    })
    dienTich: number

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

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_chuyen_doi' })
    ngayChuyenDoi: Date;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => HinhThucChuyenDoiDat, (hinhThucChuyenDoiDat) => hinhThucChuyenDoiDat.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    })
    hinhThucChuyenDoiDat: HinhThucChuyenDoiDat

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.chuyenDoiSuDungDats, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
