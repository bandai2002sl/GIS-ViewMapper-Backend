"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCropTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_crop_type_dto_1 = require("./create-crop-type.dto");
class UpdateCropTypeDto extends (0, swagger_1.PartialType)(create_crop_type_dto_1.CreateCropTypeDto) {
}
exports.UpdateCropTypeDto = UpdateCropTypeDto;
//# sourceMappingURL=update-crop-type.dto.js.map