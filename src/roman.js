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
    let num = 0;

    powersOfTen.forEach(power => {
        if (roman.startsWith(ROMAN_NUMERALS[power][1]) || roman.startsWith(ROMAN_NUMERALS[power][5]) ) {
            if (roman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[power][5])
                num += 4 * power;
            else if (roman === ROMAN_NUMERALS[power][1] + ROMAN_NUMERALS[10 * power]?.[1])
                num += 9 * power;
            else if (roman.startsWith(ROMAN_NUMERALS[power][5]))
                num += (5 + roman.length - 1) * power;
            else
                num += roman.length * power;
        }
    })

    return num;
};
