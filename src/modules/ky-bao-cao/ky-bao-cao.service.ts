import { Injectable } from '@nestjs/common';
import { CreateKyBaoCaoDto } from './dto/create-ky-bao-cao.dto';
import { UpdateKyBaoCaoDto } from './dto/update-ky-bao-cao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { KyBaoCao } from './entities/ky-bao-cao.entity';
import { Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class KyBaoCaoService {
  constructor(
    @InjectRepository(KyBaoCao)
    private KyBaoCaoResposity: Repository<KyBaoCao>,
  ) { }
  async create(createKyBaoCaoDto: CreateKyBaoCaoDto) {
    try {
      let arrInput = ['tenBaoCao', 'thoiDiemBatDau', 'thoiDiemKetThuc', 'trangThai'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createKyBaoCaoDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      let createNewKyBc = await this.KyBaoCaoResposity.save(createKyBaoCaoDto);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createNewKyBc
      })
    } catch (e) {
      console.log(e)
    }
  }

  async getAll() {
    try {
      let kyBaoCaoAll = await this.KyBaoCaoResposity.find()
      return resultData({
        statusCode: 200,
        message: "thành công",
        data: kyBaoCaoAll
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findOne(id: number) {
    return this.KyBaoCaoResposity.findOne({ where: { id: id } });
  }

  async getOne(id: number) {
    try {
      let kyBaoCaoOne = await this.findOne(id)
      if (!kyBaoCaoOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy kỳ báo cáo",
          data: kyBaoCaoOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "tìm thành công",
          data: kyBaoCaoOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  async editKyBaoCao(id: number, updateKyBaoCaoDto: UpdateKyBaoCaoDto) {
    try {
      let kyBaoCao = await this.findOne(id)
      if (!kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "Kỳ báo cáo không tồn tại",
          data: kyBaoCao
        })
      } else {
        let arrInput = ['tenBaoCao', 'thoiDiemBatDau', 'thoiDiemKetThuc', 'trangThai'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateKyBaoCaoDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        await this.KyBaoCaoResposity.update(id, updateKyBaoCaoDto)
        return resultData({
          statusCode: 200,
          message: "Sửa thành công",
          data: await this.findOne(id)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async deleteKyBaoCao(id: number) {
    try {
      let kyBaoCao = await this.findOne(id)
      if (!kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "Kỳ báo cáo không tồn tại",
          data: kyBaoCao
        })
      } else {
        await this.KyBaoCaoResposity.delete(id)
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
