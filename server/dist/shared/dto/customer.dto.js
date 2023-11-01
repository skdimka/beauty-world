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
exports.CreateCustomerDto = exports.CustomerDto = void 0;
const base_dto_1 = require("./base-dto");
const swagger_1 = require("@nestjs/swagger");
class CustomerDto extends base_dto_1.BaseDto {
    constructor(customer) {
        super();
        if (customer) {
            Object.assign(this, customer);
            this.fullName = `${customer.surName || ''} ${customer.firstName || ''} ${customer.patronymic || ''}`.trim();
        }
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Отчество' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фамилия' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Полное имя клиента' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Номер телефона' }),
    __metadata("design:type", String)
], CustomerDto.prototype, "phone", void 0);
exports.CustomerDto = CustomerDto;
class CreateCustomerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя' }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Отчество', required: false }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "patronymic", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Фамилия' }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "surName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Номер телефона' }),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
exports.CreateCustomerDto = CreateCustomerDto;
//# sourceMappingURL=customer.dto.js.map