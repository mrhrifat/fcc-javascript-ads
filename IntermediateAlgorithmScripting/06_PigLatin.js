function translatePigLatin(str) {
    let check = /^[^a|e|i|o|u]+/g
    // console.log(str.match(check))
    let afterCheck = str.match(check)

    return afterCheck !== null ? str.replace(check, '').concat(afterCheck).concat('ay') : str.concat('way')

}

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("all"))