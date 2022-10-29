let myLibrary = [];
const bookshelf = document.querySelector(".article-container")

const addButton = document.querySelector('.add-btn')
const addForm = document.querySelector('.book-form')
const overlay = document.querySelector('#overlay')
const closeButton = document.querySelector('.close-btn')
let bookTitle = document.querySelector('#title')
let bookAuthor = document.querySelector('#author')
let bookePages = document.querySelector('#pages')
let bookRead = document.querySelector('#yes')
let bookNotRead = document.querySelector('#no')
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

function addToBookshelf() {
    const card = document.createElement('div')
    let info = document.createElement('p')
    let delButton = document.createElement('button')
    info.append(`${myLibrary[myLibrary.length - 1].logInfo()}`)
    delButton.append('Remove')
    delButton.classList.add('delButton')
    card.appendChild(info)
    card.classList.add('card')
    card.appendChild(delButton)
    bookshelf.appendChild(card)
    
}

function activateForm() {
    addForm.classList.add('active')
    overlay.classList.add('active')
}

function removeForm() {
    addForm.classList.remove('active')
    overlay.classList.remove('active')
}


addButton.addEventListener('click', () => activateForm())

closeButton.addEventListener('click', () => removeForm())

//Create function that takes the input from each 
//respective field of the form and put 
//in the Book constructor, then pushes it to the
//myLibrary array

addBookButton.addEventListener('click', () => {
    myLibrary.push(new Book(bookTitle.value, bookAuthor.value, bookePages.value, true))
    addToBookshelf()
    removeForm()
})


