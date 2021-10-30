function sumAll(arr) {
    // let max = Math.max(arr[0], arr[1])
    // let min = Math.min(arr[0], arr[1])
    // let sum = 0
    // for (let i = min; i <= max; i++) {
    //     // console.log(i)
    //     sum += i
    // }
    // return sum


    // let sum = 0
    // for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    //     sum += i
    //     // console.log(i)
    // }
    // return sum

    let [first, last] = [...arr].sort((a, b) => a - b)
    // console.log(first)
    // console.log(last)
    return first !== last ? first + sumAll([first + 1, last]) : first
}

console.log(sumAll([1, 4]))