import { CoSoChanNuoiService } from './co-so-chan-nuoi.service';
import { CreateCoSoChanNuoiDto } from './dto/create-co-so-chan-nuoi.dto';
import { UpdateCoSoChanNuoiDto } from './dto/update-co-so-chan-nuoi.dto';
export declare class CoSoChanNuoiController {
    private readonly coSoChanNuoiService;
    constructor(coSoChanNuoiService: CoSoChanNuoiService);
    create(createCoSoChanNuoiDto: CreateCoSoChanNuoiDto): Promise<{
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
    update(id: string, updateCoSoChanNuoiDto: UpdateCoSoChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCoSoCN(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
