import React from "react";
import { Card, Image } from 'react-bootstrap'


function BookCard({ book }) {

 

   
    return (
      
      
    <div class="card" style={{marginRight: 'em'}}>
       <img src={book.image} className="d-block mx-auto img-fluid w-50"alt={book.title} style={{ maxWidth: '24rem' }}/>
        
        <h5 className="text-center">{book.title}</h5>
      
        <h6 className="text-center">{book.author}</h6>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        <a href ={'/details/'+ book.id} class="btn btn-primary">Details about {book.title}</a>
        </div>
</div>
    );
}






      /* <div>
          <ul className="bookcard">
            <h5>
              {book.title}
            </h5>
            <img src={book.image} alt={book.title} className="photo" />
            <h2>by {book.author}</h2>
            <a href={'/details/'+ book.id}>Details about {book.title}</a>
          </ul>
      </div>
    );
  } */

export default BookCard;