import { CropTypeService } from './crop-type.service';
import { CreateCropTypeDto } from './dto/create-crop-type.dto';
import { UpdateCropTypeDto } from './dto/update-crop-type.dto';
export declare class CropTypeController {
    private readonly cropTypeService;
    constructor(cropTypeService: CropTypeService);
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
