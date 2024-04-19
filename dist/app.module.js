"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const administrative_unit_module_1 = require("./modules/administrative-unit/administrative-unit.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const benh_cay_module_1 = require("./modules/benh-cay/benh-cay.module");
const benh_vat_nuoi_module_1 = require("./modules/benh-vat-nuoi/benh-vat-nuoi.module");
const ca_nhan_htx_module_1 = require("./modules/ca-nhan-htx/ca-nhan-htx.module");
const chuyen_doi_su_dung_dat_module_1 = require("./modules/chuyen-doi-su-dung-dat/chuyen-doi-su-dung-dat.module");
const co_so_chan_nuoi_module_1 = require("./modules/co-so-chan-nuoi/co-so-chan-nuoi.module");
const co_so_che_bien_module_1 = require("./modules/co-so-che-bien/co-so-che-bien.module");
const co_so_kinh_doanh_module_1 = require("./modules/co-so-kinh-doanh/co-so-kinh-doanh.module");
const cong_module_1 = require("./modules/cong/cong.module");
const dien_tich_tuoi_tieu_module_1 = require("./modules/dien-tich-tuoi-tieu/dien-tich-tuoi-tieu.module");
const duong_don_vi_hanh_chinh_module_1 = require("./modules/duong-don-vi-hanh-chinh/duong-don-vi-hanh-chinh.module");
const han_han_module_1 = require("./modules/han-han/han-han.module");
const hinh_thuc_chan_nuoi_module_1 = require("./modules/hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.module");
const hinh_thuc_chuyen_doi_dat_module_1 = require("./modules/hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.module");
const ho_chua_module_1 = require("./modules/ho-chua/ho-chua.module");
const kenh_muong_module_1 = require("./modules/kenh-muong/kenh-muong.module");
const lien_ket_module_1 = require("./modules/lien-ket/lien-ket.module");
const loai_benh_module_1 = require("./modules/loai-benh/loai-benh.module");
const loai_kinh_doanh_module_1 = require("./modules/loai-kinh-doanh/loai-kinh-doanh.module");
const mo_hinh_cong_nghe_cao_module_1 = require("./modules/mo-hinh-cong-nghe-cao/mo-hinh-cong-nghe-cao.module");
const common_1 = require("@nestjs/common");
const san_xuat_trong_trot_module_1 = require("./modules/san-xuat-trong-trot/san-xuat-trong-trot.module");
const san_xuat_vat_nuoi_module_1 = require("./modules/san-xuat-vat-nuoi/san-xuat-vat-nuoi.module");
const shared_module_1 = require("./shared/shared.module");
const tau_ca_module_1 = require("./modules/tau-ca/tau-ca.module");
const authentication_module_1 = require("./modules/authentication/authentication.module");
const tram_bom_module_1 = require("./modules/tram-bom/tram-bom.module");
const typeorm_1 = require("@nestjs/typeorm");
const upload_module_1 = require("./modules/upload/upload.module");
const vat_nuoi_module_1 = require("./modules/vat-nuoi/vat-nuoi.module");
const vung_chan_nuoi_an_toan_module_1 = require("./modules/vung-chan-nuoi-an-toan/vung-chan-nuoi-an-toan.module");
const vung_don_vi_hanh_chinh_module_1 = require("./modules/vung-don-vi-hanh-chinh/vung-don-vi-hanh-chinh.module");
const ky_bao_cao_module_1 = require("./modules/ky-bao-cao/ky-bao-cao.module");
const thuy_san_module_1 = require("./modules/thuy-san/thuy-san.module");
const san_xuat_thuy_san_module_1 = require("./modules/san-xuat-thuy-san/san-xuat-thuy-san.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const report_module_1 = require("./modules/report/report.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'upload'),
            }),
            shared_module_1.SharedModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    type: 'mysql',
                    host: config.get('MYSQL_HOST'),
                    port: config.get('MYSQL_PORT'),
                    database: config.get('MYSQL_DATABASE'),
                    username: config.get('MYSQL_USERNAME'),
                    password: config.get('MYSQL_PASSWORD'),
                    migrationsRun: true,
                    synchronize: false,
                    autoLoadEntities: true,
                    entities: ['dist/**/*.entity.{ts,js}'],
                    migrationsTableName: 'migration',
                    migrations: ['src/migration/*.ts'],
                    retryAttempts: 5,
                    timezone: '+07:00',
                    charset: 'utf8mb4_unicode_ci',
                    legacySpatialSupport: false,
                }),
            }),
            administrative_unit_module_1.AdministrativeUnitModule,
            san_xuat_trong_trot_module_1.SanXuatTrongTrotModule,
            ca_nhan_htx_module_1.CaNhanHtxModule,
            loai_kinh_doanh_module_1.LoaiKinhDoanhModule,
            co_so_kinh_doanh_module_1.CoSoKinhDoanhModule,
            mo_hinh_cong_nghe_cao_module_1.MoHinhCongNgheCaoModule,
            lien_ket_module_1.LienKetModule,
            benh_cay_module_1.BenhCayModule,
            hinh_thuc_chuyen_doi_dat_module_1.HinhThucChuyenDoiDatModule,
            chuyen_doi_su_dung_dat_module_1.ChuyenDoiSuDungDatModule,
            han_han_module_1.HanHanModule,
            co_so_che_bien_module_1.CoSoCheBienModule,
            vat_nuoi_module_1.VatNuoiModule,
            san_xuat_vat_nuoi_module_1.SanXuatVatNuoiModule,
            hinh_thuc_chan_nuoi_module_1.HinhThucChanNuoiModule,
            co_so_chan_nuoi_module_1.CoSoChanNuoiModule,
            vung_chan_nuoi_an_toan_module_1.VungChanNuoiAnToanModule,
            benh_vat_nuoi_module_1.BenhVatNuoiModule,
            loai_benh_module_1.LoaiBenhModule,
            vung_don_vi_hanh_chinh_module_1.VungDonViHanhChinhModule,
            duong_don_vi_hanh_chinh_module_1.DuongDonViHanhChinhModule,
            cong_module_1.CongModule,
            ho_chua_module_1.HoChuaModule,
            tram_bom_module_1.TramBomModule,
            kenh_muong_module_1.KenhMuongModule,
            tau_ca_module_1.TauCaModule,
            dien_tich_tuoi_tieu_module_1.DienTichTuoiTieuModule,
            authentication_module_1.AuthModule,
            upload_module_1.UploadModule,
            ky_bao_cao_module_1.KyBaoCaoModule,
            thuy_san_module_1.ThuySanModule,
            san_xuat_thuy_san_module_1.SanXuatThuySanModule,
            report_module_1.ReportModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map