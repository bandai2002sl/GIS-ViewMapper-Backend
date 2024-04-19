import { ApiProperty } from "@nestjs/swagger";
import { BaseEntityCustom } from "src/common/shared";
import { AdministrativeUnit } from "src/modules/administrative-unit/entities/administrative-unit.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'DuongDonViHanhChinh' })
export class DuongDonViHanhChinh extends BaseEntityCustom {
    @ApiProperty()
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ApiProperty()
    @Column({ type: 'geometry', spatialFeatureType: 'MULTIPOLYGON', name: 'Duong' })
    duong: string;

    @ManyToOne(() => AdministrativeUnit, (administrativeUnit) => administrativeUnit.duongDonViHanhChinhs, {
        onDelete: 'CASCADE',
    })
    administrativeUnit: AdministrativeUnit
}
