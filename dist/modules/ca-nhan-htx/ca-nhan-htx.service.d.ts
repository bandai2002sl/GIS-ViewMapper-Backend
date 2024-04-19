import { CreateCaNhanHtxDto } from './dto/create-ca-nhan-htx.dto';
import { UpdateCaNhanHtxDto } from './dto/update-ca-nhan-htx.dto';
import { CaNhanHtx } from './entities/ca-nhan-htx.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class CaNhanHtxService {
    private CaNhanHtxResposity;
    private administrativeUnitService;
    constructor(CaNhanHtxResposity: Repository<CaNhanHtx>, administrativeUnitService: AdministrativeUnitService);
    create(createCaNhanHtxDto: CreateCaNhanHtxDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<CaNhanHtx>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateCaNhanHtxDto: UpdateCaNhanHtxDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHtx(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
