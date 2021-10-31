function convertHTML(str) {
    let reg = /([&<>\'"])/g
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
    }
    return str.replace(reg, item => htmlEntities[item]);
}

console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML('Stuff in "quotation marks"'))