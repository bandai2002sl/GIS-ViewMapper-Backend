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
exports.AdministrativeUnitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const administrative_unit_entity_1 = require("./entities/administrative-unit.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let AdministrativeUnitService = class AdministrativeUnitService {
    constructor(AdministrativeUnitResposity) {
        this.AdministrativeUnitResposity = AdministrativeUnitResposity;
    }
    async create(createAdministrativeUnitDto) {
        try {
            let arrInput = ['maHanhChinh', 'ten', 'capHanhChinh', 'tenVietTat', 'toaDo'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createAdministrativeUnitDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!isMaHCValid(createAdministrativeUnitDto.maHanhChinh)) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: `maHanhChinh chỉ chứa chữ cái tiếng Anh và số, không chứa tiếng Việt ký tự đặc biệt hoặc khoảng trắng :`,
                });
            }
            const existingAdmin = await this.AdministrativeUnitResposity.findOne({
                where: {
                    maHanhChinh: createAdministrativeUnitDto.maHanhChinh
                }
            });
            if (existingAdmin) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Mã Hành Chính đã tồn tại trong cơ sở dữ liệu",
                });
            }
            if (createAdministrativeUnitDto.toaDo) {
                const toaDoString = createAdministrativeUnitDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let createAdmin = await this.AdministrativeUnitResposity.save(createAdministrativeUnitDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "Thêm mới thành công",
                data: createAdmin
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async getAll() {
        try {
            let adminAll = await this.AdministrativeUnitResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "Thành công",
                data: adminAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.AdministrativeUnitResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let adminOne = await this.findOne(id);
            if (!adminOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy",
                    data: adminOne,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Tìm thành công",
                    data: adminOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async updateAdmin(id, updateAdministrativeUnitDto) {
        try {
            let adminOne = await this.findOne(id);
            if (!adminOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Hành chính không tồn tại",
                    data: adminOne
                });
            }
            else {
                let arrInput = ['maHanhChinh', 'ten', 'capHanhChinh', 'tenVietTat', 'toaDo'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateAdministrativeUnitDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!isMaHCValid(updateAdministrativeUnitDto.maHanhChinh)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `maHanhChinh chỉ chứa chữ cái tiếng Anh và số, không chứa tiếng Việt, ký tự đặc biệt hoặc khoảng trắng :`,
                    });
                }
                if (updateAdministrativeUnitDto.toaDo) {
                    const toaDoString = updateAdministrativeUnitDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.AdministrativeUnitResposity.update(id, updateAdministrativeUnitDto);
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
    async deleteAdmin(id) {
        try {
            let adminOne = await this.findOne(id);
            if (!adminOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "Hành chính không tồn tại",
                    data: adminOne
                });
            }
            else {
                await this.AdministrativeUnitResposity.delete(id);
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
                    message: "bạn không thể xóa vì có ràng buộc khóa ngoại",
                });
            }
            console.log(e);
        }
    }
};
AdministrativeUnitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrative_unit_entity_1.AdministrativeUnit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministrativeUnitService);
exports.AdministrativeUnitService = AdministrativeUnitService;
function isMaHCValid(maHC) {
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(maHC);
}
//# sourceMappingURL=administrative-unit.service.js.map