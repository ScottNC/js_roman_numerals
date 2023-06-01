const romanNumeral = 'I';

export function numToRoman(num) {
    return num === 5? 'V' : romanNumeral.repeat(num);
}