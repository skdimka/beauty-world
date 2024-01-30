import { CustomersService } from 'src/services';
import { CustomerDto, CreateCustomerDto } from 'src/shared/dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    getCustomers(req: any, search: string): CustomerDto[];
    getCustomerById(id: number): CustomerDto;
    createCustomer(createCustomerDto: CreateCustomerDto): CustomerDto;
    updateCustomer(id: number, updateCustomer: CreateCustomerDto): CustomerDto;
    removeCustomer(id: number): void;
}
