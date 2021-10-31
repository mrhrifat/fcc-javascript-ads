function dropElements(arr, func, s = false) {
    let newArr
    newArr = arr.filter(v => {
        if (func(v)) s = true;
        return s
    })
    return newArr
}

console.log(dropElements([1, 2, 3], function (n) {
    return n < 3;
}))
console.log(dropElements([1, 2, 3], function (n) {
    return n > 0;
}))
console.log(dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
}))