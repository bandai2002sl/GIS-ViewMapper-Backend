import { HinhThucChanNuoiService } from './hinh-thuc-chan-nuoi.service';
import { CreateHinhThucChanNuoiDto } from './dto/create-hinh-thuc-chan-nuoi.dto';
import { UpdateHinhThucChanNuoiDto } from './dto/update-hinh-thuc-chan-nuoi.dto';
export declare class HinhThucChanNuoiController {
    private readonly hinhThucChanNuoiService;
    constructor(hinhThucChanNuoiService: HinhThucChanNuoiService);
    create(createHinhThucChanNuoiDto: CreateHinhThucChanNuoiDto): Promise<{
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
    update(id: string, updateHinhThucChanNuoiDto: UpdateHinhThucChanNuoiDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteHinhThucCN(id: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
