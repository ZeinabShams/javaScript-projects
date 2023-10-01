
# BookList

This code is a simple book management system that allows users to add books to a list and display them in a table format.

## Prerequisites

Before running this code, make sure you have the following:

- A web browser
- HTML file with the necessary elements (button, input fields, table container)
- JavaScript file with the code provided in this README.md

## Getting Started

1. Clone or download the code from the repository.
2. Open the HTML file in your web browser.
3. The book management system will be displayed on the webpage.

## Usage

To add a book to the list:

1. Enter the book's name, author, and year of publication in the respective input fields.
2. Click the "Add Book" button.
3. The book will be added to the list and displayed in the table.

Note: All input fields must be filled in order to add a book. If any field is left empty, an alert message will be displayed.

## Functions

### addBook()

This function is called when the "Add Book" button is clicked. It checks if all input fields are filled and adds the book to the list.

### setIntoLocalStorage(booksList)

This function stores the book list in the browser's local storage using JSON.stringify().

### emptyInputs()

This function clears the input fields after a book has been added.

### bookGenerator(booklist)

This function generates the table of books in the DOM. It creates a row for each book and appends it to the table container.

### getFromLocalStorage()

This function retrieves the book list from the local storage and generates the table of books on page load.

## Contributing

Contributions are welcome! If you have any suggestions or improvements for this code, please submit a pull request.
