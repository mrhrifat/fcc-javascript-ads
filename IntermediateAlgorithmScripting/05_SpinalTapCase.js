function spinalCase(str) {
    let newStr = /\s|_/g
    let str2 = str.replace(/([a-z])([A-Z])/g, '$1 $2')
    return str2.replace(newStr, '-').toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("thisIsSpinalTap"))