// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // Only change code below this line
    let newArray = [];
    // for (let i = 0; i < this.length; i++) {
    //     if (callback(this[i]) == true) {
    //         newArray.push(this[i])
    //     }
    // }
    this.forEach(x => {
        // console.log(x)
        if (callback(x) == true) {
            // console.log(x)
            newArray.push(x)
        }
    });
    // Only change code above this line
    return newArray;
};


const new_s = s.filter(function (item) {
    return item % 2 === 1;
});

const my_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s)
console.log(my_s)