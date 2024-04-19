import { Injectable } from '@nestjs/common';
import { CreateSanXuatTrongTrotDto } from './dto/create-san-xuat-trong-trot.dto';
import { UpdateSanXuatTrongTrotDto } from './dto/update-san-xuat-trong-trot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SanXuatTrongTrot } from './entities/san-xuat-trong-trot.entity';
import { Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';
import { CropTypeService } from '../crop-type/crop-type.service';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class SanXuatTrongTrotService {
  constructor(
    @InjectRepository(SanXuatTrongTrot)
    private SanXuatTrongTrotResposity: Repository<SanXuatTrongTrot>,
    private cropTypeService: CropTypeService,
    private administrativeUnitService: AdministrativeUnitService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createSanXuatTrongTrotDto: CreateSanXuatTrongTrotDto) {
    try {
      let { cropTypeId, administrativeUnitId, kyBaoCaoId, ...Info } = createSanXuatTrongTrotDto;
      let cropType = await this.cropTypeService.findOne(cropTypeId);
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'dienTichTrong', 'dienTichTrongMoi', 'dienTichChoSanPham', 'nangSuat', 'sanLuong', 'thoiDiemBaoCao', 'diaChi', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createSanXuatTrongTrotDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      if (!cropType || !administrativeUnit || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
          data: null
        })
      } if (createSanXuatTrongTrotDto.toaDo) {
        const toaDoString = createSanXuatTrongTrotDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.SanXuatTrongTrotResposity.create({ cropType, administrativeUnit, kyBaoCao, ...Info });
      let createSanSuat = await this.SanXuatTrongTrotResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createSanSuat
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.SanXuatTrongTrotResposity.find({ relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] })
    })
  }
  async findOne(id: number) {
    return await this.SanXuatTrongTrotResposity.findOne({ where: { id: id }, relations: ['cropType', 'administrativeUnit', 'kyBaoCao'] });
  }
  async getOne(id: number) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: sanXuatOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  async update(id: number, updateSanXuatTrongTrotDto: UpdateSanXuatTrongTrotDto) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { cropTypeId, administrativeUnitId, kyBaoCaoId, ...Info } = updateSanXuatTrongTrotDto;
        let cropType = await this.cropTypeService.findOne(cropTypeId);
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['cropTypeId', 'administrativeUnitId', 'kyBaoCaoId', 'dienTichTrong', 'dienTichTrongMoi', 'dienTichChoSanPham', 'nangSuat', 'sanLuong', 'thoiDiemBaoCao', 'diaChi', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateSanXuatTrongTrotDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!cropType || !administrativeUnit || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại cayTrongId, kyBaoCaoId hoặc donvihanhchinhId",
            data: null
          })
        } if (updateSanXuatTrongTrotDto.toaDo) {
          const toaDoString = updateSanXuatTrongTrotDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.SanXuatTrongTrotResposity.update(id, { ...Info, cropType, administrativeUnit, kyBaoCao });
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
  async deleteSanXuatTT(id: number) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: sanXuatOne
        })
      } else {
        await this.SanXuatTrongTrotResposity.delete(id)
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
