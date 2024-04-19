import { VungChanNuoiAnToanService } from './vung-chan-nuoi-an-toan.service';
import { CreateVungChanNuoiAnToanDto } from './dto/create-vung-chan-nuoi-an-toan.dto';
import { UpdateVungChanNuoiAnToanDto } from './dto/update-vung-chan-nuoi-an-toan.dto';
export declare class VungChanNuoiAnToanController {
    private readonly vungChanNuoiAnToanService;
    constructor(vungChanNuoiAnToanService: VungChanNuoiAnToanService);
    create(createVungChanNuoiAnToanDto: CreateVungChanNuoiAnToanDto): Promise<{
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
    update(id: string, updateVungChanNuoiAnToanDto: UpdateVungChanNuoiAnToanDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVungAnToan(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
