import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


function BookDetails({ currentUser }) {
  const [book, setBook] = useState([]);
  const [errors, setErrors] = useState(null);
  const [review, setReview] = useState([]);
  const [newReview, setNewReview] = useState([]);
  const [rating, setRating] = useState([]);
  const [newRating, setNewRating] = useState([]);
  const [hasShelf, setHasShelf] = useState([]);
  const id = useParams().id;
  let history = useHistory();

  
  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
        setReview(book.book_reviews);
        setRating(book.book_ratings);
        setHasShelf(book.shelves);
      });
  }, [id]);

  
  const { title, author, genre, pub_date, image, shelf } =
    book;

  //ADDS A BOOK TO A USER'S SHELF
  function addBook() {
    const bookData = {
      book_id: book.id,
    };
    const res = fetch("/shelves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    if (res.ok) {
      const shelf =  res.json();
      alert(`${title} has been added to your shelf`);
      history.push("/myshelf");
    } else {
      const error =  res.json();
      setErrors(error.message);
    }
  }

  
    function removeBook() {
    const res =  fetch(`/shelves/${shelf}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert(`${title} has been removed from your shelf`);
      history.push("/myshelf");
    }
  }

  
function addReview(e) {
    // e.preventDefault();
    const reviewData = { book_id: book.id, content: newReview };
    const res =  fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    const rev = await res.json();
    setReview([...review, rev]);
  }


   function addRating(e) {
    const ratingData = { book_id: book.id, rating: newRating };
    const res = fetch(`/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingData),
    });
    const rate = res.json();
    setRating(rate);
  }

 
  const total = (together, currentValue) => together + currentValue;

 
  return (
    <div className="bookcard">
      <ul>
        <h3>
          {title} by {author}
        </h3>
        <img src={image} alt={title} className="photo" />
        <ul>
          <b>Genre: </b>
          {genre}
        </ul>
        <ul>
          <b>Page count: </b> {length}
        </ul>
        <ul>
          <b>Published: </b>
          {pub_date}
        </ul>
        <ul>
          <b>Average rating: </b>
          {rating.length > 0
            ? (rating.reduce(total) / rating.length).toFixed(2)
            : "This book hasn't been rated yet"}
        </ul>
      </ul>
      <div>
        <b>Reviews about {title}: </b>
        <ul>
          {review.length > 0 ? review.map((r) => (
                <p key={r.id}>
                  <i>{r}</i>
                </p>
              ))
            : "This book hasn't been reviewed yet"}
        </ul>
        <div className="bookcard">
          {hasShelf.length > 0 ? (
            <button onClick={removeBook}>Remove from my shelf</button>
          ) : (
            <button onClick={addBook}>Add to my shelf</button>
          )}
        </div>

        
        <div>
          <form onSubmit={addRating}>
            <label htmlFor="newRating"> Leave a rating: </label>
            <select
              name="newRating"
              id="newRating"
              onChange={(e) => setNewRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
             
            </select>;
            <input type="submit" value="Rate" />
          </form>
        </div>

        
        <div>
          <form onSubmit={addReview}>
            <textarea
              type="text"
              placeholder="Leave a review..."
              name="newReveiw"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea> &nbsp;
            <input type="submit" value="Review" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;