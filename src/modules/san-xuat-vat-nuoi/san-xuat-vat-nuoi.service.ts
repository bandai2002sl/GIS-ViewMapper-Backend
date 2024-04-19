import { Injectable } from '@nestjs/common';
import { CreateSanXuatVatNuoiDto } from './dto/create-san-xuat-vat-nuoi.dto';
import { UpdateSanXuatVatNuoiDto } from './dto/update-san-xuat-vat-nuoi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { Repository } from 'typeorm';
import { VatNuoiService } from '../vat-nuoi/vat-nuoi.service';
import { SanXuatVatNuoi } from './entities/san-xuat-vat-nuoi.entity';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class SanXuatVatNuoiService {
  constructor(
    @InjectRepository(SanXuatVatNuoi)
    private SanXuatVatNuoiResposity: Repository<SanXuatVatNuoi>,
    private caNhanHtxService: CaNhanHtxService,
    private vatNuoiService: VatNuoiService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createSanXuatVatNuoiDto: CreateSanXuatVatNuoiDto) {
    try {
      let { caNhanHtxId, vatNuoiId, kyBaoCaoId, ...Info } = createSanXuatVatNuoiDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createSanXuatVatNuoiDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!caNhanHtx || !vatNuoi || !kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc vatNuoiId",
          data: null
        })
      } if (createSanXuatVatNuoiDto.toaDo) {
        const toaDoString = createSanXuatVatNuoiDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.SanXuatVatNuoiResposity.create({ caNhanHtx, vatNuoi, kyBaoCao, ...Info });
      let createSXVatNuoi = await this.SanXuatVatNuoiResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createSXVatNuoi
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.SanXuatVatNuoiResposity.find({ relations: ['caNhanHtx', 'vatNuoi', 'kyBaoCao'] })
    })
  }
  async findOne(id: number) {
    return await this.SanXuatVatNuoiResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'vatNuoi', 'kyBaoCao'] });
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

  async update(id: number, updateSanXuatVatNuoiDto: UpdateSanXuatVatNuoiDto) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, vatNuoiId, kyBaoCaoId, ...Info } = updateSanXuatVatNuoiDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let vatNuoi = await this.vatNuoiService.findOne(vatNuoiId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

        let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'vatNuoiId', 'kyBaoCaoId', 'toaDo', 'icon'];
        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateSanXuatVatNuoiDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!caNhanHtx || !vatNuoi || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc vatNuoiId",
            data: null
          })
        } if (updateSanXuatVatNuoiDto.toaDo) {
          const toaDoString = updateSanXuatVatNuoiDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.SanXuatVatNuoiResposity.update(id, { caNhanHtx, vatNuoi, kyBaoCao, ...Info });
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

  async deleteSanXuatVN(id: number) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: sanXuatOne
        })
      } else {
        await this.SanXuatVatNuoiResposity.delete(id)
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
