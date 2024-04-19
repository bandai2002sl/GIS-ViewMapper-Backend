import { CaNhanHtxService } from './ca-nhan-htx.service';
import { CreateCaNhanHtxDto } from './dto/create-ca-nhan-htx.dto';
import { UpdateCaNhanHtxDto } from './dto/update-ca-nhan-htx.dto';
export declare class CaNhanHtxController {
    private readonly caNhanHtxService;
    constructor(caNhanHtxService: CaNhanHtxService);
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
    getOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateCaNhanHtxDto: UpdateCaNhanHtxDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
