const ROMAN_NUMERALS = {
    1: 'I',
    5: 'V',
    10: 'X'
};

export function numToRoman(num) {
    let roman = '';

    if (num === 10) return ROMAN_NUMERALS[10];

    if (num >= 5) {
        roman += ROMAN_NUMERALS[5];
        num -= 5;
    }

    return roman + romanFiveOrLess(num);
};

function romanFiveOrLess(num) {
    return num === 4 ? ROMAN_NUMERALS[1] + ROMAN_NUMERALS[5]: ROMAN_NUMERALS[1].repeat(num);
}