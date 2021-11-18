import React from 'react'
import BookCard from './BookCard'
import LoginForm from './LoginForm'
import Navbar from "./Navbar"

function Home({ currentUser }) {
    return (
        <div>
            {/* <LoginForm currentUser={currentUser}/>  */}
            {/* <Navbar /> */}
        </div>
    )
}
{/* <form onSubmit={handleSubmit}>
  <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
    <input
          type="text"
          placeholder="Name"
          value={newName}
          name="newName"
          onChange={(e) => setNewName(e.target.value)}
        ></input>
    </div>
  </div>
  <div class="row mb-3">
    <label for="bio" class="col-sm-2 col-form-label">Bio</label>
    <div class="col-sm-10">
    <input
          type="text"
          placeholder="Bio"
          value={newBio}
          name="newBio"
          onChange={(e) => setNewBio(e.target.value)}
        ></input>
    </div>
  </div>
  <select
          name="newFavGenre"
          id="newFavGenre"
          onChange={(e) => setNewFavGenre(e.target.value)}
        >
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Biography">Biography</option>
          <option value="Fiction">Fiction</option>
          
          </select>
        <br/>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
} */}





      




export default Home;
