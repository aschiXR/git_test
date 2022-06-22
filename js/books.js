// function Book(title, author, numOfPages, isRead) {
//     this.title = title;
//     this.author = author;
//     this.numOfPages = numOfPages;
//     this.isRead = isRead;
//     this.bookInfo = [this.title, this.author, this.numOfPages, this.isRead];
// }

// const book1 = new Book ('Harry Potter', 'Ministry of Magic', 356, true);
// const book2 = new Book ('The Hobbit', 'J.R.R. Tolkien', 893, false);

// console.log(book1.bookInfo);
// console.log(book2.bookInfo);

function saveForm() {
    document.getElementsByClassName("submitBtn").innerHTML = alert("Form submitted successfully!");
}