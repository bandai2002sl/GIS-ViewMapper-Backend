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
exports.KyBaoCaoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ky_bao_cao_entity_1 = require("./entities/ky-bao-cao.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let KyBaoCaoService = class KyBaoCaoService {
    constructor(KyBaoCaoResposity) {
        this.KyBaoCaoResposity = KyBaoCaoResposity;
    }
    async create(createKyBaoCaoDto) {
        try {
            let arrInput = ['tenBaoCao', 'thoiDiemBatDau', 'thoiDiemKetThuc', 'trangThai'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createKyBaoCaoDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createNewKyBc = await this.KyBaoCaoResposity.save(createKyBaoCaoDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createNewKyBc
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAll() {
        try {
            let kyBaoCaoAll = await this.KyBaoCaoResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: kyBaoCaoAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.KyBaoCaoResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let kyBaoCaoOne = await this.findOne(id);
            if (!kyBaoCaoOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy kỳ báo cáo",
                    data: kyBaoCaoOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: kyBaoCaoOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async editKyBaoCao(id, updateKyBaoCaoDto) {
        try {
            let kyBaoCao = await this.findOne(id);
            if (!kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Kỳ báo cáo không tồn tại",
                    data: kyBaoCao
                });
            }
            else {
                let arrInput = ['tenBaoCao', 'thoiDiemBatDau', 'thoiDiemKetThuc', 'trangThai'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateKyBaoCaoDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                await this.KyBaoCaoResposity.update(id, updateKyBaoCaoDto);
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
    async deleteKyBaoCao(id) {
        try {
            let kyBaoCao = await this.findOne(id);
            if (!kyBaoCao) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Kỳ báo cáo không tồn tại",
                    data: kyBaoCao
                });
            }
            else {
                await this.KyBaoCaoResposity.delete(id);
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Xóa thành công",
                });
            }
        }
        catch (e) {
            if (e.errno === 1451) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Bạn không thể xóa vì có ràng buộc khóa ngoại. Hãy xóa dữ liệu có liên kết",
                });
            }
            console.log(e);
        }
    }
};
KyBaoCaoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ky_bao_cao_entity_1.KyBaoCao)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], KyBaoCaoService);
exports.KyBaoCaoService = KyBaoCaoService;
//# sourceMappingURL=ky-bao-cao.service.js.map