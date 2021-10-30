function diffArray(arr1, arr2) {
    const newArr = [];

    return arr1.concat(arr2).filter(v => !arr1.includes(v) || !arr2.includes(v));

}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))