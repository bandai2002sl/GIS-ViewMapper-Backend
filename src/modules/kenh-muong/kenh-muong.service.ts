import { Injectable } from '@nestjs/common';
import { CreateKenhMuongDto } from './dto/create-kenh-muong.dto';
import { UpdateKenhMuongDto } from './dto/update-kenh-muong.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { KenhMuong } from './entities/kenh-muong.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class KenhMuongService {
  constructor(
    @InjectRepository(KenhMuong)
    private kenhMuongResposity: Repository<KenhMuong>,
    private administrativeUnitService: AdministrativeUnitService,
  ) { }

  async create(createKenhMuongDto: CreateKenhMuongDto) {
    try {
      let { administrativeUnitId, ...Info } = createKenhMuongDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);

      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } 
      if (createKenhMuongDto.toaDo) {
        const toaDoString = createKenhMuongDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.kenhMuongResposity.create({ administrativeUnit, ...Info });
      let kenhMuong = await this.kenhMuongResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: kenhMuong
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.kenhMuongResposity.find({ relations: ['administrativeUnit'] })
    })
  }

  async findOne(id: number) {
    return await this.kenhMuongResposity.findOne({ where: { id: id }, relations: ['administrativeUnit'] });
  }

  async getOne(id: number) {
    try {
      let kenh = await this.findOne(id);
      if (!kenh) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: kenh
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateKenhMuongDto: UpdateKenhMuongDto) {
    try {
      let kenh = await this.findOne(id)
      if (!kenh) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, ...Info } = updateKenhMuongDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại đơn vị hành có id= " + administrativeUnitId,
          })
        } 
        if (updateKenhMuongDto.toaDo) {
          const toaDoString = updateKenhMuongDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.kenhMuongResposity.update(id, { ...Info, administrativeUnit });
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

  async remove(id: number) {
    try {
      let kenh = await this.findOne(id)
      if (!kenh) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
        })
      } else {
        await this.kenhMuongResposity.delete(id)
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
