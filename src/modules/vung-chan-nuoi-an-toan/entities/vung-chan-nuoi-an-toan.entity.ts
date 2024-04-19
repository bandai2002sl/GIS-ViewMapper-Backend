import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { VatNuoi } from "src/modules/vat-nuoi/entities/vat-nuoi.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'VungChanNuoiAnToan' })
export class VungChanNuoiAnToan extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten_vung', length: "255" })
    name: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: "255" })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'quy_mo', length: "255" })
    quyMo: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: "255" })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_chung_nhan' })
    ngayChungNhan: Date

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

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.vungChanNuoiAnToans, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => VatNuoi, (vatNuoi) => vatNuoi.vungChanNuoiAnToans, {
        onDelete: 'CASCADE',
    })
    vatNuoi: VatNuoi

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.vungChanNuoiAnToans, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
