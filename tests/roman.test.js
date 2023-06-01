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

