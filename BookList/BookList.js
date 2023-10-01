
let $=document
const bookBtn=$.querySelector('button')
const nameInput=$.querySelector('#input1')
const authorInput=$.querySelector('#input2')
const yearInput=$.querySelector('#input3')
const container=$.querySelector('#tableContainer') 
let books=[]
function addBook(){
    if(nameInput.value=='' || authorInput.value=='' || yearInput.value==''){
        alert('please full all inputs.')
    }else{
        let newBookObj={
            id:books.length+1,
            name:nameInput.value,
            author:authorInput.value,
            year:yearInput.value
        }
        books.push(newBookObj)
        setIntoLocalStorage(books)
    }
}
function  setIntoLocalStorage(booksList){
    localStorage.setItem('books',JSON.stringify(booksList))
    emptyInputs()
    bookGenerator(books)//because I want when books add in local then genetate book list in Dom
}
function emptyInputs(){
    nameInput.value=''
    authorInput.value=''
    yearInput.value=''
}
function bookGenerator(booklist){
    container.innerHTML=''//for solving this problem that I add book. this line emptying container and provid adding repetitive book in container
    booklist.forEach(function(book){
        let row = $.createElement("div");
        row.classList.add("row");
        let col1 = $.createElement("div");
        col1.innerText = book.name;
        let col2 = $.createElement("div");
        col2.innerText = book.author;
        let col3 = $.createElement("div");
        col3.innerText = book.year;
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        container.appendChild(row);
    })
}
function getFromLocalStorage(){
    let localStorageBooks=JSON.parse(localStorage.getItem('books'))
    if(localStorageBooks){
        books=localStorageBooks
        bookGenerator(books)
    }
}
window.addEventListener('load',getFromLocalStorage)
bookBtn.addEventListener('click',addBook)