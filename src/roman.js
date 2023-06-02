const ROMAN_NUMERALS = {
    1: 'I',
    5: 'V',
    10: 'X'
};

export function numToRoman(num) {
    if (ROMAN_NUMERALS[num]) return ROMAN_NUMERALS[num];

    if (ROMAN_NUMERALS[num + 1]) return ROMAN_NUMERALS[1] + ROMAN_NUMERALS[num + 1];

    let roman = '';

    if (num >= 5) {
        roman += ROMAN_NUMERALS[5];
        num -= 5;
    }

    return roman + ROMAN_NUMERALS[1].repeat(num);
};
