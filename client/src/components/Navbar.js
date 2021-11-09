import React from "react"
import { Link } from "react-router-dom";

function Navbar({ handleLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">RojoReads</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    <Link to="/myshelf" className="nav-link" aria-current="page">My Shelf</Link>
                    <Link to="/myprofile" className="nav-link" aria-current="page">My Profile</Link>
                    {/* <Link to="/logout" className="nav-link" aria-current="page" >Logout</Link> */}
                    <button type="button" className="btn btn-link" onClick={handleLogout}>Logout</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;