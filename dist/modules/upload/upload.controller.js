"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
const upload_dto_1 = require("./dto/upload.dto");
const upload_service_1 = require("./upload.service");
const index_dto_1 = require("../../common/dto/index.dto");
const text_helper_1 = require("../../common/text.helper");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const optionsFile = {
    storage: (0, multer_1.diskStorage)({
        destination: './upload',
        filename: (req, file, cb) => {
            const [nameFile, fileExtension] = file.originalname.split('.');
            const newName = `${nameFile}_${Date.now()}.${fileExtension}`;
            cb(null, newName);
        },
    }),
    fileFilter: (req, file, cb) => {
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif|svg\+xml|json)$/)) {
            cb(null, true);
        }
        else {
            cb((0, text_helper_1.resultData)({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: `Không chấp nhận file ${(0, path_1.extname)(file.originalname)}`,
            }), false);
        }
    },
};
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async getPathFiles(getListDto) {
        return this.uploadService.getPathFiles(getListDto);
    }
    async delete(queryDelete) {
        return this.uploadService.delete(queryDelete);
    }
    async upload(file) {
        try {
            console.log(file);
            return this.uploadService.savePath(`${file.filename}`, 0);
        }
        catch (err) {
            return (0, text_helper_1.resultData)({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Đã xảy ra lỗi',
            });
        }
    }
    async getFile(res, pathFile) {
        return res.sendFile(pathFile, { root: './upload' });
    }
    uploadFile(file) {
        console.log(file);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.UseGuards)(jwt_strategy_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get path files' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [index_dto_1.Pagination]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getPathFiles", null);
__decorate([
    (0, common_1.Delete)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete file' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_dto_1.QueryDelete]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Upload file  ' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', optionsFile)),
    __param(0, (0, common_1.UploadedFile)('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('/:path'),
    (0, swagger_1.ApiOperation)({ summary: 'Get file Api ' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "getFile", null);
__decorate([
    (0, common_1.Post)('upload-file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UploadController.prototype, "uploadFile", null);
UploadController = __decorate([
    (0, swagger_1.ApiTags)('Upload File'),
    (0, swagger_1.ApiConsumes)('Upload File'),
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
exports.UploadController = UploadController;
//# sourceMappingURL=upload.controller.js.map