import { Injectable } from '@nestjs/common';
import { CreateBenhCayDto } from './dto/create-benh-cay.dto';
import { UpdateBenhCayDto } from './dto/update-benh-cay.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BenhCay } from './entities/benh-cay.entity';
import { Repository } from 'typeorm';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { LoaiBenhService } from '../loai-benh/loai-benh.service';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class BenhCayService {
  constructor(
    @InjectRepository(BenhCay)
    private BenhCayResposity: Repository<BenhCay>,
    private cropTypeService: CropTypeService,
    private loaiBenhService: LoaiBenhService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createBenhCayDto: CreateBenhCayDto) {
    try {
      let { cropTypeId, loaiBenhId, administrativeUnitId, kyBaoCaoId, ...Info } = createBenhCayDto;
      let cropType = await this.cropTypeService.findOne(cropTypeId);
      let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['cropTypeId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'diaChi', 'moTa', 'hinhAnh', 'dienTich', 'ngayGhiNhan', 'toaDo', 'icon'];

      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createBenhCayDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      if (!cropType || !administrativeUnit || !loaiBenh || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId loaiBenhId donvihanhchinhId kyBaoCaoId",
          data: null
        })
      } if (createBenhCayDto.toaDo) {
        const toaDoString = createBenhCayDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.BenhCayResposity.create({ cropType, loaiBenh, administrativeUnit, kyBaoCao, ...Info });
      let createBenhCay = await this.BenhCayResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createBenhCay
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.BenhCayResposity.find({ relations: ['cropType', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] })
    })
  }

  async findOne(id: number) {
    return await this.BenhCayResposity.findOne({ where: { id: id }, relations: ['cropType', 'loaiBenh', 'administrativeUnit', 'kyBaoCao'] });
  }

  async getOne(id: number) {
    try {
      let benhCay = await this.findOne(id)
      if (!benhCay) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: benhCay
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateBenhCayDto: UpdateBenhCayDto) {
    try {
      let benhCay = await this.findOne(id)
      if (!benhCay) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { cropTypeId, loaiBenhId, administrativeUnitId, kyBaoCaoId, ...Info } = updateBenhCayDto;
        let cropType = await this.cropTypeService.findOne(cropTypeId);
        let loaiBenh = await this.loaiBenhService.findOne(loaiBenhId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['cropTypeId', 'loaiBenhId', 'administrativeUnitId', 'kyBaoCaoId', 'diaChi', 'moTa', 'hinhAnh', 'dienTich', 'ngayGhiNhan', 'toaDo', 'icon'];

        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateBenhCayDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        if (!cropType || !administrativeUnit || !loaiBenh || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId loaiBenhId donvihanhchinhId kyBaoCaoId",
            data: null
          })
        } if (updateBenhCayDto.toaDo) {
          const toaDoString = updateBenhCayDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.BenhCayResposity.update(id, { cropType, loaiBenh, administrativeUnit, kyBaoCao, ...Info });
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

  async deleteBenhCay(id: number) {
    try {
      let benhCay = await this.findOne(id)
      if (!benhCay) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: benhCay
        })
      } else {
        await this.BenhCayResposity.delete(id)
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
