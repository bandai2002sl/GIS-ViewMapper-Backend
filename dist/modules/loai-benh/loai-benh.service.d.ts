import { CreateLoaiBenhDto } from './dto/create-loai-benh.dto';
import { UpdateLoaiBenhDto } from './dto/update-loai-benh.dto';
import { Repository } from 'typeorm';
import { LoaiBenh } from './entities/loai-benh.entity';
export declare class LoaiBenhService {
    private LoaiBenhResposity;
    constructor(LoaiBenhResposity: Repository<LoaiBenh>);
    create(createLoaiBenhDto: CreateLoaiBenhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findAll(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    findOne(id: number): Promise<LoaiBenh>;
    getOne(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    editLoaiBenh(id: number, updateLoaiBenhDto: UpdateLoaiBenhDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deleteLoaiBenh(id: number): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
