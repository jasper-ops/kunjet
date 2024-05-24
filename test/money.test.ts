import { test, expect } from 'vitest';
import { getValidMoney } from '../src/money';

// Test getValidMoney
(function () {
    const testData: Array<[string | number, number | undefined, string]> = [
        [1, undefined, '1'],
        ['1', undefined, '1'],
        ['1.00', undefined, '1'],
        [1.00124000111, undefined, '1.00124'],
        [1.00124000111, 2, '1.0012'],
        [1.00124000111, 4, '1.00124'],
        [1.00124000111, 5, '1.00124'],
        [1.00124000111, 6, '1.00124'],
        [156446.00124000111, 7, '156446.001240001'],
        ['0001.00124000111', undefined, '1.00124'],
        ['0000156446.00124000111', 7, '156446.001240001'],

    ];

    testData.forEach(item => {
        const [money, validDigit, expected] = item;
        test(`getValidMoney ${money} as ${expected}`, () => {
            expect(getValidMoney(money, validDigit)).toBe(expected);
        });
    })
})();
