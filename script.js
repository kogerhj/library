let myLibrary = [];
const bookshelf = document.querySelector(".article-container")
myLibrary.push(new Book('The Hobbit', 'J.J.R. Tolkein', '300', true), new Book('Cage of Souls', 'Adrian Tchaikovsky', '650', false))


const addButton = document.querySelector('.add-btn')
const addForm = document.querySelector('.book-form')
const overlay = document.querySelector('#overlay')


console.log(addButton)

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.logInfo = function () {
    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, book read`
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read`
    }
}


function createBookshelf() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        let info = document.createElement('p')
        info.append(`${myLibrary[i].logInfo()}`)
        card.appendChild(info)
        card.classList.add('card')
        bookshelf.appendChild(card)
        console.log(card)
    }
}

createBookshelf()

addButton.addEventListener('click', () => {
    addForm.classList.add('active')
    overlay.classList.add('active')
})
