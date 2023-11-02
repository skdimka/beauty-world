"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceDto = exports.ServiceDto = void 0;
const base_dto_1 = require("./base-dto");
const swagger_1 = require("@nestjs/swagger");
class ServiceDto extends base_dto_1.BaseDto {
    constructor(service) {
        super();
        if (service) {
            Object.assign(this, service);
        }
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Название' }),
    __metadata("design:type", String)
], ServiceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Описание', required: false }),
    __metadata("design:type", String)
], ServiceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Стоимость' }),
    __metadata("design:type", Number)
], ServiceDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фотография услуги', required: false }),
    __metadata("design:type", String)
], ServiceDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Услуга является популярной', required: false }),
    __metadata("design:type", Boolean)
], ServiceDto.prototype, "isPopular", void 0);
exports.ServiceDto = ServiceDto;
class CreateServiceDto extends base_dto_1.BaseDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Название' }),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Описание', required: false }),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id категории услуг', required: false }),
    __metadata("design:type", Number)
], CreateServiceDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Стоимость' }),
    __metadata("design:type", Number)
], CreateServiceDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фотография услуги', required: false }),
    __metadata("design:type", String)
], CreateServiceDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Услуга является популярной', required: false }),
    __metadata("design:type", Boolean)
], CreateServiceDto.prototype, "isPopular", void 0);
exports.CreateServiceDto = CreateServiceDto;
//# sourceMappingURL=service.dto.js.map