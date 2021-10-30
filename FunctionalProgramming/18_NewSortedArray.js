// const globalArray = [5, 6, 3, 2, 9];
const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
    // Only change code below this line
    let newArr = [...arr]
    return newArr = newArr.sort((a, b) => a - b)

    // Only change code above this line
}

console.log(nonMutatingSort(globalArray))
console.log(globalArray)