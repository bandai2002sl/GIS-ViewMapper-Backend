import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { KyBaoCao } from "src/modules/ky-bao-cao/entities/ky-bao-cao.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'HanHan' })
export class HanHan extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

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

    @ManyToOne(() => CropType, (cropType) => cropType.hanHans, {
        onDelete: 'CASCADE',
    })
    cropType: CropType

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.hanHans, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => KyBaoCao, (kyBaoCao) => kyBaoCao.hanHans, {
        onDelete: 'CASCADE',
    })
    kyBaoCao: KyBaoCao
}
