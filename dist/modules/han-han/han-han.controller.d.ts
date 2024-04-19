import { HanHanService } from './han-han.service';
import { CreateHanHanDto } from './dto/create-han-han.dto';
import { UpdateHanHanDto } from './dto/update-han-han.dto';
export declare class HanHanController {
    private readonly hanHanService;
    constructor(hanHanService: HanHanService);
    create(createHanHanDto: CreateHanHanDto): Promise<{
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
    update(id: string, updateHanHanDto: UpdateHanHanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHanHan(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
