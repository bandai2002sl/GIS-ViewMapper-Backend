import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CaNhanHtx } from "src/modules/ca-nhan-htx/entities/ca-nhan-htx.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'MoHinhCongNgheCao' })
export class MoHinhCongNgheCao extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    address: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string;

    @ApiProperty()
    @Column({
        type: 'decimal',
        name: 'dien_tich',
        precision: 10,
        scale: 6,
    })
    dienTich: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'cong_nghe_su_dung', length: '255' })
    congNgheSuDung: string;


    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'trang_thai', length: '255' })
    trangThai: string;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.moHinhCongNgheCaos, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => CaNhanHtx, (caNhanHtx) => caNhanHtx.moHinhCongNgheCaos, {
        onDelete: 'CASCADE',
    })
    caNhanHtx: CaNhanHtx

}
