import { BaseDto } from "./base-dto";
import { ICustomerEntity } from "../interfaces";
export declare class CustomerDto extends BaseDto {
    constructor(customer?: ICustomerEntity);
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    phone: string;
}
export declare class CreateCustomerDto {
    firstName: string;
    patronymic: string;
    surName: string;
    phone: string;
}
