import { LienKetService } from './lien-ket.service';
import { CreateLienKetDto } from './dto/create-lien-ket.dto';
import { UpdateLienKetDto } from './dto/update-lien-ket.dto';
export declare class LienKetController {
    private readonly lienKetService;
    constructor(lienKetService: LienKetService);
    create(createLienKetDto: CreateLienKetDto): Promise<{
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
    update(id: string, updateLienKetDto: UpdateLienKetDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLienKet(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
