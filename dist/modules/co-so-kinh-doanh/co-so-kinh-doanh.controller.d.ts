import { CoSoKinhDoanhService } from './co-so-kinh-doanh.service';
import { CreateCoSoKinhDoanhDto } from './dto/create-co-so-kinh-doanh.dto';
import { UpdateCoSoKinhDoanhDto } from './dto/update-co-so-kinh-doanh.dto';
export declare class CoSoKinhDoanhController {
    private readonly coSoKinhDoanhService;
    constructor(coSoKinhDoanhService: CoSoKinhDoanhService);
    create(createCoSoKinhDoanhDto: CreateCoSoKinhDoanhDto): Promise<{
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
    update(id: string, updateCoSoKinhDoanhDto: UpdateCoSoKinhDoanhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCoSoKD(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
