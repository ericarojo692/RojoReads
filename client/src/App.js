import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'

// import BookCollection from "./components/BookCollection";
// import UnauthenticatedApp from "./components/UnauthenticatedApp";
// import BookDetails from "./components/BookDetails";
import MyShelf from "./components/MyShelf";
import MyProfile from "./components/MyProfile";
// import UpdateForm from "./components/UpdateForm";

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((r) => r.json())
      .then((bookData) => setBooks(bookData));
  }, []);

  return (
    <Router>
      <Switch>
    <Route path='/'exact> <Home />
      </Route>

    <Route path='/myshelf'> 
    <MyShelf books={books}/>
    </Route>
  
    <Route path='/myprofile'>
      <MyProfile currentUser={currentUser} />
      </Route>
     
     </Switch>
    </Router>
  )
}

export default App;

