import BookCard from "./BookCard";
import react from "react";

function MyShelf({ books }){
    return (
        <div className="bookcard">
          
            {/* {books.map((book) => <BookCard book={book} key={book.id} />)} */}
           
            <h2>No books found</h2>
          
        </div>
      );
}





export default MyShelf;