import { isDecimalString } from "./validator";

export interface FormatterOptions {
    thousandSplit?: boolean;
    thousandSeparator?: string;
    digit?: number;
}

export function formatNumber(number: string | number, options: FormatterOptions = {}) {
    const {
        thousandSplit = false,
        thousandSeparator = ',',
        digit = 0
    } = options;
    let numStr = typeof number === 'string' ? number : String(number);

    if (!isDecimalString(numStr)) {
        return number;
    }

    let [intStr, decimalStr = ''] = numStr.split('.');

    const float = parseFloat(`0.${decimalStr}`);
    if (digit > 0) {
        decimalStr = float.toFixed(digit).substring(2);
    } else {
        decimalStr = float.toString().substring(2);
    }

    if (thousandSplit) {
        intStr = intStr.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    }

    if (decimalStr) {
        numStr = `${intStr}.${decimalStr}`
    } else {
        numStr = intStr;
    }

    return numStr;
}
