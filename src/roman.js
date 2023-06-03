const ROMAN_NUMERALS = {
    1: {1: 'I', 5: 'V'},
    10: {1: 'X', 5: 'L'},
    100: {1: 'C', 5: 'D'},
    1000: {1: 'M'}
};

export function numToRoman(num) {
    const powersOfTen = Object.keys(ROMAN_NUMERALS).sort((a, b) => b - a);

    return powersOfTen.reduce((roman, power) => {
        let x = Math.floor(num / power);
        num -= power * x;

        if (x === 4) 
            roman += ROMAN_NUMERALS[power]?.[1] + ROMAN_NUMERALS[power]?.[5];
        else if (x === 9)
            roman += ROMAN_NUMERALS[power]?.[1] + ROMAN_NUMERALS[power * 10]?.[1];
        else if (x >= 5)
            roman += ROMAN_NUMERALS[power]?.[5] + ROMAN_NUMERALS[power]?.[1].repeat(x - 5);
        else if (x > 0)
            roman += ROMAN_NUMERALS[power]?.[1].repeat(x);

        return roman;
    }, '');
};

export function romanToNum(roman) {
    const powersOfTen = Object.keys(ROMAN_NUMERALS).sort((a, b) => b - a).slice(1);

    return powersOfTen.reduce((num, power) => {
        const firstOne = roman.indexOf(ROMAN_NUMERALS[power/10]?.[1]);
        const firstFive = roman.indexOf(ROMAN_NUMERALS[power/10]?.[5]);

        if (Object.values(ROMAN_NUMERALS[power]).includes(roman[0])) {
            let currentRoman = roman;

            let cutOff;

            if (firstOne !== firstFive) {
                cutOff = (firstFive * firstOne > 0) ? Math.min(firstOne, firstFive) : Math.max(firstOne, firstFive);
                currentRoman = roman.slice(0, cutOff);
            }

            if (currentRoman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[power][5])
                num += 4;
            else if (currentRoman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[10 * power]?.[1])
                num += 9;
            else if (currentRoman.startsWith(ROMAN_NUMERALS[power][5]))
                num += (5 + currentRoman.length - 1);
            else
                num += currentRoman.length;

            roman = roman.slice(cutOff);
        }

        return num * power;
    }, 0)
};

