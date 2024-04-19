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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThuySanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const thuy_san_entity_1 = require("./entities/thuy-san.entity");
const typeorm_2 = require("typeorm");
const text_helper_1 = require("../../common/text.helper");
let ThuySanService = class ThuySanService {
    constructor(ThuySanResposity) {
        this.ThuySanResposity = ThuySanResposity;
    }
    async create(createThuySanDto) {
        try {
            let arrInput = ['name', 'moTa', 'image', 'tamNgung', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createThuySanDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            let createThuySan = await this.ThuySanResposity.save(createThuySanDto);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createThuySan
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            let tsAll = await this.ThuySanResposity.find();
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thành công",
                data: tsAll
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        return this.ThuySanResposity.findOne({ where: { id: id } });
    }
    async getOne(id) {
        try {
            let ThuySanOne = await this.findOne(id);
            if (!ThuySanOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy",
                    data: null,
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "tìm thành công",
                    data: ThuySanOne,
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateThuySanDto) {
        try {
            let ThuySanOne = await this.findOne(id);
            if (!ThuySanOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: ThuySanOne
                });
            }
            else {
                let Info = __rest(updateThuySanDto, []);
                await this.ThuySanResposity.update(id, Object.assign({}, Info));
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
    async deleteThuySan(id) {
        try {
            let ThuySanOne = await this.findOne(id);
            if (!ThuySanOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: ThuySanOne
                });
            }
            else {
                await this.ThuySanResposity.delete(id);
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
ThuySanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(thuy_san_entity_1.ThuySan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ThuySanService);
exports.ThuySanService = ThuySanService;
//# sourceMappingURL=thuy-san.service.js.map