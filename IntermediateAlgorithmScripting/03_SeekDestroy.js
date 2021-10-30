function destroyer(arr) {
    let remove = Array.from(arguments).slice(1)
    // console.log(remove)
    return arr.filter(v => !remove.includes(v))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))