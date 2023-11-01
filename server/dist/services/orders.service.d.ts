import { InMemoryDbService } from './in-memory-db.service';
import { IOrderEntity } from 'src/shared/interfaces';
export declare class OrdersService extends InMemoryDbService<IOrderEntity> {
    constructor();
}
