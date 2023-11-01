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
exports.UpdateOrderDto = exports.CreateOrderDto = exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_dto_1 = require("./base-dto");
const enums_1 = require("../enums");
const staff_dto_1 = require("./staff.dto");
const customer_dto_1 = require("./customer.dto");
const service_dto_1 = require("./service.dto");
class OrderDto extends base_dto_1.BaseDto {
    constructor(order) {
        super();
        if (order) {
            this.id = order.id;
            this.createdDate = order.createdDate.toISOString();
            this.visitDate = order.visitDate;
            this.status = order.status;
            this.finishStatus = order.finishStatus;
        }
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата создания' }),
    __metadata("design:type", String)
], OrderDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Клиент' }),
    __metadata("design:type", customer_dto_1.CustomerDto)
], OrderDto.prototype, "customer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата визита' }),
    __metadata("design:type", String)
], OrderDto.prototype, "visitDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус записи' }),
    __metadata("design:type", String)
], OrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Мастер услуги' }),
    __metadata("design:type", staff_dto_1.StaffDto)
], OrderDto.prototype, "master", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Услуга' }),
    __metadata("design:type", service_dto_1.ServiceDto)
], OrderDto.prototype, "service", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус завершения записи' }),
    __metadata("design:type", String)
], OrderDto.prototype, "finishStatus", void 0);
exports.OrderDto = OrderDto;
class CreateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Имя клиента', required: false }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Номер телефона' }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id мастера', required: false }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "masterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id услуги', required: false }),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата визита', required: false }),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "visitDate", void 0);
exports.CreateOrderDto = CreateOrderDto;
class UpdateOrderDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id клиента', required: false }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "customerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id мастера', required: false }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "masterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Id услуги', required: false }),
    __metadata("design:type", Number)
], UpdateOrderDto.prototype, "serviceId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Дата визита', required: false }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "visitDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус записи', enum: enums_1.RecordStatus, required: false }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Статус завершения записи', enum: enums_1.RecordStatusFinish, required: false }),
    __metadata("design:type", String)
], UpdateOrderDto.prototype, "finishStatus", void 0);
exports.UpdateOrderDto = UpdateOrderDto;
//# sourceMappingURL=order.dto.js.map