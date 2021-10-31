function sumPrimes(num) {
    let isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
    // return isPrime(num)
    let sum = 0
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum
}

console.log(sumPrimes(10))
console.log(sumPrimes(5))