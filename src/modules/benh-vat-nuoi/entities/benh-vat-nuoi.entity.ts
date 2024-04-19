import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { LoaiBenh } from "src/modules/loai-benh/entities/loai-benh.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'BenhVatNuoi' })
export class BenhVatNuoi extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'nguyen_nhan', length: "255" })
    nguyenNhan: string;

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich',
        precision: 10,
        scale: 6,
    })
    dienTich: number

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_ghi_nhan' })
    ngayGhiNhan: Date;

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

    @ManyToOne(() => VatNuoi, (vatNuoi) => vatNuoi.benhVatNuois, {
        onDelete: 'CASCADE',
    })
    vatNuoi: VatNuoi

    @ManyToOne(() => LoaiBenh, (loaiBenh) => loaiBenh.benhVatNuois, {
        onDelete: 'CASCADE',
    })
    loaiBenh: LoaiBenh

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.benhVatNuois, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.benhVatNuois, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
