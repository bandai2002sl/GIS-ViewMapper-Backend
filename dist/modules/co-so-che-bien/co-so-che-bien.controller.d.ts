import { CoSoCheBienService } from './co-so-che-bien.service';
import { CreateCoSoCheBienDto } from './dto/create-co-so-che-bien.dto';
import { UpdateCoSoCheBienDto } from './dto/update-co-so-che-bien.dto';
export declare class CoSoCheBienController {
    private readonly coSoCheBienService;
    constructor(coSoCheBienService: CoSoCheBienService);
    create(createCoSoCheBienDto: CreateCoSoCheBienDto): Promise<{
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
    update(id: string, updateCoSoCheBienDto: UpdateCoSoCheBienDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCheBien(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
