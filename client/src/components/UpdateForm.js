import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function UpdateForm({ currentUser, setCurrentUser, setProfile }) {
  const [newName, setNewName] = useState(currentUser.name);
  const [newFavGenre, setNewFavGenre] = useState(currentUser.fav_genre);
  const [newBio, setNewBio] = useState(currentUser.bio);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const profileData = {
      name: newName,
      fav_genre: newFavGenre,
      bio: newBio,
    };
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    })
      .then((res) => res.json())
      .then((json) => {
        setProfile(json)
        setCurrentUser(json)});
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update Profile</h1>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          name="newName"
          onChange={(e) => setNewName(e.target.value)}
        ></input>
        <br/>
        <input
          type="text"
          placeholder="Bio"
          value={newBio}
          name="newBio"
          onChange={(e) => setNewBio(e.target.value)}
        ></input>
        <br/>
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
}

export default UpdateForm;