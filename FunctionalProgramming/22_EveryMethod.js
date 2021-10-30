function checkPositive(arr) {
    // Only change code below this line

    return arr.every(v => v > 0)
    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]))
console.log(checkPositive([1, 2, 3, 4, 5]))