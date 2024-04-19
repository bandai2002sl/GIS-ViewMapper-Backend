import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { CropType } from "src/modules/crop-type/entities/crop-type.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum HINH_THUC{
    TUOI ='Tưới',
    TIEU = 'Tiêu',
}

@Entity({ name: 'DienTichTuoiTieu' })
export class DienTichTuoiTieu extends BaseEntityCustom{
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number

    @ApiProperty()
    @Column({ type: 'decimal', name: 'dien_tich' })
    dienTich: number;

    @ApiProperty()
    @Column({ type: 'datetime', name: 'ngay_thong_ke'})
    ngayThongKe: Date;

    @ApiProperty()
    @Column({ type: 'enum', name: 'hinh_thuc', enum: HINH_THUC, default: HINH_THUC.TIEU })
    hinhThuc: HINH_THUC;

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
    
    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.sTuoiTieu)
    administrativeUnit: AdministrativeUnit

    @ManyToOne(() => CropType, (cropType) => cropType.hanHans)
    cropType: CropType
    
}
