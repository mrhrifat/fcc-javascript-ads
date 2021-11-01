function steamrollArray(arr) {
    // return arr.flat(Infinity)
    // let newArr;
    // newArr = arr.join(',').split(',').map(Number)
    // return [...newArr]

    const flat = [].concat(...arr);
    console.log(flat)
    // console.log(flat.some(Array.isArray))
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

// console.log(steamrollArray([1, [2],
//     [3, [
//         [4]
//     ]]
// ]))

console.log(steamrollArray([1, [],
    [3, [
        [4]
    ]]
]))