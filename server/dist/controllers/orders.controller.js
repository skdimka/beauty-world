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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../shared/dto");
const enums_1 = require("../shared/enums");
const services_1 = require("../services");
const utils_1 = require("../shared/utils");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let OrdersController = class OrdersController {
    constructor(ordersService, customerService, staffService, servicesService) {
        this.ordersService = ordersService;
        this.customerService = customerService;
        this.staffService = staffService;
        this.servicesService = servicesService;
    }
    getOrders(from, to, status, search) {
        return this.ordersService
            .getAll()
            .map(order => this._getOrderDto(order))
            .filter(order => utils_1.Utils.compare(order.customer.fullName, search))
            .filter(order => status ? order.status === status : true)
            .filter(order => {
            if (from && order.visitDate) {
                return utils_1.Utils.getDateTime(order.visitDate) >= utils_1.Utils.getDateTime(from);
            }
            return true;
        })
            .filter(order => {
            if (to && order.visitDate) {
                return utils_1.Utils.getDateTime(order.visitDate) <= utils_1.Utils.getDateTime(to);
            }
            return true;
        })
            .sort((a, b) => {
            return utils_1.Utils.getDateTime(a.createdDate) < utils_1.Utils.getDateTime(b.createdDate) ? 1 : -1;
        });
    }
    createOrder(createOrderDto) {
        if (!createOrderDto.name) {
            throw new common_1.HttpException('Необходимо задать имя клиента', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!createOrderDto.phone) {
            throw new common_1.HttpException('Необходимо задать номер телефона', common_1.HttpStatus.BAD_REQUEST);
        }
        let customer;
        let foundCustomers = this.customerService.query(item => item.phone === createOrderDto.phone);
        if (!foundCustomers.length) {
            customer = this.customerService.create({
                firstName: createOrderDto.name,
                phone: createOrderDto.phone
            });
        }
        else {
            customer = foundCustomers[0];
        }
        if (createOrderDto.masterId && !this.staffService.get(createOrderDto.masterId)) {
            throw new common_1.HttpException(`Мастер по id ${createOrderDto.masterId} не найден`, common_1.HttpStatus.NOT_FOUND);
        }
        if (createOrderDto.serviceId && !this.servicesService.get(createOrderDto.serviceId)) {
            throw new common_1.HttpException(`Услуга по id ${createOrderDto.serviceId} не найдена`, common_1.HttpStatus.NOT_FOUND);
        }
        const createdOrder = this.ordersService.create({
            createdDate: new Date(),
            visitDate: createOrderDto.visitDate,
            status: enums_1.RecordStatus.Opened,
            masterId: createOrderDto.masterId,
            serviceId: createOrderDto.serviceId,
            customerId: customer.id
        });
        return this._getOrderDto(createdOrder);
    }
    updateOrder(id, updateOrderDto) {
        const foundOrder = this.ordersService.get(+id);
        if (!foundOrder) {
            throw new common_1.HttpException('Заявка не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        this.ordersService.update(Object.assign({ id }, updateOrderDto));
        return this._getOrderDto(this.ordersService.get(+id));
    }
    closeOrder(id, finishStatus) {
        const foundOrder = this.ordersService.get(+id);
        if (!foundOrder) {
            throw new common_1.HttpException('Заявка не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        this.ordersService.update(Object.assign(Object.assign({}, foundOrder), { finishStatus, status: enums_1.RecordStatus.Closed }));
        return new dto_1.OrderDto(this.ordersService.get(+id));
    }
    removeOrder(id) {
        const foundOrder = this.ordersService.get(+id);
        if (!foundOrder) {
            throw new common_1.HttpException('Заявка не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        this.ordersService.delete(+id);
        return;
    }
    _getOrderDto(order) {
        const orderDto = new dto_1.OrderDto(order);
        if (order.masterId) {
            orderDto.master = new dto_1.StaffDto(this.staffService.get(order.masterId));
        }
        if (order.customerId) {
            orderDto.customer = new dto_1.CustomerDto(this.customerService.get(order.customerId));
        }
        if (order.serviceId) {
            orderDto.service = new dto_1.ServiceDto(this.servicesService.get(order.serviceId));
        }
        return orderDto;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает онлайн-записи на услуги' }),
    (0, swagger_1.ApiOkResponse)({ type: [dto_1.OrderDto] }),
    (0, swagger_1.ApiQuery)({ name: 'from', description: 'Дата начала периода дат посещения', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'to', description: 'Дата конца периода дат посещения', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'status', enum: enums_1.RecordStatus, description: 'Статус заявки', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'search', description: 'Поисковый запрос по ФИО клиента', required: false }),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Array)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Создаёт онлайн-запись на услугу' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Имя или номер клиента не заданы' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Мастер или услуга не найдены' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Запись создана', type: dto_1.OrderDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateOrderDto]),
    __metadata("design:returntype", dto_1.OrderDto)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Данные заявки изменены' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Заявка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UpdateOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "updateOrder", null);
__decorate([
    (0, common_1.Patch)('close/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiQuery)({ name: 'finishStatus', enum: enums_1.RecordStatusFinish, description: 'Услуга оказана или нет' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Заявка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('finishStatus')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "closeOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Заявка удалена' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Заявка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "removeOrder", null);
OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [services_1.OrdersService,
        services_1.CustomersService,
        services_1.StaffService,
        services_1.ServicesService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map