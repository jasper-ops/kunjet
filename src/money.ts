import { isDecimalString } from "./validator";

export function getValidMoney(money: string | number, validDigit = 3) {
    if (typeof money !== 'string') {
        money = String(money);
    }

    if (!isDecimalString(money)) {
        throw new Error('Invalid money format');
    }
    const re = new RegExp(`\\-?\\d+\\.0*\\d{${validDigit}}`);
    let matchedMoney = money.match(re)?.[0] ?? money;
    matchedMoney = matchedMoney.replace(/^0+/, '');

    const decimalIndex = matchedMoney.indexOf('.');

    if (decimalIndex !== -1) {
        const decimalPart = matchedMoney.slice(decimalIndex + 1);
        const trimmedDecimalPart = decimalPart.replace(/0+$/, '');
        return `${matchedMoney.slice(0, decimalIndex)}${trimmedDecimalPart ? '.' + trimmedDecimalPart : ''}`;
    } else {
        return matchedMoney;
    }
}
