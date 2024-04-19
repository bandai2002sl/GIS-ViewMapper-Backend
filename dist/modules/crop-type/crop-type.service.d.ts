import { CreateCropTypeDto } from './dto/create-crop-type.dto';
import { UpdateCropTypeDto } from './dto/update-crop-type.dto';
import { CropType } from './entities/crop-type.entity';
import { Repository } from 'typeorm';
export declare class CropTypeService {
    private CropTyeResposity;
    constructor(CropTyeResposity: Repository<CropType>);
    create(createCropTypeDto: CreateCropTypeDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<CropType>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    editCrop(id: number, updateCropTypeDto: UpdateCropTypeDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteCrop(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
