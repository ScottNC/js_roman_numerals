const ROMAN_NUMERALS = {
    1: {1: 'I', 5: 'V'},
    10: {1: 'X', 5: 'L'},
    100: {1: 'C', 5: 'D'},
    1000: {1: 'M'}
};

const POWERS_OF_TEN = Object.keys(ROMAN_NUMERALS).sort((a, b) => b - a);

export function numToRoman(num) {
    return POWERS_OF_TEN.reduce((roman, power) => {
        let x = Math.floor(num / power);
        num -= power * x;

        if (x === 4) 
            roman += ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[power][5];
        else if (x === 9)
            roman += ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[power * 10][1];
        else if (x >= 5)
            roman += ROMAN_NUMERALS[power][5] + ROMAN_NUMERALS[power][1].repeat(x - 5);
        else if (x > 0)
            roman += ROMAN_NUMERALS[power][1].repeat(x);

        return roman;
    }, '');
};

export function romanToNum(roman) {
    return POWERS_OF_TEN.reduce((num, power) => {

        if (Object.values(ROMAN_NUMERALS[power]).includes(roman[0])) {
            
            const cutOff= findCutOff(roman, power);
            const currentRoman = roman.slice(0, cutOff);

            if (currentRoman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[power][5])
                num += 4 * power;
            else if (currentRoman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[10 * power]?.[1])
                num += 9 * power;
            else if (currentRoman.startsWith(ROMAN_NUMERALS[power][5]))
                num += (4 + currentRoman.length) * power;
            else
                num += currentRoman.length * power;

            roman = roman.slice(cutOff);
        }

        return num;
    }, 0);
};

function findCutOff (roman, power) {
    while (power > 1) {
        power /= 10;
        const firstOne = roman.indexOf(ROMAN_NUMERALS[power]?.[1]);
        const firstFive = roman.indexOf(ROMAN_NUMERALS[power]?.[5]);
        if (firstFive !== firstOne)
            return (firstFive * firstOne > 0) ? Math.min(firstOne, firstFive) : Math.max(firstOne, firstFive);
        
    }

    return roman.length;
}

