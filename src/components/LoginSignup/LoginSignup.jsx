import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleSignupOrLogin = () => {
    // Perform signup or login logic here
    // For simplicity, let's just check if the username and password are not empty strings
    if (username.trim() !== "" && password.trim() !== "") {
      // Assuming user is logged in successfully
      // history.push('TodoWrapper');
    } else {
      alert("Please enter a valid username and password.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleSignupOrLogin}>
          {action}
        </button>
        <button
          className="submit gray"
          onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}
        >
          {action === "Sign Up" ? "Login" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
