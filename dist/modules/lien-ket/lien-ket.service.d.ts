import { CreateLienKetDto } from './dto/create-lien-ket.dto';
import { UpdateLienKetDto } from './dto/update-lien-ket.dto';
import { Repository } from 'typeorm';
import { LienKet } from './entities/lien-ket.entity';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
export declare class LienKetService {
    private LienKetResposity;
    private caNhanHtxService;
    constructor(LienKetResposity: Repository<LienKet>, caNhanHtxService: CaNhanHtxService);
    create(createLienKetDto: CreateLienKetDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<LienKet>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateLienKetDto: UpdateLienKetDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLienKet(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
