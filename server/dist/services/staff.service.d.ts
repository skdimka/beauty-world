import { InMemoryDbService } from './in-memory-db.service';
import { IStaffEntity } from 'src/shared/interfaces';
import { Bucket } from '@google-cloud/storage';
export declare class StaffService extends InMemoryDbService<IStaffEntity> {
    bucket: Bucket;
    constructor();
    uploadPhoto(file: any): Promise<string>;
    private _getFileUrl;
    private _initStorage;
}
