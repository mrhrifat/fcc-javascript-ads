function palidrome(str){
    let regex = /[A-Za-z0-9]+/g;
    let target = str.match(regex).join('').toLowerCase()
    return target === target.split('').reverse().join('')
}
console.log(palidrome("- eye"))
console.log(palidrome("- eye eye"))
console.log(palidrome("A man, a plan, a canal. Panama"))
console.log(palidrome("race car"))
console.log(palidrome("0_0 (: /-\ :) 0-0"))
console.log(palidrome("five|\_/|four"))
console.log(palidrome("My age is 0, 0 si ega ym."))

