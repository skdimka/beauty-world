declare type FilterDataType = string | number | boolean;
export declare enum FilterOperator {
    Contains = "contains",
    NotContains = "notContains",
    StartsWith = "startsWith",
    EndsWith = "endsWith",
    Equals = "equals",
    NotEqual = "notEqual",
    LessThan = "lessThan",
    LessThanOrEqual = "lessThanOrEqual",
    GreaterThan = "greaterThan",
    GreaterThanOrEqual = "greaterThanOrEqual"
}
export declare class Utils {
    static getDateTime(date: string): number;
    static compare(value: FilterDataType, filterText: FilterDataType, operator?: FilterOperator): boolean;
    static contains(value: string, filterText: string): boolean;
    static notContains(value: string, filterText: string): boolean;
    static startsWith(value: string, filterText: string): boolean;
    static endsWith(value: string, filterText: string): boolean;
    static equals(value: string, filterText: string): boolean;
    static notEqual(value: string, filterText: string): boolean;
    static lessThan(value: string, filterText: string): boolean;
    static lessThanOrEqual(value: string, filterText: string): boolean;
    static greaterThan(value: string, filterText: string): boolean;
    static greaterThanOrEqual(value: string, filterText: string): boolean;
    static missing(value: any): boolean;
    static toFilterValue(value: string | number | boolean): string;
}
export {};
