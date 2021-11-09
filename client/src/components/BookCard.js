import React from "react";


function BookCard({ book }) {
    const details = `/books/${book.id}`;
  
    // displays information for each book in the BookCollection component
    return (
      <div>
          <ul className="bookcard">
            <h5>
              {book.title}
            </h5>
            <img src={book.image} alt={book.title} className="photo" />
            <h2>by {book.author}</h2>
            <a href={details}>Details about {book.title}</a>
          </ul>
      </div>
    );
  }

export default BookCard;