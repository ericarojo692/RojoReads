import React, { useState, useEffect } from "react";
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar"
import BookCollection from "./components/BookCollection";
//import UnauthenticatedApp from "./components/UnauthenticatedApp";
import BookDetails from "./components/BookDetails";
import MyShelf from "./components/MyShelf";
import MyProfile from "./components/MyProfile";
import UpdateForm from "./components/UpdateForm";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [books, setBooks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [filteredBooks, setFilteredBooks] =useState([]);
  // const [filter, setFilter] = useState("");
  // const [search, setSearch] = useState("");
  const [authChecked, setAuthChecked] = useState(false)
  const [isCurrentUserChanged, setIsCurrentUserChanged] = useState(false)
  const [isBooks, setMyBooks] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false)

  
function toggleCurrentUser(){
  setIsCurrentUserChanged(!isCurrentUserChanged)
}

function toggleRefresh(){
  setIsRefresh(!isRefresh)
}


  useEffect(() => {
      fetch("/books")
      .then(res => res.json())
      .then(books => {
        setBooks(books);
        setFilteredBooks(books);
      }
        )
 
  }, []);


  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
            setMyBooks(user.user_books)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [isCurrentUserChanged, isRefresh]);

  function filterBooks(filter){ 
    setFilteredBooks(books.filter((book) =>
    book.genre.toLowerCase().includes(filter.toLowerCase()))
)}


function searchBooks(search){
 setFilteredBooks(books.filter((book) =>
book.title.toLowerCase().includes(search.toLowerCase()))
 )} 


  return (
    <>
        {currentUser && <Navbar toggleCurrentUser={toggleCurrentUser} setCurrentUser={setCurrentUser}/> }
      <Switch>
       
    <Route path='/home'exact> <Home /> 
      <BookCollection
       setCurrentUser={setCurrentUser}
       filteredBooks={filteredBooks}
       filterBooks={filterBooks}
       searchBooks={searchBooks}
      /> 
    </Route>

      <Route path='/myshelf'> 
        <MyShelf books={books} currentUser={currentUser} isBooks={isBooks}/>
      </Route>

      <Route path='/details/:id'>
        <BookDetails toggleRefresh={toggleRefresh} />
        </Route>
  
    <Route path='/myprofile'>
      <MyProfile currentUser={currentUser} /> 
    </Route>

      
      <Route exact path="/">
        {/* <SignUpPage  toggleCurrentUser={toggleCurrentUser} setCurrentUser={setCurrentUser}/> */}
        <LoginForm  toggleCurrentUser={toggleCurrentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        <Route exact path="/signuppage">
        <SignUpPage toggleCurrentUser={toggleCurrentUser} setCurrentUser={setCurrentUser}/>
      </Route>

      
        </Switch>
   </>
     
  )
}

export default App;

