import { OrderDto, CreateOrderDto, UpdateOrderDto } from 'src/shared/dto';
import { RecordStatus, RecordStatusFinish } from 'src/shared/enums';
import { OrdersService, CustomersService, StaffService, ServicesService } from 'src/services';
export declare class OrdersController {
    private readonly ordersService;
    private readonly customerService;
    private readonly staffService;
    private readonly servicesService;
    constructor(ordersService: OrdersService, customerService: CustomersService, staffService: StaffService, servicesService: ServicesService);
    getOrders(from: string, to: string, status: RecordStatus, search: string): OrderDto[];
    createOrder(createOrderDto: CreateOrderDto): OrderDto;
    updateOrder(id: number, updateOrderDto: UpdateOrderDto): OrderDto;
    closeOrder(id: number, finishStatus: RecordStatusFinish): OrderDto;
    removeOrder(id: number): void;
    private _getOrderDto;
}
