const numberToRoman = num => {
    const roman = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M',
        2000: 'MM',
        3000: 'MMM'

    }
    // console.log(roman)

    let str = String(num).split('')
    // console.log(typeof (str))

    console.log(str)

    let result = ''
    for (let i = 0; i < str.length; i++) {
        var lookup = str[i] * Math.pow(10, str.length - i - 1)
        console.log(lookup)
        if (roman[lookup]) {
            result += roman[lookup]
        }
    }
    return result
}
console.log(numberToRoman(45))
console.log(numberToRoman(5))
console.log(numberToRoman(3))