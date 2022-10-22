let myLibrary = [];


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


