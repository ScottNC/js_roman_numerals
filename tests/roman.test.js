import { numToRoman, romanToNum } from '../src/roman';

describe("numToRoman", () => {
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

    test('multiples of 100', () => {
        expect(numToRoman(100)).toBe('C');
        expect(numToRoman(300)).toBe('CCC');
        expect(numToRoman(500)).toBe('D');
        expect(numToRoman(700)).toBe('DCC');
        expect(numToRoman(900)).toBe('CM');
        expect(numToRoman(1000)).toBe('M');
    })
});

describe("romanToNum", () => {
    test('I returns 1', () => {
        expect(romanToNum('I')).toBe(1);
    });

    test('II returns 2', () => {
        expect(romanToNum('II')).toBe(2);
    });

    test('III returns 3', () => {
        expect(romanToNum('III')).toBe(3);
    });

    test('V returns 5', () => {
        expect(romanToNum('V')).toBe(5);
    });

    test('IV returns 4', () => {
        expect(romanToNum('IV')).toBe(4);
    });

    test('VI returns 6', () => {
        expect(romanToNum('VI')).toBe(6);
    });

    test('VIII returns 8', () => {
        expect(romanToNum('VIII')).toBe(8);
    });

    // test('X returns 10', () => {
    //     expect(romanToNum('X')).toBe(10);
    // });

    // test('IX returns 9', () => {
    //     expect(romanToNum('IX')).toBe(9);
    // });

    // test('multiples of ten', () => {
    //     expect(romanToNum('XX')).toBe(20);
    //     expect(romanToNum('XL')).toBe(40);
    //     expect(romanToNum('L')).toBe(50);
    //     expect(romanToNum('LX')).toBe(60);
    //     expect(romanToNum('LXXX')).toBe(80);
    // });

    // test('XC returns 90', () => {
    //     expect(romanToNum('XC')).toBe(90);
    // });

    // test('10n + a', () => {
    //     expect(romanToNum('XIII')).toBe(13);
    //     expect(romanToNum('XV')).toBe(15);
    //     expect(romanToNum('XXXVII')).toBe(37);
    //     expect(romanToNum('LXXXIV')).toBe(84);
    //     expect(romanToNum('XCIX')).toBe(99);
    // });

    // test('multiples of 100', () => {
    //     expect(romanToNum('C')).toBe(100);
    //     expect(romanToNum('CCC')).toBe(300);
    //     expect(romanToNum('D')).toBe(500);
    //     expect(romanToNum('DCC')).toBe(700);
    //     expect(romanToNum('CM')).toBe(900);
    //     expect(romanToNum('M')).toBe(1000);
    // });
});
