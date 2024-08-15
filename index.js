function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((listBook) => renderBooks(listBook));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  let total = 0;
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
    total = total + book.numberOfPages;
  });
}
