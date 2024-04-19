import { CreateKenhMuongDto } from './dto/create-kenh-muong.dto';
import { UpdateKenhMuongDto } from './dto/update-kenh-muong.dto';
import { KenhMuong } from './entities/kenh-muong.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class KenhMuongService {
    private kenhMuongResposity;
    private administrativeUnitService;
    constructor(kenhMuongResposity: Repository<KenhMuong>, administrativeUnitService: AdministrativeUnitService);
    create(createKenhMuongDto: CreateKenhMuongDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<KenhMuong>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateKenhMuongDto: UpdateKenhMuongDto): Promise<{
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
