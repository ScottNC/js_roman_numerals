const ROMAN_NUMERALS = {
    1: 'I',
    5: 'V'
};

export function numToRoman(num) {
    return num === 5? ROMAN_NUMERALS[5] : ROMAN_NUMERALS[1].repeat(num);
}