import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar"

// import BookCollection from "./components/BookCollection";
// import UnauthenticatedApp from "./components/UnauthenticatedApp";
// import BookDetails from "./components/BookDetails";
import MyShelf from "./components/MyShelf";
import MyProfile from "./components/MyProfile";
// import UpdateForm from "./components/UpdateForm";

function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  function storeUser(user) {
    localStorage.setItem("user", user.id);
    setCurrentUser(user);
  }

  useEffect(() => {
    fetch("/books")
      .then((r) => r.json())
      .then((bookData) => setBooks(bookData));
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
       
    <Route path='/home'exact> <Home currentUser={currentUser}/> 
      </Route>

    <Route path='/myshelf'> 
    <MyShelf books={books}/>
    </Route>
  
    <Route path='/myprofile'>
      <MyProfile currentUser={currentUser} />
      </Route>

      <Route exact path="/signup">
            <SignUpPage  currentUser={currentUser} />
            </Route>

           

          <Route exact path="/">
      <LoginForm onLogin={storeUser} setCurrentUser={setCurrentUser}/>
      </Route>

        </Switch>
    </Router>
     
  )
}

export default App;

