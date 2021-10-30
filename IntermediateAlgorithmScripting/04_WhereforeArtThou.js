function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let srcKey = Object.keys((source))
    // console.log(Object.keys((source)))
    return collection.filter(v => {
        // console.log(v)
        return srcKey.every(k => {

            return v.hasOwnProperty(k) && v[k] === source[k]
        })
    })

    // Only change code above this line
    // return arr
}

console.log(whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
}))