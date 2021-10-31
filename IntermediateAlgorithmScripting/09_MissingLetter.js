function fearNotLetter(str) {
    let i, j = 0,
        m = 122
    i = str.charCodeAt(0)

    // console.log(i)
    while (i <= m && j < str.length) {
        if (String.fromCharCode(i) !== str.charAt(j)) {
            return String.fromCharCode(i)
        }
        i++, j++
    }
    return undefined
}

console.log(fearNotLetter("abce"))