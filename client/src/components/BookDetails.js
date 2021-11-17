import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";



function BookDetails({ setCurrentUser, toggleRefresh }) {
  const [book, setBook] = useState([]);
  const [errors, setErrors] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [newRating, setNewRating] = useState(0);
  const [shelves, setShelves] = useState([]);
  const id = useParams().id;
  let history = useHistory();

  console.log(id)
  //FETCH A SINGLE BOOK FROM BACKEND
  useEffect(() => {
    fetch(`/books/${id}`) 
    
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
        setReviews(book.book_reviews);
        setRating(book.book_ratings);
        setShelves(book.shelves);
      });
  }, [id]);

  

  //DECONSTRUCT BOOK INFO FOR EASE OF USE
  const { title, author, genre, pub_date, image, shelf } =
    book;

  //ADDS A BOOK TO A USER'S SHELF
  async function addBook() {
    const bookData = {
      book_id: book.id,
    };
    const res = await fetch("/shelves", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });
    if (res.ok) {
      const shelf = await res.json();
      console.log(shelf)
      alert(`${title} has been added to your shelf`);
      toggleRefresh()
      history.push("/myshelf");
    } else {
      const error = await res.json();
      setErrors(error.message);
    }
  }

  // REMOVE BOOK FROM MYSHELF
  async function removeBook() {
    const res = await fetch(`/shelves/${shelf}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert(`${title} has been removed from your shelf`);
      toggleRefresh()
      history.push("/myshelf");
    }
  }

  //POST REQUEST TO ADD A REVIEW
  async function addReview(e) {
    const reviewData = { book_id: book.id, content: newReview };
    const res = await fetch(`/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });
    const rev = await res.json();
    setReviews([...reviews, rev]);
  }

  
  async function addRating(e) {
   e.preventDefault();
    const ratingData = { book_id: book.id, rating: newRating };
    const res = await fetch(`/ratings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratingData),
    });
    const rate = await res.json();
    setRating(rate);
    console.log(rate)
  }

  
  const total = (accumulator, currentValue) => accumulator + currentValue;

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
          <b>Published: </b>
          {pub_date}
        </ul>
        {/* <ul>
          <b>Average rating: </b>
          {total > 0
            ? total
            : "This book hasn't been rated yet"}
        </ul> */}
      </ul>
      <div>
        <b>Reviews about {title}: </b>
        <ul>
          {reviews.length > 0
            ? reviews.map((r) => (
                <p key={r.id}>
                  <i>{r}</i>
                </p>
              ))
            : "This book hasn't been reviewed yet"}
        </ul>
        <div className="bookcard">
          {shelves.length > 0 ? (
            <button onClick={e=>removeBook(book.id)}>Remove from my shelf</button>
          ) : (
            <button onClick={addBook}>Add to my shelf</button>
          )}
        </div>

     
        {/* <div>
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
            </select> &nbsp;
            <input type="submit" value="Rate" />
          </form>
        </div> */}

        {/* FORM TO ADD A NEW REVIEW */}
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