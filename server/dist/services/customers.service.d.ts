import { InMemoryDbService } from './in-memory-db.service';
import { ICustomerEntity } from 'src/shared/interfaces';
export declare class CustomersService extends InMemoryDbService<ICustomerEntity> {
    constructor();
}
