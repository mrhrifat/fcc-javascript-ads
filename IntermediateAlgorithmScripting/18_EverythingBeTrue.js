function truthCheck(collection, pre) {
    let counter = 0
    for (let i in collection) {
        // console.log(collection[i])
        if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
            counter++
            // console.log(Boolean(collection[i][pre]))
            // console.log(collection[i].hasOwnProperty(pre))
        }
    }
    return counter == collection.length
}

console.log(truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
}, {
    "user": "Dipsy",
    "sex": "male"
}, {
    "user": "Laa-Laa",
    "sex": "female"
}, {
    "user": "Po",
    "sex": "female"
}], "sex"))