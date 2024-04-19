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
exports.PermissionKey = exports.PageKey = exports.BaseEntityCustom = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
class BaseEntityCustom {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.CreateDateColumn)({ name: 'lastTime' }),
    __metadata("design:type", Date)
], BaseEntityCustom.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, typeorm_1.UpdateDateColumn)({ name: 'createdOn' }),
    __metadata("design:type", Date)
], BaseEntityCustom.prototype, "updatedAt", void 0);
exports.BaseEntityCustom = BaseEntityCustom;
var PageKey;
(function (PageKey) {
    PageKey["Trang_chu"] = "2";
    PageKey["Don_vi_hanh_chinh"] = "2_0";
    PageKey["Vung_don_vi_hanh_chinh"] = "2_1";
    PageKey["Duong_don_vi_hanh_chinh"] = "2_2";
    PageKey["Ky_Bao_Cao"] = "2_3";
    PageKey["Hop_tac_xa"] = "3_0";
    PageKey["Loai_kinh_doanh"] = "3_1";
    PageKey["Co_so_kinh_doanh"] = "3_2";
    PageKey["Loai_benh"] = "3_3";
    PageKey["Cay_trong"] = "3_4";
    PageKey["San_xuat_trong_trot"] = "3_5";
    PageKey["Mo_hinh_cong_nghe_cao"] = "3_6";
    PageKey["Lien_ket"] = "3_7";
    PageKey["Benh_cay"] = "3_8";
    PageKey["Hinh_thuc_chuyen_doi_dat"] = "3_9";
    PageKey["Chuyen_doi_su_dung_dat"] = "3_10";
    PageKey["Han_han"] = "3_11";
    PageKey["Co_so_che_bien"] = "3_12";
    PageKey["Vat_nuoi"] = "4_0";
    PageKey["San_xuat_vat_nuoi"] = "4_1";
    PageKey["Hinh_thuc_chan_nuoi"] = "4_2";
    PageKey["Co_so_chan_nuoi"] = "4_3";
    PageKey["Vung_chan_nuoi_an_toan"] = "4_4";
    PageKey["Benh_vat_nuoi"] = "4_5";
    PageKey["Cong"] = "5_0";
    PageKey["Dien_tich_tuoi_tieu"] = "5_1";
    PageKey["Ho_chua"] = "5_2";
    PageKey["Kenh_muong"] = "5_3";
    PageKey["Tram_bom"] = "5_4";
    PageKey["Thuy_san"] = "6_0";
    PageKey["San_xuat_thuy_san"] = "6_1";
    PageKey["Tau_ca"] = "6_2";
})(PageKey = exports.PageKey || (exports.PageKey = {}));
var PermissionKey;
(function (PermissionKey) {
    PermissionKey[PermissionKey["Them"] = 1] = "Them";
    PermissionKey[PermissionKey["Sua"] = 2] = "Sua";
    PermissionKey[PermissionKey["Xoa"] = 3] = "Xoa";
    PermissionKey[PermissionKey["Xem"] = 4] = "Xem";
})(PermissionKey = exports.PermissionKey || (exports.PermissionKey = {}));
//# sourceMappingURL=shared.js.map