function sumFibs(num) {
    let prevNum = 0
    let currentNum = 1
    result = 0
    while (currentNum <= num) {
        if (currentNum % 2 === 1) {
            result += currentNum
        }
        currentNum += prevNum
        prevNum = currentNum - prevNum
        // console.log(currentNum)
    }
    return result;
}

console.log(sumFibs(4))