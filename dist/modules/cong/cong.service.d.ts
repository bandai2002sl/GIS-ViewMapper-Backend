import { CreateCongDto } from './dto/create-cong.dto';
import { UpdateCongDto } from './dto/update-cong.dto';
import { Cong } from './entities/cong.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class CongService {
    private congResposity;
    private administrativeUnitService;
    constructor(congResposity: Repository<Cong>, administrativeUnitService: AdministrativeUnitService);
    create(createCongDto: CreateCongDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<Cong>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateCongDto: UpdateCongDto): Promise<{
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
