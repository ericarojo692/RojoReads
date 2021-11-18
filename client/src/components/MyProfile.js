import React, { useEffect, useState } from "react";
import UpdateForm from "./UpdateForm";

function MyProfile({ currentUser }) {
  const [profile, setProfile] = useState([]);
  const [bookCount, setBookCount] = useState([]);

  useEffect(() => {
    function getProfile() {
      const res = fetch(`/users/${currentUser.id}`);
      if (res.ok) {
        const user = res.json();
        setProfile(user);
        setBookCount(user.book_titles.length);
      }
    }
    currentUser && getProfile();
  }, []);

  const { name, fav_genre, bio } = profile;

  return (
    <div className="bookcard">
      {currentUser && (
        <>
      <h1 className="text-center">{currentUser.name}'s Profile</h1>
      <h2 className="text-center"> Favorite genre: {currentUser.fav_genre}</h2>
      <h2 className="text-center">Books on your shelf: {currentUser.bookCount}</h2>
      <h2 className="text-center">About {currentUser.name}: </h2>
      <p className="text-center">{currentUser.bio}</p>

      <div>
        <h4 className="text-center">
          <UpdateForm setProfile={setProfile} currentUser={currentUser}/>
        </h4>
      </div>
      </>
      )}
    </div>
  );
}

export default MyProfile;


