function myReplace(str, before, after) {
    // if (/^[A-Z]/.test(before)) {
    //     after = after[0].toUpperCase() + after.substring(1)
    // } else {
    //     after = after[0].toLowerCase() + after.substring(1)
    // }
    /^[A-Z]/.test(before) ? after = after[0].toUpperCase() + after.substring(1) :
        after = after[0].toLowerCase() + after.substring(1)
    return str.replace(before, after)
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))