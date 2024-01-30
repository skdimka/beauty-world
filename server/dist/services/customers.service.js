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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const in_memory_db_service_1 = require("./in-memory-db.service");
let CustomersService = class CustomersService extends in_memory_db_service_1.InMemoryDbService {
    constructor() {
        super();
        this.createMany([
            {
                firstName: 'Иван',
                surName: 'Иванов',
                patronymic: 'Иванович',
                phone: '+7 (992) 333-33-45'
            },
            {
                firstName: 'Петр',
                surName: 'Петров',
                patronymic: 'Петрович',
                phone: '+7 (323) 442-11-22'
            }
        ]);
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map