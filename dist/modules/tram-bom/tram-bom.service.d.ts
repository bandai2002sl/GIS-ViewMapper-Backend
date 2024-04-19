import { CreateTramBomDto } from './dto/create-tram-bom.dto';
import { UpdateTramBomDto } from './dto/update-tram-bom.dto';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { TramBom } from './entities/tram-bom.entity';
export declare class TramBomService {
    private tramBomResposity;
    private administrativeUnitService;
    constructor(tramBomResposity: Repository<TramBom>, administrativeUnitService: AdministrativeUnitService);
    create(createTramBomDto: CreateTramBomDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<TramBom>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateTramBomDto: UpdateTramBomDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
