import { Injectable } from '@nestjs/common';
import { CreateCaNhanHtxDto } from './dto/create-ca-nhan-htx.dto';
import { UpdateCaNhanHtxDto } from './dto/update-ca-nhan-htx.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CaNhanHtx } from './entities/ca-nhan-htx.entity';
import { EntityManager, Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class CaNhanHtxService {
  constructor(
    @InjectRepository(CaNhanHtx)
    private CaNhanHtxResposity: Repository<CaNhanHtx>,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }

  async create(createCaNhanHtxDto: CreateCaNhanHtxDto) {
    try {
      let { administrativeUnitId, ...hopTacXaInfo } = createCaNhanHtxDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      let arrInput = ['administrativeUnitId', 'name', 'sdt', 'address', 'moTa', 'linhVucHoatDong', 'hinhAnh', 'ngayThanhLap', 'loaiHinh', 'soNguoi', 'trangThai', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createCaNhanHtxDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
        })
      }
      if (createCaNhanHtxDto.toaDo) {
        const toaDoString = createCaNhanHtxDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let hopTacXa = this.CaNhanHtxResposity.create({ administrativeUnit, ...hopTacXaInfo });
      let createCaNhanHtx = await this.CaNhanHtxResposity.save(hopTacXa);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createCaNhanHtx
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.CaNhanHtxResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.CaNhanHtxResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let hTXOne = await this.CaNhanHtxResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
      if (!hTXOne) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: hTXOne
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateCaNhanHtxDto: UpdateCaNhanHtxDto) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { administrativeUnitId, ...hopTacXaInfo } = updateCaNhanHtxDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

        let arrInput = ['administrativeUnitId', 'name', 'sdt', 'address', 'moTa', 'linhVucHoatDong', 'hinhAnh', 'ngayThanhLap', 'loaiHinh', 'soNguoi', 'trangThai', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateCaNhanHtxDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại donvihanhchinhId",
            data: null
          })
        }
        if (updateCaNhanHtxDto.toaDo) {
          const toaDoString = updateCaNhanHtxDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.CaNhanHtxResposity.update(id, { ...hopTacXaInfo, administrativeUnit });
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
  async deleteHtx(id: number) {
    try {
      let htx = await this.findOne(id)
      if (!htx) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: htx
        })
      } else {
        await this.CaNhanHtxResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      if (e.errno === 1451) {
        return resultData({
          statusCode: 400,
          message: "Bạn không thể xóa vì có ràng buộc khóa ngoại. Hãy xóa dữ liệu có liên kết",
        })
      }
      console.log(e)
    }
  }
}
