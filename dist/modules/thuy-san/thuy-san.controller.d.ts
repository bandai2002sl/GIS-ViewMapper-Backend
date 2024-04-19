import { ThuySanService } from './thuy-san.service';
import { CreateThuySanDto } from './dto/create-thuy-san.dto';
import { UpdateThuySanDto } from './dto/update-thuy-san.dto';
export declare class ThuySanController {
    private readonly thuySanService;
    constructor(thuySanService: ThuySanService);
    create(createThuySanDto: CreateThuySanDto): Promise<{
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
    update(id: string, updateThuySanDto: UpdateThuySanDto): Promise<{
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
