import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";


function MyShelf({ currentUser }) {

  const [isBooks, setMyBooks] = useState([]);

   
   useEffect(() => {
    function getBooks() {
      const res = fetch (`/users/${currentUser}`);
      if (res.ok) {
        const user = res.json();
        setMyBooks(user.user_books);
      }
    }
    getBooks();
  }, []);

  return (
    <div className="bookcard">
      {isBooks.length > 0 ? (
        isBooks.map((book) => <BookCard book={book} key={book.id} />)
      ) : (
        <h2>No books found</h2>
      )}
    </div>
  );
}

export default MyShelf;