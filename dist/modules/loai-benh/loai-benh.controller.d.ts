import { LoaiBenhService } from './loai-benh.service';
import { CreateLoaiBenhDto } from './dto/create-loai-benh.dto';
import { UpdateLoaiBenhDto } from './dto/update-loai-benh.dto';
export declare class LoaiBenhController {
    private readonly loaiBenhService;
    constructor(loaiBenhService: LoaiBenhService);
    create(createLoaiBenhDto: CreateLoaiBenhDto): Promise<{
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
    editLoaiBenh(id: string, updateLoaiBenhDto: UpdateLoaiBenhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLoaiBenh(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
