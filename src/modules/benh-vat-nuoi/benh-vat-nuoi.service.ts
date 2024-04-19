import { Injectable } from '@nestjs/common';
import { CreateBenhVatNuoiDto } from './dto/create-benh-vat-nuoi.dto';
import { UpdateBenhVatNuoiDto } from './dto/update-benh-vat-nuoi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BenhVatNuoi } from './entities/benh-vat-nuoi.entity';
import { Repository } from 'typeorm';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class BenhVatNuoiService {
  constructor(
    @InjectRepository(BenhVatNuoi)
    private BenhVatNuoiResposity: Repository<BenhVatNuoi>,
    private vatNuoiService: VatNuoiService,
    private loaiBenhService: LoaiBenhService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createBenhVatNuoiDto: CreateBenhVatNuoiDto) {
    try {
      let { vatNuoiId, loaiBenhId, administrativeUnitId, kyBaoCaoId, ...Info } = createBenhVatNuoiDto;
      let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
      let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['diaChi', 'nguyenNhan', 'dienTich', 'ngayGhiNhan', 'vatNuoiId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createBenhVatNuoiDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!vatNuoi || !administrativeUnit || !loaiBenh || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại vatNuoiId loaiBenhId donvihanhchinhId kyBaoCaoId",
          data: null
        })
      } if (createBenhVatNuoiDto.toaDo) {
        const toaDoString = createBenhVatNuoiDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.BenhVatNuoiResposity.create({ vatNuoi, loaiBenh, administrativeUnit, kyBaoCao, ...Info });
      let createBenhVatNuoi = await this.BenhVatNuoiResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createBenhVatNuoi
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.BenhVatNuoiResposity.find({ relations: ['vatNuoi', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] })
    })
  }

  async findOne(id: number) {
    return await this.BenhVatNuoiResposity.findOne({ where: { id: id }, relations: ['vatNuoi', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let benhVatNuoi = await this.findOne(id)
      if (!benhVatNuoi) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: benhVatNuoi
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateBenhVatNuoiDto: UpdateBenhVatNuoiDto) {
    try {
      let benhVatNuoi = await this.findOne(id)
      if (!benhVatNuoi) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { vatNuoiId, loaiBenhId, administrativeUnitId, kyBaoCaoId, ...Info } = updateBenhVatNuoiDto;
        let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
        let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['diaChi', 'nguyenNhan', 'dienTich', 'ngayGhiNhan', 'vatNuoiId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateBenhVatNuoiDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!vatNuoi || !administrativeUnit || !loaiBenh || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại vatNuoiId loaiBenhId donvihanhchinhId kyBaoCaoId",
            data: null
          })
        } if (updateBenhVatNuoiDto.toaDo) {
          const toaDoString = updateBenhVatNuoiDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.BenhVatNuoiResposity.update(id, { vatNuoi, loaiBenh, administrativeUnit, kyBaoCao, ...Info });
        return resultData({
          statusCode: 200,
          message: 'Sửa Thành công',
          data: await this.findOne(id)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async deleteBenhVatNuoi(id: number) {
    try {
      let benhVatNuoi = await this.findOne(id)
      if (!benhVatNuoi) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: benhVatNuoi
        })
      } else {
        await this.BenhVatNuoiResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
}
