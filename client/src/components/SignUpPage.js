import React, { useState } from "react";
import LoginForm from "./LoginForm";


function SignUpPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div className="form">
            <p>
              Don't have an account? &nbsp;
              <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </p>
          </div>
        </>
      ) : (
        <>
          <SignUpPage onLogin={onLogin} />
          <div className="form">
            <p>
              Already have an account? &nbsp;
              <button onClick={() => setShowLogin(true)}>Log In</button>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default SignUpPage;