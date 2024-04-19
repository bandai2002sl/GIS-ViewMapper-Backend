import { DuongDonViHanhChinhService } from './duong-don-vi-hanh-chinh.service';
import { CreateDuongDonViHanhChinhDto } from './dto/create-duong-don-vi-hanh-chinh.dto';
import { UpdateDuongDonViHanhChinhDto } from './dto/update-duong-don-vi-hanh-chinh.dto';
export declare class DuongDonViHanhChinhController {
    private readonly duongDonViHanhChinhService;
    constructor(duongDonViHanhChinhService: DuongDonViHanhChinhService);
    create(createDuongDonViHanhChinhDto: CreateDuongDonViHanhChinhDto): Promise<{
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
    update(id: string, updateDuongDonViHanhChinhDto: UpdateDuongDonViHanhChinhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteDuongHC(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
