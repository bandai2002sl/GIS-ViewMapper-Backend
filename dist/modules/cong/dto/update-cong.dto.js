"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCongDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_cong_dto_1 = require("./create-cong.dto");
class UpdateCongDto extends (0, swagger_1.PartialType)(create_cong_dto_1.CreateCongDto) {
}
exports.UpdateCongDto = UpdateCongDto;
//# sourceMappingURL=update-cong.dto.js.map