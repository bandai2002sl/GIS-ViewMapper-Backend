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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.getFLWeek = exports.resultData = exports.ResPaginationHisBet = exports.ResPaginationListBet = exports.ResPagination = exports.ResPaginationDto = exports.createPagination = exports.radomNumber = exports.radomText = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const { promisify } = require('util');
const fs = require('fs');
function radomText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.radomText = radomText;
function radomNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.radomNumber = radomNumber;
function createPagination(data, total, page, pageSize) {
    return {
        total: total,
        records: data,
        currentPage: page,
        pageSize: pageSize,
    };
}
exports.createPagination = createPagination;
class ResPaginationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ' ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResPaginationDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ' ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResPaginationDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationDto.prototype, "page", void 0);
exports.ResPaginationDto = ResPaginationDto;
class ResPagination {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ' ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResPagination.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPagination.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPagination.prototype, "page", void 0);
exports.ResPagination = ResPagination;
class ResPaginationListBet {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ' ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResPaginationListBet.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationListBet.prototype, "idGame", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationListBet.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationListBet.prototype, "page", void 0);
exports.ResPaginationListBet = ResPaginationListBet;
class ResPaginationHisBet {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: ' ' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ResPaginationHisBet.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationHisBet.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResPaginationHisBet.prototype, "page", void 0);
exports.ResPaginationHisBet = ResPaginationHisBet;
function resultData({ statusCode = common_1.HttpStatus.OK, message = '', data = null, }) {
    return {
        statusCode,
        message,
        data,
    };
}
exports.resultData = resultData;
function getFLWeek() {
    const today = new Date();
    today.setHours(0);
    today.setUTCMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    function getFirstDayOfWeek(d) {
        const date = new Date(d);
        const day = date.getDay();
        const diff = date.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
    const firstDay = getFirstDayOfWeek(today);
    const lastDay = new Date(firstDay);
    lastDay.setDate(lastDay.getDate() + 7);
    return {
        firstDay: {
            date: firstDay,
            string: firstDay.toLocaleDateString('en-GB'),
        },
        lastDay: {
            date: lastDay,
            string: lastDay.toLocaleDateString('en-GB'),
        },
    };
}
exports.getFLWeek = getFLWeek;
const deleteFile = async (file) => {
    try {
        const unlickSync = promisify(fs.unlink);
        await unlickSync(`./upload${file}`);
    }
    catch (err) {
        console.log(err);
    }
};
exports.deleteFile = deleteFile;
//# sourceMappingURL=text.helper.js.map