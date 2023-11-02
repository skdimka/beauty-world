import { BaseDto } from "./base-dto";
import { IServiceEntity } from "../interfaces";
export declare class ServiceDto extends BaseDto {
    constructor(service?: IServiceEntity);
    name: string;
    description: string;
    price: number;
    photo: string;
    isPopular: boolean;
}
export declare class CreateServiceDto extends BaseDto {
    name: string;
    description: string;
    categoryId: number;
    price: number;
    photo: string;
    isPopular: boolean;
}
