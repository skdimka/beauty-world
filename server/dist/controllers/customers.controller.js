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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const dto_1 = require("../shared/dto");
const utils_1 = require("../shared/utils");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
let CustomersController = class CustomersController {
    constructor(customersService) {
        this.customersService = customersService;
    }
    getCustomers(req, search) {
        return this.customersService
            .getAll()
            .map(customer => new dto_1.CustomerDto(customer))
            .filter(customer => {
            const findByName = utils_1.Utils.compare(customer.fullName, search);
            const findByPhone = utils_1.Utils.compare(customer.phone, search);
            return findByName || findByPhone;
        });
    }
    getCustomerById(id) {
        const existedCustomer = this.customersService.get(+id);
        if (!existedCustomer) {
            throw new common_1.HttpException('Клиент не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return new dto_1.CustomerDto(this.customersService.get(+id));
    }
    createCustomer(createCustomerDto) {
        if (!createCustomerDto.firstName) {
            throw new common_1.HttpException('Необходимо задать имя', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!createCustomerDto.surName) {
            throw new common_1.HttpException('Необходимо задать фамилию', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!createCustomerDto.phone) {
            throw new common_1.HttpException('Необходимо задать номер телефона', common_1.HttpStatus.BAD_REQUEST);
        }
        const existedCustomer = this.customersService.query(item => item.phone === createCustomerDto.phone);
        if (existedCustomer.length) {
            throw new common_1.HttpException('Клиент с таким номером телефона уже существует', common_1.HttpStatus.BAD_REQUEST);
        }
        const createdCustomer = this.customersService.create(createCustomerDto);
        return new dto_1.CustomerDto(createdCustomer);
    }
    updateCustomer(id, updateCustomer) {
        const existedCustomer = this.customersService.get(+id);
        if (!existedCustomer) {
            throw new common_1.HttpException('Пользователь с таким id не найден', common_1.HttpStatus.NOT_FOUND);
        }
        this.customersService.update(Object.assign({ id }, updateCustomer));
        return new dto_1.CustomerDto(this.customersService.get(+id));
    }
    removeCustomer(id) {
        const existedCustomer = this.customersService.get(+id);
        if (!existedCustomer) {
            throw new common_1.HttpException('Пользователь с таким id не найден', common_1.HttpStatus.NOT_FOUND);
        }
        this.customersService.delete(+id);
        return;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает клиентов салона' }),
    (0, swagger_1.ApiQuery)({ name: 'search', description: 'Фильтрует клиента по ФИО или номер телефона', required: false }),
    (0, swagger_1.ApiOkResponse)({ type: [dto_1.CustomerDto] }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Array)
], CustomersController.prototype, "getCustomers", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Возвращает клиента по id' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Клиент не найден' }),
    (0, swagger_1.ApiOkResponse)({ type: dto_1.CustomerDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", dto_1.CustomerDto)
], CustomersController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({ type: dto_1.CustomerDto, description: 'Клиент успешно создан' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Не задано имя, фамилия или номер телефона' }),
    (0, swagger_1.ApiOperation)({ summary: 'Создаёт нового клиента' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCustomerDto]),
    __metadata("design:returntype", dto_1.CustomerDto)
], CustomersController.prototype, "createCustomer", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Обновляет данные клиента' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Клиент не найден' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Данные клиента изменены', type: dto_1.CustomerDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.CreateCustomerDto]),
    __metadata("design:returntype", dto_1.CustomerDto)
], CustomersController.prototype, "updateCustomer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Клиент не найден' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Клиент удалён из базы' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CustomersController.prototype, "removeCustomer", null);
CustomersController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, swagger_1.ApiTags)('Customers'),
    (0, common_1.Controller)('customers'),
    __metadata("design:paramtypes", [services_1.CustomersService])
], CustomersController);
exports.CustomersController = CustomersController;
//# sourceMappingURL=customers.controller.js.map