function telephoneCheck(str) {
    let reg1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        reg2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/

    if (reg1.test(str)) {
        return true
    }
    else {
        return reg2.test(str) ? true : false
    }

    // let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    //     rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    // if (rex1.test(str)) {
    //     return true;
    // }
    // else {
    //     return rex2.test(str) ? true : false
    // }

}

console.log(telephoneCheck("555-555-555")) //boolean
console.log(telephoneCheck("1 555-555-5555")) //true
console.log(telephoneCheck("1 (555) 555-5555")) //true
console.log(telephoneCheck("5555555555 ")) //true
console.log(telephoneCheck("555-555-5555")) //true
console.log(telephoneCheck("(555)555-5555")) //true
console.log(telephoneCheck("1(555)555-5555")) //true
console.log(telephoneCheck("555-5555")) //false
console.log(telephoneCheck("5555555")) //false
console.log(telephoneCheck("1 555)555-5555")) //false
console.log(telephoneCheck("1 555 555 5555")) //true
console.log(telephoneCheck("1 456 789 4444")) //true
console.log(telephoneCheck("123**&!!asdf#")) //false
console.log(telephoneCheck("55555555")) //false
console.log(telephoneCheck("6054756961")) //false
console.log(telephoneCheck("2 (757) 622-7382")) //false
console.log(telephoneCheck("0 (757) 622-7382")) //false
console.log(telephoneCheck("-1 (757) 622-7382")) //false
console.log(telephoneCheck("2 757 622-7382")) //false
console.log(telephoneCheck("10 (757) 622-7382")) //false
console.log(telephoneCheck("27576227382")) //false
console.log(telephoneCheck("(275)76227382")) //false
console.log(telephoneCheck("2(757)6227382")) //false
console.log(telephoneCheck("2(757)622-7382")) //false
console.log(telephoneCheck("555)-555-5555")) //false
console.log(telephoneCheck("(555-555-5555")) //false
console.log(telephoneCheck("(555)5(55?)-5555")) //false
console.log(telephoneCheck("55 55-55-555-5")) //false