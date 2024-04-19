import { SanXuatThuySanService } from './san-xuat-thuy-san.service';
import { CreateSanXuatThuySanDto } from './dto/create-san-xuat-thuy-san.dto';
import { UpdateSanXuatThuySanDto } from './dto/update-san-xuat-thuy-san.dto';
export declare class SanXuatThuySanController {
    private readonly sanXuatThuySanService;
    constructor(sanXuatThuySanService: SanXuatThuySanService);
    create(createSanXuatThuySanDto: CreateSanXuatThuySanDto): Promise<{
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
    update(id: string, updateSanXuatThuySanDto: UpdateSanXuatThuySanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteSanXuatVN(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
