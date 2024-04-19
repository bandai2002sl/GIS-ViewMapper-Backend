import { ConfigModule, ConfigService } from '@nestjs/config';

import { AdministrativeUnitModule } from './modules/administrative-unit/administrative-unit.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BenhCayModule } from './modules/benh-cay/benh-cay.module';
import { BenhVatNuoiModule } from './modules/benh-vat-nuoi/benh-vat-nuoi.module';
import { CaNhanHtxModule } from './modules/ca-nhan-htx/ca-nhan-htx.module';
import { ChuyenDoiSuDungDatModule } from './modules/chuyen-doi-su-dung-dat/chuyen-doi-su-dung-dat.module';
import { CoSoChanNuoiModule } from './modules/co-so-chan-nuoi/co-so-chan-nuoi.module';
import { CoSoCheBienModule } from './modules/co-so-che-bien/co-so-che-bien.module';
import { CoSoKinhDoanhModule } from './modules/co-so-kinh-doanh/co-so-kinh-doanh.module';
import { CongModule } from './modules/cong/cong.module';
import { DienTichTuoiTieuModule } from './modules/dien-tich-tuoi-tieu/dien-tich-tuoi-tieu.module';
import { DuongDonViHanhChinhModule } from './modules/duong-don-vi-hanh-chinh/duong-don-vi-hanh-chinh.module';
import { HanHanModule } from './modules/han-han/han-han.module';
import { HinhThucChanNuoiModule } from './modules/hinh-thuc-chan-nuoi/hinh-thuc-chan-nuoi.module';
import { HinhThucChuyenDoiDatModule } from './modules/hinh-thuc-chuyen-doi-dat/hinh-thuc-chuyen-doi-dat.module';
import { HoChuaModule } from './modules/ho-chua/ho-chua.module';
import { KenhMuongModule } from './modules/kenh-muong/kenh-muong.module';
import { LienKetModule } from './modules/lien-ket/lien-ket.module';
import { LoaiBenhModule } from './modules/loai-benh/loai-benh.module';
import { LoaiKinhDoanhModule } from './modules/loai-kinh-doanh/loai-kinh-doanh.module';
import { MoHinhCongNgheCaoModule } from './modules/mo-hinh-cong-nghe-cao/mo-hinh-cong-nghe-cao.module';
import { Module } from '@nestjs/common';
import { SanXuatTrongTrotModule } from './modules/san-xuat-trong-trot/san-xuat-trong-trot.module';
import { SanXuatVatNuoiModule } from './modules/san-xuat-vat-nuoi/san-xuat-vat-nuoi.module';
import { SharedModule } from './shared/shared.module';
import { TauCaModule } from './modules/tau-ca/tau-ca.module';
import { AuthModule } from './modules/authentication/authentication.module';
import { TramBomModule } from './modules/tram-bom/tram-bom.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadModule } from './modules/upload/upload.module';
import { VatNuoiModule } from './modules/vat-nuoi/vat-nuoi.module';
import { VungChanNuoiAnToanModule } from './modules/vung-chan-nuoi-an-toan/vung-chan-nuoi-an-toan.module';
import { VungDonViHanhChinhModule } from './modules/vung-don-vi-hanh-chinh/vung-don-vi-hanh-chinh.module';
import { KyBaoCaoModule } from './modules/ky-bao-cao/ky-bao-cao.module';
import { ThuySanModule } from './modules/thuy-san/thuy-san.module';
import { SanXuatThuySanModule } from './modules/san-xuat-thuy-san/san-xuat-thuy-san.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'upload'),
    }),
    SharedModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('MYSQL_HOST'),
        port: config.get<number>('MYSQL_PORT'),
        database: config.get<string>('MYSQL_DATABASE'),
        username: config.get<string>('MYSQL_USERNAME'),
        password: config.get<string>('MYSQL_PASSWORD'),
        migrationsRun: true,
        // synchronize: process.env.NODE != 'production',
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
    AdministrativeUnitModule,
    SanXuatTrongTrotModule,
    CaNhanHtxModule,
    LoaiKinhDoanhModule,
    CoSoKinhDoanhModule,
    MoHinhCongNgheCaoModule,
    LienKetModule,
    BenhCayModule,
    HinhThucChuyenDoiDatModule,
    ChuyenDoiSuDungDatModule,
    HanHanModule,
    CoSoCheBienModule,
    VatNuoiModule,
    SanXuatVatNuoiModule,
    HinhThucChanNuoiModule,
    CoSoChanNuoiModule,
    VungChanNuoiAnToanModule,
    BenhVatNuoiModule,
    LoaiBenhModule,
    VungDonViHanhChinhModule,
    DuongDonViHanhChinhModule,
    CongModule,
    HoChuaModule,
    TramBomModule,
    KenhMuongModule,
    TauCaModule,
    DienTichTuoiTieuModule,
    AuthModule,
    UploadModule,
    KyBaoCaoModule,
    ThuySanModule,
    SanXuatThuySanModule,
    ReportModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
