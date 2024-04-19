import { Injectable } from '@nestjs/common';
import { CreateLienKetDto } from './dto/create-lien-ket.dto';
import { UpdateLienKetDto } from './dto/update-lien-ket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LienKet } from './entities/lien-ket.entity';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class LienKetService {
  constructor(
    @InjectRepository(LienKet)
    private LienKetResposity: Repository<LienKet>,
    private caNhanHtxService: CaNhanHtxService,
  ) { }
  async create(createLienKetDto: CreateLienKetDto) {
    try {
      let { caNhanHtxId, ...Info } = createLienKetDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);

      let arrInput = ['caNhanHtxId', 'hinhThucLienKet', 'ngayLienKet', 'trangThai'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createLienKetDto[arrInput[i]]) {

          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }

      if (!caNhanHtx) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId",
          data: null
        })
      } else {
        let newData = this.LienKetResposity.create({ caNhanHtx, ...Info });
        let createLienKet = await this.LienKetResposity.save(newData);
        return resultData({
          statusCode: 200,
          message: "thêm mới thành công",
          data: createLienKet
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.LienKetResposity.find({ relations: ['caNhanHtx'] })
    })
  }

  async findOne(id: number) {
    return await this.LienKetResposity.findOne({ where: { id: id }, relations: ['caNhanHtx'] });
  }

  async getOne(id: number) {
    try {
      let lienKet = await this.findOne(id)
      if (!lienKet) {
        return resultData({
          statusCode: 400,
          message: "không tồn tại",
          data: null
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: lienKet
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async update(id: number, updateLienKetDto: UpdateLienKetDto) {
    try {
      let lienKet = await this.findOne(id)
      if (!lienKet) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, ...Info } = updateLienKetDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);

        let arrInput = ['caNhanHtxId', 'hinhThucLienKet', 'ngayLienKet', 'trangThai'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateLienKetDto[arrInput[i]]) {

            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }

        if (!caNhanHtx) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId",
            data: null
          })
        } else {
          await this.LienKetResposity.update(id, { ...Info, caNhanHtx });
          return resultData({
            statusCode: 200,
            message: 'Sửa Thành công',
            data: await this.findOne(id)
          })
        }

      }
    } catch (e) {
      console.log(e)
    }
  }

  async deleteLienKet(id: number) {
    try {
      let lienKet = await this.findOne(id)
      if (!lienKet) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: lienKet
        })
      } else {
        await this.LienKetResposity.delete(id)
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
