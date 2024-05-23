import { test, expect } from 'vitest';
import { isEmail } from '../src/validator';

const trulyEmails = [
    '2080969361@gmmail.com',
    'wx2080969361@gmmail.com',
    'aaa___bbb@gmmail.com',
    'abcdefg@gmmail.com.cn',
];

const fakeEmails = [
    '2080969361',
    'wx2080969361',
    'aaa___bbb',
    'aaaaa@gmail'
];

trulyEmails.forEach(item => {
    test(`${item} is a email address`, () => {
        expect(isEmail(item)).toBe(true);
    });
});

fakeEmails.forEach(item => {
    test(`${item} is not a email address`, () => {
        expect(isEmail(item)).toBe(false);
    });
});


