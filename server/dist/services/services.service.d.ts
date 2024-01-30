import { InMemoryDbService } from './in-memory-db.service';
import { IServiceEntity } from 'src/shared/interfaces';
export declare class ServicesService extends InMemoryDbService<IServiceEntity> {
    constructor();
}
