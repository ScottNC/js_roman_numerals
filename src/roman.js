const ROMAN_NUMERALS = {
    1: 'I',
    5: 'V'
};

export function numToRoman(num) {
    switch (num) {
        case 5:
            return ROMAN_NUMERALS[5];
        case 4:
            return ROMAN_NUMERALS[1] + ROMAN_NUMERALS[5];
        default:
            return ROMAN_NUMERALS[1].repeat(num);
    }
}