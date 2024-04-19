import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'VungDonViHanhChinh' })
export class VungDonViHanhChinh extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'nvarchar', name: 'mo_ta', length: '255' })
    moTa: string;

    @ApiProperty()
    @Column({ type: 'geometry', spatialFeatureType: 'MULTIPOLYGON', name: 'Vung' })
    vung: string;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.vungDonViHanhChinhs, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit
}
