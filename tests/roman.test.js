import { numToRoman } from '../src/roman';

test('1 returns I', () => {
    expect(numToRoman(1)).toBe('I');
});

test('2 returns II', () => {
    expect(numToRoman(2)).toBe('II');
});

test('3 returns III', () => {
    expect(numToRoman(3)).toBe('III');
});

test('5 returns V', () => {
    expect(numToRoman(5)).toBe('V');
});

test('4 returns IV', () => {
    expect(numToRoman(4)).toBe('IV');
});

test('6 returns VI', () => {
    expect(numToRoman(6)).toBe('VI');
});

test('8 returns VIII', () => {
    expect(numToRoman(8)).toBe('VIII');
});

test('10 returns X', () => {
    expect(numToRoman(10)).toBe('X');
});

test('9 returns IX', () => {
    expect(numToRoman(9)).toBe('IX');
});

test('multiples of ten', () => {
    expect(numToRoman(20)).toBe('XX');
    expect(numToRoman(40)).toBe('XL');
    expect(numToRoman(50)).toBe('L');
    expect(numToRoman(60)).toBe('LX');
    expect(numToRoman(80)).toBe('LXXX');
});

test('90 to return XC', () => {
    expect(numToRoman(90)).toBe('XC');
});

test('10n + a', () => {
    expect(numToRoman(13)).toBe('XIII');
    expect(numToRoman(15)).toBe('XV');
    expect(numToRoman(37)).toBe('XXXVII');
    expect(numToRoman(84)).toBe('LXXXIV');
    expect(numToRoman(99)).toBe('XCIX');
});




