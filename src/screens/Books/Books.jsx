import React from "react";
import "./Books.css";

// Example book data (replace with props or API data as needed)
const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
  { id: 3, title: "1984", author: "George Orwell", cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", cover: "https://covers.openlibrary.org/b/id/8091016-L.jpg" },
  { id: 5, title: "Moby-Dick", author: "Herman Melville", cover: "https://covers.openlibrary.org/b/id/5552226-L.jpg" },
  { id: 6, title: "War and Peace", author: "Leo Tolstoy", cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", cover: "https://covers.openlibrary.org/b/id/8775116-L.jpg" },
  { id: 9, title: "The Catcher in the Rye", author: "J.D. Salinger", cover: "https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { id: 10, title: "The Odyssey", author: "Homer", cover: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },

  { id: 11, title: "Crime and Punishment", author: "Fyodor Dostoevsky", cover: "https://covers.openlibrary.org/b/id/8231990-L.jpg" },
  { id: 12, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", cover: "https://covers.openlibrary.org/b/id/8232001-L.jpg" },
  { id: 13, title: "Jane Eyre", author: "Charlotte Brontë", cover: "https://covers.openlibrary.org/b/id/8225236-L.jpg" },
  { id: 14, title: "Wuthering Heights", author: "Emily Brontë", cover: "https://covers.openlibrary.org/b/id/8235112-L.jpg" },
  { id: 15, title: "The Divine Comedy", author: "Dante Alighieri", cover: "https://covers.openlibrary.org/b/id/8232015-L.jpg" },
  { id: 16, title: "Les Misérables", author: "Victor Hugo", cover: "https://covers.openlibrary.org/b/id/8232045-L.jpg" },
  { id: 17, title: "Anna Karenina", author: "Leo Tolstoy", cover: "https://covers.openlibrary.org/b/id/8232084-L.jpg" },
  { id: 18, title: "The Iliad", author: "Homer", cover: "https://covers.openlibrary.org/b/id/8232101-L.jpg" },
  { id: 19, title: "The Lord of the Rings", author: "J.R.R. Tolkien", cover: "https://covers.openlibrary.org/b/id/8232120-L.jpg" },
  { id: 20, title: "Fahrenheit 451", author: "Ray Bradbury", cover: "https://covers.openlibrary.org/b/id/8228695-L.jpg" },

  { id: 21, title: "The Alchemist", author: "Paulo Coelho", cover: "https://covers.openlibrary.org/b/id/8277896-L.jpg" },
  { id: 22, title: "Don Quixote", author: "Miguel de Cervantes", cover: "https://covers.openlibrary.org/b/id/8232145-L.jpg" },
  { id: 23, title: "The Picture of Dorian Gray", author: "Oscar Wilde", cover: "https://covers.openlibrary.org/b/id/8232159-L.jpg" },
  { id: 24, title: "Dracula", author: "Bram Stoker", cover: "https://covers.openlibrary.org/b/id/8232173-L.jpg" },
  { id: 25, title: "Frankenstein", author: "Mary Shelley", cover: "https://covers.openlibrary.org/b/id/8232187-L.jpg" },
  { id: 26, title: "The Count of Monte Cristo", author: "Alexandre Dumas", cover: "https://covers.openlibrary.org/b/id/8232202-L.jpg" },
  { id: 27, title: "A Tale of Two Cities", author: "Charles Dickens", cover: "https://covers.openlibrary.org/b/id/8232216-L.jpg" },
  { id: 28, title: "Great Expectations", author: "Charles Dickens", cover: "https://covers.openlibrary.org/b/id/8232230-L.jpg" },
  { id: 29, title: "The Old Man and the Sea", author: "Ernest Hemingway", cover: "https://covers.openlibrary.org/b/id/8232244-L.jpg" },
  { id: 30, title: "Of Mice and Men", author: "John Steinbeck", cover: "https://covers.openlibrary.org/b/id/8232258-L.jpg" },

  { id: 31, title: "The Sun Also Rises", author: "Ernest Hemingway", cover: "https://covers.openlibrary.org/b/id/8232272-L.jpg" },
  { id: 32, title: "Slaughterhouse-Five", author: "Kurt Vonnegut", cover: "https://covers.openlibrary.org/b/id/8232286-L.jpg" },
  { id: 33, title: "The Road", author: "Cormac McCarthy", cover: "https://covers.openlibrary.org/b/id/8232300-L.jpg" },
  { id: 34, title: "Dune", author: "Frank Herbert", cover: "https://covers.openlibrary.org/b/id/8101356-L.jpg" },
  { id: 35, title: "The Handmaid’s Tale", author: "Margaret Atwood", cover: "https://covers.openlibrary.org/b/id/8232314-L.jpg" },
  { id: 36, title: "The Name of the Rose", author: "Umberto Eco", cover: "https://covers.openlibrary.org/b/id/8232328-L.jpg" },
  { id: 37, title: "Life of Pi", author: "Yann Martel", cover: "https://covers.openlibrary.org/b/id/8232342-L.jpg" },
  { id: 38, title: "The Book Thief", author: "Markus Zusak", cover: "https://covers.openlibrary.org/b/id/8232356-L.jpg" },
  { id: 39, title: "The Kite Runner", author: "Khaled Hosseini", cover: "https://covers.openlibrary.org/b/id/8232370-L.jpg" },
  { id: 40, title: "The Shining", author: "Stephen King", cover: "https://covers.openlibrary.org/b/id/8232384-L.jpg" },

  { id: 41, title: "It", author: "Stephen King", cover: "https://covers.openlibrary.org/b/id/8232398-L.jpg" },
  { id: 42, title: "The Stand", author: "Stephen King", cover: "https://covers.openlibrary.org/b/id/8232412-L.jpg" },
  { id: 43, title: "The Color Purple", author: "Alice Walker", cover: "https://covers.openlibrary.org/b/id/8232426-L.jpg" },
  { id: 44, title: "Beloved", author: "Toni Morrison", cover: "https://covers.openlibrary.org/b/id/8232440-L.jpg" },
  { id: 45, title: "Invisible Man", author: "Ralph Ellison", cover: "https://covers.openlibrary.org/b/id/8232454-L.jpg" },
  { id: 46, title: "The Stranger", author: "Albert Camus", cover: "https://covers.openlibrary.org/b/id/8232468-L.jpg" },
  { id: 47, title: "Lolita", author: "Vladimir Nabokov", cover: "https://covers.openlibrary.org/b/id/8232482-L.jpg" },
  { id: 48, title: "The Metamorphosis", author: "Franz Kafka", cover: "https://covers.openlibrary.org/b/id/8232496-L.jpg" },
  { id: 49, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", cover: "https://covers.openlibrary.org/b/id/8232510-L.jpg" },
  { id: 50, title: "The Trial", author: "Franz Kafka", cover: "https://covers.openlibrary.org/b/id/8232524-L.jpg" }
];


const handleBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
};

const Books = () => {
  return (
    <div className="books-page-container">
      <header className="books-header">
        <button className="books-back-btn" onClick={handleBack} aria-label="Back">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <h1>Books</h1>
      </header>
      <div className="books-grid-container">
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-tile" key={book.id}>
              <img src={book.cover} alt={book.title} className="book-cover" />
              <div className="book-title">{book.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
