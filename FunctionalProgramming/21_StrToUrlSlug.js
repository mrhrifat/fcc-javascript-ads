// Only change code below this line
function urlSlug(title) {

    return title.toLowerCase().trim().split(/\s+/).join("-")
}
// Only change code above this line

console.log(urlSlug('Stop Using Reduce'))
console.log(urlSlug('  Winter Is Coming'))