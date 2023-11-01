"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryDbService = void 0;
class InMemoryDbService {
    constructor() {
        this._recordMap = {};
    }
    set records(records) {
        if (!records || records.length === 0) {
            this._recordMap = {};
        }
        this._recordMap = records.reduce((previous, current) => {
            return Object.assign(Object.assign({}, previous), { [current.id]: current });
        }, this._recordMap);
    }
    get records() {
        return Object.keys(this._recordMap).map(key => this._recordMap[key]);
    }
    create(record) {
        const id = record.id || this._getNextId();
        const newRecord = Object.assign(Object.assign({}, record), { id });
        this._recordMap = Object.assign(Object.assign({}, this._recordMap), { [id]: newRecord });
        return newRecord;
    }
    createMany(records) {
        return records.map(record => this.create(record));
    }
    update(record) {
        this._recordMap = Object.assign(Object.assign({}, this._recordMap), { [record.id]: Object.assign({}, record) });
    }
    updateMany(records) {
        for (const record of records) {
            this.update(record);
        }
    }
    delete(id) {
        const _a = this._recordMap, _b = id, removed = _a[_b], remainder = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        this._recordMap = Object.assign({}, remainder);
    }
    deleteMany(ids) {
        for (const id of ids) {
            this.delete(id);
        }
    }
    get(id) {
        return this._recordMap[id];
    }
    getMany(ids) {
        const records = ids
            .filter(id => this._recordMap[id])
            .map(id => {
            return this._recordMap[id];
        });
        return records;
    }
    getAll() {
        return this.records || [];
    }
    query(predicate) {
        return this.records.filter(predicate);
    }
    _getNextId() {
        if (this.records && this.records.length > 0) {
            return Math.max(...this.records.map(r => r.id)) + 1;
        }
        return 1;
    }
}
exports.InMemoryDbService = InMemoryDbService;
//# sourceMappingURL=in-memory-db.service.js.map