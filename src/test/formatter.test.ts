import { test, expect } from 'vitest';
import { formatNumber } from '../formatter';

(function () {
    /**
     * @type {[string | number, Parameters<typeof formatNumber>['1'], string][]}
     */
    const testConfig = [
        [1, undefined, '1'],
        [1, { digit: 2 }, '1.00'],
        [1, { digit: 6 }, '1.000000'],
        ['5.6000', undefined, '5.6'],
        ['11111111.89779456', undefined, '11111111.89779456'],
        ['11111111.89779456', { digit: 2 }, '11111111.90'],
        ['11111111.89779456', { thousandSplit: true }, '11,111,111.89779456'],
        [
            '11111111.89779456',
            { thousandSplit: true, thousandSeparator: '_' },
            '11_111_111.89779456'
        ],
        [
            '9999999999999999999999999999999999999.89779456',
            { thousandSplit: true, digit: 3 },
            '9,999,999,999,999,999,999,999,999,999,999,999,999.898'
        ],
    ]

    testConfig.forEach(item => {
        const [number, options, expected] = item;
        test(`format ${number} as ${expected}`, () => {
            expect(formatNumber(number, options)).toBe(expected);
        })
    })
})();

