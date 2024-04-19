import { CreateVungDonViHanhChinhDto } from './dto/create-vung-don-vi-hanh-chinh.dto';
import { UpdateVungDonViHanhChinhDto } from './dto/update-vung-don-vi-hanh-chinh.dto';
import { VungDonViHanhChinh } from './entities/vung-don-vi-hanh-chinh.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
export declare class VungDonViHanhChinhService {
    private VungDonViHanhChinhResposity;
    private administrativeUnitService;
    constructor(VungDonViHanhChinhResposity: Repository<VungDonViHanhChinh>, administrativeUnitService: AdministrativeUnitService);
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
    findOne(id: number): Promise<VungDonViHanhChinh>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    update(id: number, updateVungDonViHanhChinhDto: UpdateVungDonViHanhChinhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteVungHC(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
