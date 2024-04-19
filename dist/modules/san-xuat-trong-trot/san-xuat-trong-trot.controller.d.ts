import { SanXuatTrongTrotService } from './san-xuat-trong-trot.service';
import { CreateSanXuatTrongTrotDto } from './dto/create-san-xuat-trong-trot.dto';
import { UpdateSanXuatTrongTrotDto } from './dto/update-san-xuat-trong-trot.dto';
export declare class SanXuatTrongTrotController {
    private readonly sanXuatTrongTrotService;
    constructor(sanXuatTrongTrotService: SanXuatTrongTrotService);
    create(createSanXuatTrongTrotDto: CreateSanXuatTrongTrotDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateSanXuatTrongTrotDto: UpdateSanXuatTrongTrotDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatTT(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
