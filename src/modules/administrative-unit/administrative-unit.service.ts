import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAdministrativeUnitDto } from './dto/create-administrative-unit.dto';
import { UpdateAdministrativeUnitDto } from './dto/update-administrative-unit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdministrativeUnit } from './entities/administrative-unit.entity';
import { EntityManager, Repository } from 'typeorm';
import { resultData } from 'src/common/text.helper';

@Injectable()
export class AdministrativeUnitService {
  constructor(
    @InjectRepository(AdministrativeUnit)
    private AdministrativeUnitResposity: Repository<AdministrativeUnit>,
  ) { }
  async create(createAdministrativeUnitDto: CreateAdministrativeUnitDto) {
    try {

      let arrInput = ['maHanhChinh', 'ten', 'capHanhChinh', 'tenVietTat', 'toaDo'];

      // Kiểm tra xem các trường bắt buộc có giá trị không
      for (let i = 0; i < arrInput.length; i++) {
        if (!createAdministrativeUnitDto[arrInput[i]]) {
          return resultData({
            statusCode: 400,
            message: `Bạn chưa nhập trường :` + arrInput[i],
          });
        }
      }


      if (!isMaHCValid(createAdministrativeUnitDto.maHanhChinh)) {
        // maHC hợp lệ, chỉ chứa chữ cái tiếng Anh và số, không hợp lệ, chứa tiếng Việt, ký tự đặc biệt hoặc khoảng trắng
        return resultData({
          statusCode: 400,
          message: `maHanhChinh chỉ chứa chữ cái tiếng Anh và số, không chứa tiếng Việt ký tự đặc biệt hoặc khoảng trắng :`,
        });
      }

      // 1. Kiểm tra xem 'ma' đã tồn tại trong cơ sở dữ liệu hay chưa
      const existingAdmin = await this.AdministrativeUnitResposity.findOne({
        where: {
          maHanhChinh: createAdministrativeUnitDto.maHanhChinh
        }
      });

      if (existingAdmin) {
        // 'maHanhChinh' đã tồn tại, trả về thông báo lỗi
        return resultData({
          statusCode: 400,
          message: "Mã Hành Chính đã tồn tại trong cơ sở dữ liệu",
        });
      }
      if (createAdministrativeUnitDto.toaDo) {
        const toaDoString = createAdministrativeUnitDto.toaDo;
        const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
        if (!regex.test(toaDoString)) {
          return resultData({
            statusCode: 400,
            message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
          });
        }
      }
      let createAdmin = await this.AdministrativeUnitResposity.save(createAdministrativeUnitDto);
      return resultData({
        statusCode: 200,
        message: "Thêm mới thành công",
        data: createAdmin
      })
    } catch (e) {
      console.log(e)
    }
  }

  async getAll() {
    try {
      let adminAll = await this.AdministrativeUnitResposity.find()
      return resultData({
        statusCode: 200,
        message: "Thành công",
        data: adminAll
      })
    } catch (e) {
      console.log(e)
    }
  }

  async findOne(id: number) {
    return this.AdministrativeUnitResposity.findOne({ where: { id: id } });
  }

  async getOne(id: number) {
    try {
      let adminOne = await this.findOne(id)
      if (!adminOne) {
        return resultData({
          statusCode: 400,
          message: "không tìm thấy",
          data: adminOne,
        })
      } else {
        return resultData({
          statusCode: 200,
          message: "Tìm thành công",
          data: adminOne,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  async updateAdmin(id: number, updateAdministrativeUnitDto: UpdateAdministrativeUnitDto) {
    try {
      let adminOne = await this.findOne(id)
      if (!adminOne) {
        return resultData({
          statusCode: 400,
          message: "Hành chính không tồn tại",
          data: adminOne
        })
      } else {
        let arrInput = ['maHanhChinh', 'ten', 'capHanhChinh', 'tenVietTat', 'toaDo'];

        // Kiểm tra xem các trường bắt buộc có giá trị không
        for (let i = 0; i < arrInput.length; i++) {
          if (!updateAdministrativeUnitDto[arrInput[i]]) {
            return resultData({
              statusCode: 400,
              message: `Bạn chưa nhập trường :` + arrInput[i],
            });
          }
        }
        if (!isMaHCValid(updateAdministrativeUnitDto.maHanhChinh)) {
          // maHC hợp lệ, chỉ chứa chữ cái tiếng Anh và số, không hợp lệ, chứa tiếng Việt, ký tự đặc biệt hoặc khoảng trắng
          return resultData({
            statusCode: 400,
            message: `maHanhChinh chỉ chứa chữ cái tiếng Anh và số, không chứa tiếng Việt, ký tự đặc biệt hoặc khoảng trắng :`,
          });
        }
        if (updateAdministrativeUnitDto.toaDo) {
          const toaDoString = updateAdministrativeUnitDto.toaDo;
          const regex = /^point\(\s*(-?\d+(\.\d+)?)\s+(-?\d+(\.\d+)?)\s*\)$/i;
          if (!regex.test(toaDoString)) {
            return resultData({
              statusCode: 400,
              message: "Dữ liệu toaDo không hợp lệ! Bạn có thể thử lại với point(20 -20)",
            });
          }
        }
        await this.AdministrativeUnitResposity.update(id, updateAdministrativeUnitDto)
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

  async deleteAdmin(id: number) {
    try {
      let adminOne = await this.findOne(id)
      if (!adminOne) {
        return resultData({
          statusCode: 400,
          message: "Hành chính không tồn tại",
          data: adminOne
        })
      } else {
        await this.AdministrativeUnitResposity.delete(id)
        return resultData({
          statusCode: 200,
          message: "Xóa thành công",
        })
      }
    } catch (e) {
      //Xử lý lỗi khóa ngoại
      if (e.errno === 1451) {
        return resultData({
          statusCode: 400,
          message: "bạn không thể xóa vì có ràng buộc khóa ngoại",
        })
      }
      console.log(e)
    }
  }
}
function isMaHCValid(maHC: string): boolean {
  // Sử dụng biểu thức chính quy để kiểm tra xem maHC chỉ chứa chữ cái tiếng Anh và số.
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(maHC);
}

