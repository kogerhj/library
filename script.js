let myLibrary = [];
const bookshelf = document.querySelector(".article-container")

const addButton = document.querySelector('.add-btn')
const addForm = document.querySelector('.book-form')
const overlay = document.querySelector('#overlay')
const closeButton = document.querySelector('.close-btn')
let bookTitle = document.querySelector('#title')
let bookAuthor = document.querySelector('#author')
let bookePages = document.querySelector('#pages')
const addBookButton = document.querySelector('.add-book')


Book.prototype.logInfo = function () {
    if (this.read) {
        return `${this.title} by ${this.author}, ${this.pages} pages, book read`
    } else {
        return `${this.title} by ${this.author}, ${this.pages} pages, not read`
    }
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
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



addButton.addEventListener('click', () => {
    addForm.classList.add('active')
    overlay.classList.add('active')
})

closeButton.addEventListener('click', () => {
    addForm.classList.remove('active')
    overlay.classList.remove('active')
})

//Create function that takes the input from each 
//respective field of the form and put 
//in the Book constructor, then pushes it to the
//myLibrary array

addBookButton.addEventListener('click', () => {
   myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookePages.value, true))
   createBookshelf()
})