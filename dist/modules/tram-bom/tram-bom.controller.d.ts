import { TramBomService } from './tram-bom.service';
import { CreateTramBomDto } from './dto/create-tram-bom.dto';
import { UpdateTramBomDto } from './dto/update-tram-bom.dto';
export declare class TramBomController {
    private readonly tramBomService;
    constructor(tramBomService: TramBomService);
    create(createTramBomDto: CreateTramBomDto): Promise<{
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
    update(id: string, updateTramBomDto: UpdateTramBomDto): Promise<{
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
