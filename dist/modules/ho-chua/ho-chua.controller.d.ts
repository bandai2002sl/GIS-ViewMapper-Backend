import { HoChuaService } from './ho-chua.service';
import { CreateHoChuaDto } from './dto/create-ho-chua.dto';
import { UpdateHoChuaDto } from './dto/update-ho-chua.dto';
export declare class HoChuaController {
    private readonly hoChuaService;
    constructor(hoChuaService: HoChuaService);
    create(createHoChuaDto: CreateHoChuaDto): Promise<{
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
    update(id: string, updateHoChuaDto: UpdateHoChuaDto): Promise<{
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
