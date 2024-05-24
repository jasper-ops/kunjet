import { test, expect } from 'vitest';
import { isBoolean, isFunction, isNumber, isString, isUndefined } from '../src/type-validator';
import { noop } from '../src';

test('test isString', () => {
    expect(isString('')).toBe(true);
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
});

test('test isNumber', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
});

test('test isBoolean', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(NaN)).toBe(false);
})

test('test isFunction', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(function () { })).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(noop)).toBe(true);
})

test('test isUndefined', () => {
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined(function () { })).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(noop)).toBe(false);
})
