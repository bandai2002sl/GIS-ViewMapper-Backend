import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { QueryDelete } from './dto/upload.dto';
import { UploadService } from './upload.service';
import { Pagination } from 'src/common/dto/index.dto';
import { resultData } from 'src/common/text.helper';
import { JwtAuthGuard } from '../auth/jwt.strategy';

const optionsFile = {
  storage: diskStorage({
    destination: './upload',
    filename: (req: any, file: any, cb: any) => {
      const [nameFile, fileExtension] = file.originalname.split('.');
      const newName = `${nameFile}_${Date.now()}.${fileExtension}`;
      cb(null, newName);
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif|svg\+xml|json)$/)) {
      cb(null, true);
    } else {
      cb(
        resultData({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Không chấp nhận file ${extname(file.originalname)}`,
        }),
        false,
      );
    }
  },
};

@ApiTags('Upload File')
@ApiConsumes('Upload File')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get('/')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get path files' })
  async getPathFiles(@Query() getListDto: Pagination) {
    return this.uploadService.getPathFiles(getListDto);
  }

  @Delete('/')
  @ApiOperation({ summary: 'Delete file' })
  async delete(@Query() queryDelete: QueryDelete) {
    return this.uploadService.delete(queryDelete);
  }

  @Post('/')
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload file  ' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', optionsFile))
  async upload(@UploadedFile('file') file) {
    try {
      console.log(file);
      return this.uploadService.savePath(`${file.filename}`, 0);
    } catch (err) {
      return resultData({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Đã xảy ra lỗi',
      });
    }
  }

  @Get('/:path')
  @ApiOperation({ summary: 'Get file Api ' })
  async getFile(@Res() res, @Param('path') pathFile: string) {
    return res.sendFile(pathFile, { root: './upload' });
  }

  @Post('upload-file')
@UseInterceptors(FileInterceptor('file'))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
}
}
