const ROMAN_NUMERALS = {
    1: {1: 'I', 5: 'V'},
    10: {1: 'X', 5: 'L'},
};

export function numToRoman(num) {

    let roman = '';

    [10, 1].forEach((power) => {
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
    });

    return roman;
};
