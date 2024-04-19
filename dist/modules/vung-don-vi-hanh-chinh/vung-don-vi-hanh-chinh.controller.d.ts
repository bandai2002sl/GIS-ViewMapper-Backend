import { VungDonViHanhChinhService } from './vung-don-vi-hanh-chinh.service';
import { CreateVungDonViHanhChinhDto } from './dto/create-vung-don-vi-hanh-chinh.dto';
import { UpdateVungDonViHanhChinhDto } from './dto/update-vung-don-vi-hanh-chinh.dto';
export declare class VungDonViHanhChinhController {
    private readonly vungDonViHanhChinhService;
    constructor(vungDonViHanhChinhService: VungDonViHanhChinhService);
    create(createVungDonViHanhChinhDto: CreateVungDonViHanhChinhDto): Promise<{
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
    update(id: string, updateVungDonViHanhChinhDto: UpdateVungDonViHanhChinhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVungHC(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
