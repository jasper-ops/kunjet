export function isEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function isChinesePhone(phone: string) {
    const re = /^1[3456789]\d{9}$/;
    return re.test(phone);
}

export function isIntegerString(str: string) {
    const re = /^-?\d+$/;
    return re.test(str);
}

export function isDecimalString(str: string) {
    const re = /^-?\d+(?:\.\d+)?$/;
    return re.test(str);
}

export function isUrl(url: string) {
    const re = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    return re.test(url);
}