const squareList = arr => {
    // Only change code below this line
    let newArr = arr.filter(v => {
            // console.log(parseInt(v))
            return v > 0 && v % parseInt(v) == 0
        })
        .map(v => v * v)
    return newArr;
    // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);