type NeverUnDef<T> = T extends undefined ? never : T extends null ? never : T;


export function isString(str: any): str is string {
    return typeof str === 'string';
}

export function isNumber(num: any): num is number {
    return !isNaN(num) && typeof num === 'number';
}

export function isBoolean(bool: any): bool is boolean {
    return typeof bool === 'boolean';
}

export function isFunction(fn: any): fn is Function {
    return typeof fn === 'function';
}

export function isUndefined(obj: any): obj is undefined {
    return obj === undefined;
}

export function isNull(obj: any): obj is null {
    return obj === null;
}

export function isDefined<T>(obj: T): obj is NeverUnDef<T> {
    return obj !== undefined && obj !== null;
}
