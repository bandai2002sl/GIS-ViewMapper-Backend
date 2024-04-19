import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";

@Entity({ name: 'SanXuatTrongTrot' })
export class SanXuatTrongTrot extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich_trong',
        precision: 10,
        scale: 6,
    })
    dienTichTrong: number;

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich_trong_moi',
        precision: 10,
        scale: 6,
    })
    dienTichTrongMoi: number;

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich_cho_san_pham',
        precision: 10,
        scale: 6,
    })
    dienTichChoSanPham: number;

    @ApiProperty()
    @Column({
        type: 'float',
        name: 'nang_suat',
    })
    nangSuat: number;

    @ApiProperty()
    @Column({
        type: 'float',
        name: 'san_luong',
    })
    sanLuong: number;

    @ApiProperty()
    @Column({
        type: 'datetime',
        name: 'thoi_diem_bao-cao',
    })
    thoiDiemBaoCao: Date;

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

    @ManyToOne(() => CropType, (cropType) => cropType.sanXuatTrongTrots, {
        onDelete: 'CASCADE',
    })
    cropType: CropType

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.sanXuatTrongTrots, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.sanXuatTrongTrots, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
