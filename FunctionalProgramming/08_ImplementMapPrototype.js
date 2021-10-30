// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    // Only change code above this line
    return newArray;
};

// Array.prototype.myMap = function (callback) {
//     const newArray = [];
//     // Only change code below this line
//     this.forEach(a=>{
//         newArray.push(callback(a))
//     })
//     // Only change code above this line
//     return newArray;
// };

const map_s = s.map(function (item) {
    return item * 2;
});
const new_s = s.myMap(function (item) {
    return item * 2;
});


console.log(map_s)
console.log(new_s)