import { ServiceDto, CreateServiceDto } from 'src/shared/dto';
import { ServicesService } from 'src/services';
export declare class ServicesController {
    private readonly services;
    constructor(services: ServicesService);
    getServices(): ServiceDto[];
    getCustomerById(id: number): ServiceDto;
    createService(createServiceDto: CreateServiceDto): ServiceDto;
    updateService(id: number, updateServiceDto: CreateServiceDto): ServiceDto;
    removeService(id: number): void;
}
