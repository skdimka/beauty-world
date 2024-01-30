import { InMemoryDBEntity } from "src/shared/interfaces";
export declare class InMemoryDbService<T extends InMemoryDBEntity> {
    private _recordMap;
    set records(records: T[]);
    get records(): T[];
    create(record: Partial<T>): T;
    createMany(records: Array<Partial<T>>): T[];
    update(record: T): void;
    updateMany(records: T[]): void;
    delete(id: number): void;
    deleteMany(ids: number[]): void;
    get(id: number): T;
    getMany(ids: number[]): T[];
    getAll(): T[];
    query(predicate: (record: T) => boolean): T[];
    private _getNextId;
}
