import { Injectable } from '@nestjs/common';
import { CreateSanXuatThuySanDto } from './dto/create-san-xuat-thuy-san.dto';
import { UpdateSanXuatThuySanDto } from './dto/update-san-xuat-thuy-san.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CaNhanHtxService } from '../ca-nhan-htx/ca-nhan-htx.service';
import { Repository } from 'typeorm';
import { ThuySanService } from '../thuy-san/thuy-san.service';
import { SanXuatThuySan } from './entities/san-xuat-thuy-san.entity';
import { resultData } from 'src/common/text.helper';
import { KyBaoCaoService } from '../ky-bao-cao/ky-bao-cao.service';

@Injectable()
export class SanXuatThuySanService {
  constructor(
    @InjectRepository(SanXuatThuySan)
    private SanXuatThuySanResposity: Repository<SanXuatThuySan>,
    private caNhanHtxService: CaNhanHtxService,
    private ThuySanService: ThuySanService,
    private kyBaoCaoService: KyBaoCaoService,
  ) { }
  async create(createSanXuatThuySanDto: CreateSanXuatThuySanDto) {
    try {
      let { caNhanHtxId, thuySanId, kyBaoCaoId, ...Info } = createSanXuatThuySanDto;
      let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
      let thuySan = await this.ThuySanService.findOne(thuySanId);
      let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);

      let arrInput = ['diaChi', 'moTa', 'hinhAnh', 'tinhTrang', 'caNhanHtxId', 'thuySanId', 'kyBaoCaoId', 'toaDo', 'icon'];
      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createSanXuatThuySanDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }
      if (!caNhanHtx) {
        return resultData({
          statusCode: 400,
          message: "Vui lòng kiểm tra lại caNhanHtxId",
          data: null
        })
      } 
      if (!thuySan) {
        return resultData({
          statusCode: 400,
          message: "Vui lòng kiểm tra lại thuySanId",
          data: null
        })
      } 
      if (!kyBaoCao) {
        return resultData({
          statusCode: 400,
          message: "Vui lòng kiểm tra lại kyBaoCaoId",
          data: null
        })
      } 
      if (createSanXuatThuySanDto.toaDo) {
        const toaDoString = createSanXuatThuySanDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let newData = this.SanXuatThuySanResposity.create({ caNhanHtx, thuySan, kyBaoCao, ...Info });
      let createSXThuySan = await this.SanXuatThuySanResposity.save(newData);
      return resultData({
        statusCode: 200,
        message: "thêm mới thành công",
        data: createSXThuySan
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findAll() {
    return resultData({
      statusCode: 200,
      message: "thành công",
      data: await this.SanXuatThuySanResposity.find({ relations: ['caNhanHtx', 'thuySan', 'kyBaoCao'] })
    })
  }
  async findOne(id: number) {
    return await this.SanXuatThuySanResposity.findOne({ where: { id: id }, relations: ['caNhanHtx', 'thuySan', 'kyBaoCao'] });
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

  async update(id: number, updateSanXuatThuySanDto: UpdateSanXuatThuySanDto) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: 'không tìm thấy dữ liệu bạn cần sửa vui lòng kiểm tra lại id',
          data: null
        })
      } else {
        let { caNhanHtxId, thuySanId, kyBaoCaoId, ...Info } = updateSanXuatThuySanDto;
        let caNhanHtx = await this.caNhanHtxService.findOne(caNhanHtxId);
        let thuySan = await this.ThuySanService.findOne(thuySanId);
        let kyBaoCao = await this.kyBaoCaoService.findOne(kyBaoCaoId);
        if (!caNhanHtx || !thuySan || !kyBaoCao) {
          return resultData({
            statusCode: 400,
            message: "không tìm thấy! Vui lòng kiểm tra lại caNhanHtxId, kyBaoCaoId hoặc thuySanId",
            data: null
          })
        } 
        if (updateSanXuatThuySanDto.toaDo) {
          const toaDoString = updateSanXuatThuySanDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;

          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.SanXuatThuySanResposity.update(id, { caNhanHtx, thuySan, kyBaoCao, ...Info });
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

  async deleteSanXuatTS(id: number) {
    try {
      let sanXuatOne = await this.findOne(id)
      if (!sanXuatOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy dữ liệu! Vui lòng kiểm tra lại Id",
          data: sanXuatOne
        })
      } else {
        await this.SanXuatThuySanResposity.delete(id)
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
