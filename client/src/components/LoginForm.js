import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import { Link } from "react-router-dom"


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

    <form onSubmit={handleSubmit}>
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} > 
    <h3>Sign In</h3>
    </div>

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        {/* <label>Name</label> */}
        <input
type="text"
placeholder="Name"
name="name"
onChange={(e) => setName(e.target.value)} ></input>
    </div>

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
        {/* <label>Password</label> */}
        <input
type="password"
placeholder="Password"
value={password}
name="password"
onChange={(e) => setPassword(e.target.value)}
></input>
    </div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
    <button type="submit" className="btn btn-primary btn-block">Log In</button>
    {errors ? errors.map((error) => <div>{error}</div>) : null}

    <Link to='/signuppage' class="btn btn-primary"> Sign Up</Link>
    </div>
</form>
);





//     <div>
//     {/* <SignUpPage onLogin={storeUser} setCurrentUser={setCurrentUser}/> */}
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <h1>Log In</h1>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           name="name"
//           onChange={(e) => setName(e.target.value)}
//         ></input>
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           name="password"
//           onChange={(e) => setPassword(e.target.value)}
//         ></input>
//         <br />
//         <input type="submit" value="Log In"></input>
//         {errors ? errors.map((error) => <div>{error}</div>) : null}
//       </form>
      
//     </div>
//     </div>
//   );
}

export default LoginForm;