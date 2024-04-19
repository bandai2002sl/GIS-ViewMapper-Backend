/// <reference types="multer" />
import { QueryDelete } from './dto/upload.dto';
import { UploadService } from './upload.service';
import { Pagination } from 'src/common/dto/index.dto';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    getPathFiles(getListDto: Pagination): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    delete(queryDelete: QueryDelete): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    upload(file: any): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    getFile(res: any, pathFile: string): Promise<any>;
    uploadFile(file: Express.Multer.File): void;
}
