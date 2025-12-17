import React from "react";
import "./Books.css";
import useBooks from "../../integrations/hooks/useBooks";

const handleBack = () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "/";
  }
};

const Books = () => {
  const { books, loading, error } = useBooks();
  return (
    <div className="books-page-container">
      <header className="books-header">
        <button
          className="books-back-btn"
          onClick={handleBack}
          aria-label="Back"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <h1>Books</h1>
      </header>
      <div className="books-grid-container">
        {loading ? (
          <div
            style={{
              color: "#4f46e5",
              fontWeight: 600,
              fontSize: "1.2rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            Loading books...
          </div>
        ) : error ? (
          <div
            style={{
              color: "red",
              fontWeight: 600,
              fontSize: "1.1rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            Failed to load books.
          </div>
        ) : (
          <div className="books-grid">
            {books && books.length > 0 ? (
              books.map((book) => (
                <div className="book-tile" key={book.id}>
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="book-cover"
                  />
                  <div className="book-title">{book.title}</div>
                </div>
              ))
            ) : (
              <div
                style={{
                  color: "#4f46e5",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                No books found.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
