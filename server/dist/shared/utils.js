"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = exports.FilterOperator = void 0;
var FilterOperator;
(function (FilterOperator) {
    FilterOperator["Contains"] = "contains";
    FilterOperator["NotContains"] = "notContains";
    FilterOperator["StartsWith"] = "startsWith";
    FilterOperator["EndsWith"] = "endsWith";
    FilterOperator["Equals"] = "equals";
    FilterOperator["NotEqual"] = "notEqual";
    FilterOperator["LessThan"] = "lessThan";
    FilterOperator["LessThanOrEqual"] = "lessThanOrEqual";
    FilterOperator["GreaterThan"] = "greaterThan";
    FilterOperator["GreaterThanOrEqual"] = "greaterThanOrEqual";
})(FilterOperator = exports.FilterOperator || (exports.FilterOperator = {}));
class Utils {
    static getDateTime(date) {
        return (new Date(date.slice(0, 10))).getTime();
    }
    static compare(value, filterText, operator = FilterOperator.Contains) {
        const formattedValue = Utils.toFilterValue(value);
        const formattedFilterText = Utils.toFilterValue(filterText);
        return this[operator](formattedValue, formattedFilterText);
    }
    static contains(value, filterText) {
        return value.indexOf(filterText) !== -1;
    }
    static notContains(value, filterText) {
        return value.indexOf(filterText) === -1;
    }
    static startsWith(value, filterText) {
        return value.indexOf(filterText) === 0;
    }
    static endsWith(value, filterText) {
        const index = value.lastIndexOf(filterText);
        return index >= 0 && index === (value.length - filterText.length);
    }
    static equals(value, filterText) {
        return value === filterText;
    }
    static notEqual(value, filterText) {
        return value !== filterText;
    }
    static lessThan(value, filterText) {
        return value < filterText;
    }
    static lessThanOrEqual(value, filterText) {
        return value <= filterText;
    }
    static greaterThan(value, filterText) {
        return value > filterText;
    }
    static greaterThanOrEqual(value, filterText) {
        return value >= filterText;
    }
    static missing(value) {
        return value === undefined || value === null || value === '';
    }
    static toFilterValue(value) {
        if (this.missing(value)) {
            return '';
        }
        return value
            .toString()
            .replace(/[-+_()]/g, '')
            .replace(/ё/gi, 'е')
            .toLocaleLowerCase();
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map