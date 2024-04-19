import { CreateKyBaoCaoDto } from './dto/create-ky-bao-cao.dto';
import { UpdateKyBaoCaoDto } from './dto/update-ky-bao-cao.dto';
import { KyBaoCao } from './entities/ky-bao-cao.entity';
import { Repository } from 'typeorm';
export declare class KyBaoCaoService {
    private KyBaoCaoResposity;
    constructor(KyBaoCaoResposity: Repository<KyBaoCao>);
    create(createKyBaoCaoDto: CreateKyBaoCaoDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<KyBaoCao>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    editKyBaoCao(id: number, updateKyBaoCaoDto: UpdateKyBaoCaoDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteKyBaoCao(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
