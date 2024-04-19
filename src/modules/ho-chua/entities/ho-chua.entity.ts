import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum LOAIHO{
    DAPHOCHUAQUANTRONG ='Đập hồ chứa quan trọng đặc biệt',
    DAPHOCHUANUOCLON = 'Đập hồ chứa nước lớn',
    DAPHOCHUANUOCVUA = 'Đập hồ chứa nước vừa',
    DAPHOCHUANUOCNHO = 'Đập hồ chứa nước nhỏ',
}

@Entity({ name: 'HoChua' })
export class HoChua extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'ten', length: '255' })
    ten: string;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'dia_chi', length: '255' })
    diaChi: string;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'dung_tich_thiet_ke' })
    dungTichThietKe: number;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'dien_tich_tuoi_thiet_ke'})
    dienTichTuoiThietKe: number;

    @ApiProperty()
    @Column({ type: 'decimal', name: 'dien_tich_tuoi_thuc_te'})
    dienTichTuoiThucTe: number;

    @ApiProperty()
    @Column({ type: 'enum', name: 'loai_ho', enum: LOAIHO, default: LOAIHO.DAPHOCHUANUOCNHO })
    loaiHo: LOAIHO;

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
    
    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.hoChuas)
    administrativeUnit: AdministrativeUnit
}
