import React from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router"


function Navbar({ setCurrentUser, toggleCurrentUser }) {

    const history = useHistory()
    
    const handleLogout= () => {
          fetch("/logout", { 
            method: "DELETE" })
            .then(resp => {
                console.log(resp)
             if (resp.ok) {
             setCurrentUser(null);
             history.push('/')
             toggleCurrentUser()
           }
          
         })   
      }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">RojoReads</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home" className="nav-link" aria-current="page">Home</Link>
                    <Link to="/myshelf" className="nav-link" aria-current="page">My Shelf</Link>
                    <Link to="/myprofile" className="nav-link" aria-current="page">My Profile</Link>
                    <button className="btn btn-link" onClick={handleLogout}>Logout</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;