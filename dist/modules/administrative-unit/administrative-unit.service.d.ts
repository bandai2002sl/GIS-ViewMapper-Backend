import { CreateAdministrativeUnitDto } from './dto/create-administrative-unit.dto';
import { UpdateAdministrativeUnitDto } from './dto/update-administrative-unit.dto';
import { AdministrativeUnit } from './entities/administrative-unit.entity';
import { Repository } from 'typeorm';
export declare class AdministrativeUnitService {
    private AdministrativeUnitResposity;
    constructor(AdministrativeUnitResposity: Repository<AdministrativeUnit>);
    create(createAdministrativeUnitDto: CreateAdministrativeUnitDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<AdministrativeUnit>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    updateAdmin(id: number, updateAdministrativeUnitDto: UpdateAdministrativeUnitDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteAdmin(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
