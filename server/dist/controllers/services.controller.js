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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../shared/dto");
const services_1 = require("../services");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let ServicesController = class ServicesController {
    constructor(services) {
        this.services = services;
    }
    getServices() {
        return this.services.getAll();
    }
    getCustomerById(id) {
        const existedCustomer = this.services.get(+id);
        if (!existedCustomer) {
            throw new common_1.HttpException('Услуга не неайдена', common_1.HttpStatus.NOT_FOUND);
        }
        return new dto_1.ServiceDto(this.services.get(+id));
    }
    createService(createServiceDto) {
        const createdService = this.services.create(createServiceDto);
        return new dto_1.ServiceDto(createdService);
    }
    updateService(id, updateServiceDto) {
        const existedService = this.services.get(+id);
        if (!existedService) {
            throw new common_1.HttpException('Услуга не неайдена', common_1.HttpStatus.NOT_FOUND);
        }
        this.services.update(Object.assign({ id }, updateServiceDto));
        return new dto_1.ServiceDto(this.services.get(+id));
    }
    removeService(id) {
        const existedService = this.services.get(+id);
        if (!existedService) {
            throw new common_1.HttpException('Услуга не неайдена', common_1.HttpStatus.NOT_FOUND);
        }
        this.services.delete(+id);
        return;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает все услуги' }),
    (0, swagger_1.ApiOkResponse)({ type: dto_1.ServiceDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ServicesController.prototype, "getServices", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает клиента по id' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Услуга не неайдена' }),
    (0, swagger_1.ApiOkResponse)({ type: dto_1.ServiceDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", dto_1.ServiceDto)
], ServicesController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Создаёт новую услугу' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Услуга создана', type: dto_1.ServiceDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateServiceDto]),
    __metadata("design:returntype", dto_1.ServiceDto)
], ServicesController.prototype, "createService", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Обновляет данные услуги' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Услуга не неайдена' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Услуга изменена', type: dto_1.ServiceDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CreateServiceDto]),
    __metadata("design:returntype", dto_1.ServiceDto)
], ServicesController.prototype, "updateService", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Удаляет услугу' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Услуга не неайдена' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Услуга удалена' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServicesController.prototype, "removeService", null);
ServicesController = __decorate([
    (0, swagger_1.ApiTags)('Services'),
    (0, common_1.Controller)('services'),
    __metadata("design:paramtypes", [services_1.ServicesService])
], ServicesController);
exports.ServicesController = ServicesController;
//# sourceMappingURL=services.controller.js.map