import { BaseDto } from "./base-dto";
import { RecordStatus, RecordStatusFinish } from "../enums";
import { IOrderEntity } from "../interfaces";
import { StaffDto } from "./staff.dto";
import { CustomerDto } from "./customer.dto";
import { ServiceDto } from "./service.dto";
export declare class OrderDto extends BaseDto {
    constructor(order?: IOrderEntity);
    createdDate: string;
    customer: CustomerDto;
    visitDate: string;
    status: RecordStatus;
    master: StaffDto;
    service: ServiceDto;
    finishStatus: RecordStatusFinish;
}
export declare class CreateOrderDto {
    name: string;
    phone: string;
    masterId?: number;
    serviceId?: number;
    visitDate?: string;
}
export declare class UpdateOrderDto {
    customerId: number;
    masterId?: number;
    serviceId?: number;
    visitDate?: string;
    status?: RecordStatus;
    finishStatus?: RecordStatusFinish;
}
