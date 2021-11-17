import React from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import { useEffect } from "react";


function BookCollection({

  filteredBooks,
  filterBooks,
  searchBooks,
}) {
 
  useEffect(() => {
    console.log(filteredBooks)
  })
  return (
  
    <div className="bookcard">
    <SearchBar searchBooks={searchBooks} />
      <GenreFilter filterBooks={filterBooks} />
      <h1>You might like:</h1>
      {filteredBooks.length > 0 ? filteredBooks.map((book) => (
        <BookCard book={book} key={book.id} />
      )): null}
      
    </div>
  );
}

export default BookCollection;