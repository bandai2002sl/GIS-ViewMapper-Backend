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
exports.HinhThucChanNuoiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hinh_thuc_chan_nuoi_entity_1 = require("./entities/hinh-thuc-chan-nuoi.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let HinhThucChanNuoiService = class HinhThucChanNuoiService {
    constructor(HinhThucChanNuoiResposity) {
        this.HinhThucChanNuoiResposity = HinhThucChanNuoiResposity;
    }
    async create(createHinhThucChanNuoiDto) {
        try {
            let arrInput = ['tenHinhThuc', 'tamNgung'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createHinhThucChanNuoiDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createNewHinhThucCN = await this.HinhThucChanNuoiResposity.save(createHinhThucChanNuoiDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createNewHinhThucCN
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let hinhThucAll = await this.HinhThucChanNuoiResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: hinhThucAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.HinhThucChanNuoiResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let hinhThucOne = await this.findOne(id);
            if (!hinhThucOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy",
                    data: hinhThucOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: hinhThucOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateHinhThucChanNuoiDto) {
        try {
            let hinhThucOne = await this.findOne(id);
            if (!hinhThucOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: hinhThucOne
                });
            }
            else {
                let arrInput = ['tenHinhThuc', 'tamNgung'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateHinhThucChanNuoiDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.HinhThucChanNuoiResposity.update(id, updateHinhThucChanNuoiDto);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Sửa thành công",
                    data: await this.findOne(id)
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteHinhThucCN(id) {
        try {
            let hinhThucOne = await this.findOne(id);
            if (!hinhThucOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: hinhThucOne
                });
            }
            else {
                await this.HinhThucChanNuoiResposity.delete(id);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Xóa thành công",
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
HinhThucChanNuoiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hinh_thuc_chan_nuoi_entity_1.HinhThucChanNuoi)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HinhThucChanNuoiService);
exports.HinhThucChanNuoiService = HinhThucChanNuoiService;
//# sourceMappingURL=hinh-thuc-chan-nuoi.service.js.map