import { KenhMuongService } from './kenh-muong.service';
import { CreateKenhMuongDto } from './dto/create-kenh-muong.dto';
import { UpdateKenhMuongDto } from './dto/update-kenh-muong.dto';
export declare class KenhMuongController {
    private readonly kenhMuongService;
    constructor(kenhMuongService: KenhMuongService);
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
    findOne(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: string, updateKenhMuongDto: UpdateKenhMuongDto): Promise<{
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
