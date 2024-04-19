import { CongService } from './cong.service';
import { CreateCongDto } from './dto/create-cong.dto';
import { UpdateCongDto } from './dto/update-cong.dto';
export declare class CongController {
    private readonly congService;
    constructor(congService: CongService);
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
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateCongDto: UpdateCongDto): Promise<{
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
