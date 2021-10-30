// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newBookList = [...arr]
    newBookList.push(bookName);
    return newBookList;

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
    const book_index = arr.indexOf(bookName);
    if (book_index >= 0) {
        let newBookList = [...arr]
        newBookList.splice(book_index, 1);
        return newBookList;

        // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);