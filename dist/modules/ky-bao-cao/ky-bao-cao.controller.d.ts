import { KyBaoCaoService } from './ky-bao-cao.service';
import { CreateKyBaoCaoDto } from './dto/create-ky-bao-cao.dto';
import { UpdateKyBaoCaoDto } from './dto/update-ky-bao-cao.dto';
export declare class KyBaoCaoController {
    private readonly kyBaoCaoService;
    constructor(kyBaoCaoService: KyBaoCaoService);
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
    findOne(id: string): Promise<import("./entities/ky-bao-cao.entity").KyBaoCao>;
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
