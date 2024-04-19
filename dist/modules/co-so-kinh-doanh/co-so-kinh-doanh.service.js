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
exports.CoSoKinhDoanhService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const co_so_kinh_doanh_entity_1 = require("./entities/co-so-kinh-doanh.entity");
const typeorm_2 = require("typeorm");
const ca_nhan_htx_service_1 = require("../ca-nhan-htx/ca-nhan-htx.service");
const loai_kinh_doanh_service_1 = require("../loai-kinh-doanh/loai-kinh-doanh.service");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
const text_helper_1 = require("../../common/text.helper");
let CoSoKinhDoanhService = class CoSoKinhDoanhService {
    constructor(CoSoKinhDoanhResposity, caNhanHtxService, loaiKinhDoanhService, administrativeUnitService) {
        this.CoSoKinhDoanhResposity = CoSoKinhDoanhResposity;
        this.caNhanHtxService = caNhanHtxService;
        this.loaiKinhDoanhService = loaiKinhDoanhService;
        this.administrativeUnitService = administrativeUnitService;
    }
    async create(createCoSoKinhDoanhDto) {
        try {
            let { caNhanHtxId, loaiKinhDoanhId, administrativeUnitId } = createCoSoKinhDoanhDto, Info = __rest(createCoSoKinhDoanhDto, ["caNhanHtxId", "loaiKinhDoanhId", "administrativeUnitId"]);
            let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
            let loaiKinhDoanh = await this.loaiKinhDoanhService.findOne(loaiKinhDoanhId);
            let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
            let arrInput = ['diaDiem', 'hinhAnh', 'dangKyKinhDoanh', 'sdt', 'trangThai', 'caNhanHtxId', 'loaiKinhDoanhId', 'administrativeUnitId', 'toaDo', 'icon'];
            for (let i = 0; i < arrInput.length; i++) {
                if (!createCoSoKinhDoanhDto[arrInput[i]]) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: `Bạn chưa nhập trường :` + arrInput[i],
                    });
                }
            }
            if (!caNhanHtx || !administrativeUnit || !loaiKinhDoanh) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId loaiKinhDoanhId donvihanhchinhId",
                    data: null
                });
            }
            if (createCoSoKinhDoanhDto.toaDo) {
                const toaDoString = createCoSoKinhDoanhDto.toaDo;
                const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                if (!regex.test(toaDoString)) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                    });
                }
            }
            let newData = this.CoSoKinhDoanhResposity.create(Object.assign({ caNhanHtx, loaiKinhDoanh, administrativeUnit }, Info));
            let createCSKD = await this.CoSoKinhDoanhResposity.save(newData);
            return (0, text_helper_1.resultData)({
                statusCode: 200,
                message: "thêm mới thành công",
                data: createCSKD
            });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        return (0, text_helper_1.resultData)({
            statusCode: 200,
            message: "thành công",
            data: await this.CoSoKinhDoanhResposity.find({ relations: ['caNhanHtx', 'loaiKinhDoanh', 'administrativeUnit'] })
        });
    }
    async findOne(id) {
        return await this.CoSoKinhDoanhResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'loaiKinhDoanh', 'administrativeUnit'] });
    }
    async getOne(id) {
        try {
            let coSoKNOne = await this.findOne(id);
            if (!coSoKNOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tồn tại",
                    data: null
                });
            }
            else {
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: "Tìm thành công",
                    data: coSoKNOne
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, updateCoSoKinhDoanhDto) {
        try {
            let coSoKNOne = await this.findOne(id);
            if (!coSoKNOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
                    data: null
                });
            }
            else {
                let { caNhanHtxId, loaiKinhDoanhId, administrativeUnitId } = updateCoSoKinhDoanhDto, Info = __rest(updateCoSoKinhDoanhDto, ["caNhanHtxId", "loaiKinhDoanhId", "administrativeUnitId"]);
                let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
                let loaiKinhDoanh = await this.loaiKinhDoanhService.findOne(loaiKinhDoanhId);
                let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
                let arrInput = ['diaDiem', 'hinhAnh', 'dangKyKinhDoanh', 'sdt', 'trangThai', 'caNhanHtxId', 'loaiKinhDoanhId', 'administrativeUnitId', 'toaDo', 'icon'];
                for (let i = 0; i < arrInput.length; i++) {
                    if (!updateCoSoKinhDoanhDto[arrInput[i]]) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: `Bạn chưa nhập trường :` + arrInput[i],
                        });
                    }
                }
                if (!caNhanHtx || !administrativeUnit || !loaiKinhDoanh) {
                    return (0, text_helper_1.resultData)({
                        statusCode: 400,
                        message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId loaiKinhDoanhId donvihanhchinhId",
                        data: null
                    });
                }
                if (updateCoSoKinhDoanhDto.toaDo) {
                    const toaDoString = updateCoSoKinhDoanhDto.toaDo;
                    const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
                    if (!regex.test(toaDoString)) {
                        return (0, text_helper_1.resultData)({
                            statusCode: 400,
                            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
                        });
                    }
                }
                await this.CoSoKinhDoanhResposity.update(id, Object.assign({ caNhanHtx, loaiKinhDoanh, administrativeUnit }, Info));
                return (0, text_helper_1.resultData)({
                    statusCode: 200,
                    message: 'Sửa Thành công',
                    data: await this.findOne(id)
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteCoSoKD(id) {
        try {
            let coSoKNOne = await this.findOne(id);
            if (!coSoKNOne) {
                return (0, text_helper_1.resultData)({
                    statusCode: 400,
                    message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
                    data: coSoKNOne
                });
            }
            else {
                await this.CoSoKinhDoanhResposity.delete(id);
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
CoSoKinhDoanhService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(co_so_kinh_doanh_entity_1.CoSoKinhDoanh)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        ca_nhan_htx_service_1.CaNhanHtxService,
        loai_kinh_doanh_service_1.LoaiKinhDoanhService,
        administrative_unit_service_1.AdministrativeUnitService])
], CoSoKinhDoanhService);
exports.CoSoKinhDoanhService = CoSoKinhDoanhService;
//# sourceMappingURL=co-so-kinh-doanh.service.js.map