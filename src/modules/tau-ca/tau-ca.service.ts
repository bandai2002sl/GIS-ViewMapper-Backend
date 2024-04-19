import { Injectable } from '@nestjs/common';
import { CreateTauCaDto } from './dto/create-tau-ca.dto';
import { UpdateTauCaDto } from './dto/update-tau-ca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TauCa } from './entities/tau-ca.entity';
import { Repository } from 'typeorm';
import { AdministrativeUnitService } from '../administrative-unit/administrative-unit.service';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class TauCaService {
  constructor(
    @InjectRepository(TauCa)
    private tauCaRepository: Repository<TauCa>,
    private administrativeUnitService: AdministrativeUnitService,
    private caNhanHtxService: CaNhanHtxService
  ) { }

  async create(createTauCaDto: CreateTauCaDto) {
    try {
      let { administrativeUnitId, caNhanHTXId, ...Info } = createTauCaDto;
      let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
      let caNhanHTX = await this.caNhanHtxService.findOne(caNhanHTXId);
      if (!administrativeUnit) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy đơn vị hành chính nào có id = " + administrativeUnitId,
          data: null
        })
      } else if (!caNhanHTX) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy hợp tác nào có id = " + caNhanHTXId,
          data: null
        })
      }
      if (createTauCaDto.toaDo) {
        const toaDoString = createTauCaDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.tauCaRepository.create({ administrativeUnit, caNhanHTX, ...Info });
      let cong = await this.tauCaRepository.save(newData);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: cong
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "Thành công",
      data: await this.tauCaRepository.find({ relations: ['administrativeUnit', 'caNhanHTX'] })
    })
  }

  async findOne(id: number) {
    return await this.tauCaRepository.findOne({ where: { id: id }, relations: ['administrativeUnit', 'caNhanHTX'] });
  }

  async getOne(id: number) {
    try {
      let tauCa = await this.findOne(id);
      if (!tauCa) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: tauCa
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateTauCaDto: UpdateTauCaDto) {
    try {
      let cong = await this.findOne(id)
      if (!cong) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
        })
      } else {
        let { administrativeUnitId, caNhanHTXId, ...Info } = updateTauCaDto;
        let administrativeUnit = await this.administrativeUnitService.findOne(administrativeUnitId);
        let caNhanHTX = await this.caNhanHtxService.findOne(caNhanHTXId);
        if (!administrativeUnit) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy đơn vị hành chính có id= " + administrativeUnitId,
          })
        } else if (!caNhanHTX) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy hợp tác xã có id= " + caNhanHTXId,
          })
        } 
        if (updateTauCaDto.toaDo) {
          const toaDoString = updateTauCaDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.tauCaRepository.update(id, { ...Info, caNhanHTX, administrativeUnit });
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
      let stuoiTieu = await this.findOne(id)
      if (!stuoiTieu) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
        })
      } else {
        await this.tauCaRepository.delete(id)
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
