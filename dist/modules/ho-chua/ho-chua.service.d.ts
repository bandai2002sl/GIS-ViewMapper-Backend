import { CreateHoChuaDto } from './dto/create-ho-chua.dto';
import { UpdateHoChuaDto } from './dto/update-ho-chua.dto';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { HoChua } from './entities/ho-chua.entity';
export declare class HoChuaService {
    private hoChuaResposity;
    private administrativeUnitService;
    constructor(hoChuaResposity: Repository<HoChua>, administrativeUnitService: AdministrativeUnitService);
    create(createHoChuaDto: CreateHoChuaDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<HoChua>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateHoChuaDto: UpdateHoChuaDto): Promise<{
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
