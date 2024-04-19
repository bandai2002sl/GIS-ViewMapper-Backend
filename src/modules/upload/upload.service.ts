import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  Req,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { UploadEntity } from './entities/upload.entity';
import { QueryDelete } from './dto/upload.dto';
import { Pagination } from 'src/common/dto/index.dto';
import {
  createPagination,
  deleteFile,
  resultData,
} from 'src/common/text.helper';
import { GatewayGateway } from '../gateway/gateway.gateway';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(UploadEntity)
    private uploadRepository: Repository<UploadEntity>,
    private readonly socket: GatewayGateway,
  ) {}

  async getPathFiles(getListDto: Pagination) {
    this.socket.server.emit('hello', () => {
      return { data: 123 };
    });

    const result = await this.uploadRepository.findAndCount({
      skip: (+getListDto.page - 1) * getListDto.pageSize,
      take: +getListDto.pageSize,
      where: { typeFile: 0 },
      order: {
        createdAt: -1,
      },
    });

    return resultData({
      data: createPagination(
        result[0],
        result[1],
        getListDto.page,
        getListDto.pageSize,
      ),
    });
  }

  async savePath(filename: string, type: number) {
    try {
      const path = await this.uploadRepository.create({
        typeFile: type,
        path: filename,
      });
      await this.uploadRepository.save(path);
      return resultData({ data: { filename } });
    } catch (err) {
      return resultData({ statusCode: 500 });
    }
  }

  async delete(queryDelete: QueryDelete) {
    try {
      const infoFile = await this.uploadRepository.findOne({
        where: { id: queryDelete.id },
      });
      if (!!infoFile) {
        await deleteFile(infoFile.path);
        await this.uploadRepository.delete(queryDelete.id);
        return resultData({
          data: {
            queryDelete,
          },
          message: 'Đã xóa ảnh',
        });
      }

      return resultData({
        statusCode: HttpStatus.BAD_REQUEST,
      });
    } catch (err) {
      return resultData({
        statusCode: HttpStatus.BAD_REQUEST,
      });
    }
  }
}
