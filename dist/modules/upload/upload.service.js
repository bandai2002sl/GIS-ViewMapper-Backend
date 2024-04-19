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
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const upload_entity_1 = require("./entities/upload.entity");
const text_helper_1 = require("../../common/text.helper");
const gateway_gateway_1 = require("../gateway/gateway.gateway");
let UploadService = class UploadService {
    constructor(uploadRepository, socket) {
        this.uploadRepository = uploadRepository;
        this.socket = socket;
    }
    async getPathFiles(getListDto) {
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
        return (0, text_helper_1.resultData)({
            data: (0, text_helper_1.createPagination)(result[0], result[1], getListDto.page, getListDto.pageSize),
        });
    }
    async savePath(filename, type) {
        try {
            const path = await this.uploadRepository.create({
                typeFile: type,
                path: filename,
            });
            await this.uploadRepository.save(path);
            return (0, text_helper_1.resultData)({ data: { filename } });
        }
        catch (err) {
            return (0, text_helper_1.resultData)({ statusCode: 500 });
        }
    }
    async delete(queryDelete) {
        try {
            const infoFile = await this.uploadRepository.findOne({
                where: { id: queryDelete.id },
            });
            if (!!infoFile) {
                await (0, text_helper_1.deleteFile)(infoFile.path);
                await this.uploadRepository.delete(queryDelete.id);
                return (0, text_helper_1.resultData)({
                    data: {
                        queryDelete,
                    },
                    message: 'Đã xóa ảnh',
                });
            }
            return (0, text_helper_1.resultData)({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
            });
        }
        catch (err) {
            return (0, text_helper_1.resultData)({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
            });
        }
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(upload_entity_1.UploadEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        gateway_gateway_1.GatewayGateway])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map