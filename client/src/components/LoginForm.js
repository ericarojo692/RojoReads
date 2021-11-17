import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUpPage from "./SignUpPage";


function LoginForm({ setCurrentUser, toggleCurrentUser }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            toggleCurrentUser()
            history.push('/home')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

 

  return (
    <div>
    {/* <SignUpPage onLogin={storeUser} setCurrentUser={setCurrentUser}/> */}
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <input type="submit" value="Log In"></input>
        {errors ? errors.map((error) => <div>{error}</div>) : null}
      </form>
      
    </div>
    </div>
  );
}

export default LoginForm;