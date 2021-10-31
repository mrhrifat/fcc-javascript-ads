function uniteUnique(arr) {
    let args = [...arguments]
    let results = []
    // console.log(args)
    for (let i = 0; i < args.length; i++) {
        // console.log(args[i])
        for (let j = 0; j < args[i].length; j++) {
            // console.log(args[i][j])
            if (!results.includes(args[i][j])) {
                // console.log(args[i][j])
                results.push(args[i][j])
            }
            // console.log("R " + results)
        }
    }
    return results
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))