import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function SignUpPage({  setCurrentUser, toggleCurrentUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [fav_genre, setFav_Genre] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();


  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name,
      password,
      fav_genre,
      bio,
    };
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    });
    const userData = await res.json();
  console.log(userData)
    if (res.ok) {
      setCurrentUser(userData);
      toggleCurrentUser()
      history.push("/home");
    } else {
      setErrors(userData.errors);
    }
  }

 
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <input
        required
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
        required
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <textarea
        required
          type="text"
          placeholder="Biography"
          value={bio}
          name="bio"
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
        <br />
        <select
        required
          name="FavGenre"
          id="FavGenre"
          onChange={(e) => setFav_Genre(e.target.value)}
        >
          <option value="" selected disabled >Choose Favorite Genre</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Horror">Horror</option>
          <option value="Romance">Romance</option>
          <option value="Biology">Biology</option>
          <option value="Fiction">Fiction</option>
        </select>
        <br />
        <input type="submit" value="Submit"></input>
        {errors ? <div>{errors}</div> : null}
      </form>
    </div>
  );
}

export default SignUpPage;