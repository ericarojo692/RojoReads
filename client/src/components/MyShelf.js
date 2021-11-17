import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import BookDetails from "./BookDetails"


function MyShelf({ currentUser, isBooks }) {

  // const [isBooks, setMyBooks] = useState([]);
  


   
  //  useEffect(() => {
  //    fetch(`/users/${currentUser.id}`)
  //    .then(resp=>resp.json()) 
  //    .then(data=>setMyBooks(data.user_books))
  //   //   if (resp.ok) {
  //   //     resp.json().then(user =>{
  //   //       setMyBooks(user.user_books);
  //   //     })
  //   //   }
  //   //  });
  //   // getBooks();
  // }, []);

  return (
   
    <div className="bookcard">
       {console.log(currentUser.user_books)}
      {isBooks.length > 0 ? (
        isBooks.map((book) => <BookCard book={book} key={book.id} />)
      ) : (
       
        <h2>No books found</h2>
      )}
    </div>
  );
}

export default MyShelf;