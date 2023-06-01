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