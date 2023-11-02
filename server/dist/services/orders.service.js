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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const in_memory_db_service_1 = require("./in-memory-db.service");
const enums_1 = require("../shared/enums");
let OrdersService = class OrdersService extends in_memory_db_service_1.InMemoryDbService {
    constructor() {
        super();
        this.createMany([
            {
                customerId: 1,
                masterId: 2,
                serviceId: 3,
                status: enums_1.RecordStatus.Opened,
                createdDate: new Date(),
                visitDate: '2020-05-29T10:27:33.153Z'
            },
            {
                customerId: 1,
                masterId: 1,
                serviceId: 3,
                status: enums_1.RecordStatus.Closed,
                finishStatus: enums_1.RecordStatusFinish.Success,
                createdDate: new Date(),
                visitDate: '2020-05-22T10:27:33.153Z'
            },
            {
                customerId: 2,
                masterId: 4,
                serviceId: 5,
                status: enums_1.RecordStatus.Opened,
                createdDate: new Date(),
                visitDate: '2020-05-25T10:27:33.153Z'
            }
        ]);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map