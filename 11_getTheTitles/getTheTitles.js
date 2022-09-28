const getTheTitles = function(books) {
    bookTitles = Array();
    for (let i=0; i<books.length; i++){
        bookTitles.push(books[i].title);
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
