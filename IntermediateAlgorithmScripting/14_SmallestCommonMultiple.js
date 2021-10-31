function smallestCommons(arr) {
    let [min, max] = arr.sort((min, max) => min - max)
    let number = max - min + 1
    // console.log(number)

    //SCM
    let upper = 1
    for (let i = min; i <= max; i++) {
        upper *= i
    }
    // console.log(upper)

    // Test all mutiples of MAX 
    for (let mul = max; mul <= upper; mul += max) {
        // console.log(mul)
        let div = 0
        for (let i = min; i <= max; i++) {
            if (mul % i === 0) {
                div += 1
            }
        }
        // console.log(div)
        if (div == number) {
            return mul
        }
    }
}

console.log(smallestCommons([1, 5]))