let myLibrary = ["Book One", "Book Two", "Book Three"];
const bookshelf = document.querySelector(".article-container")

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.logInfo = function () {
    if(this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, book read`
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read`
    }
}


function createBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        bookshelf.appendChild(card)
        console.log(card)
    }
}

console.log(bookshelf)
createBookshelf()
