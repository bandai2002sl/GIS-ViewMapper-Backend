import { BenhCayService } from './benh-cay.service';
import { CreateBenhCayDto } from './dto/create-benh-cay.dto';
import { UpdateBenhCayDto } from './dto/update-benh-cay.dto';
export declare class BenhCayController {
    private readonly benhCayService;
    constructor(benhCayService: BenhCayService);
    create(createBenhCayDto: CreateBenhCayDto): Promise<{
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
    update(id: string, updateBenhCayDto: UpdateBenhCayDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteBenhCay(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
