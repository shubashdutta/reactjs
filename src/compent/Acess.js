import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Acess.css"

const Logoin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  async function login() {
    try {
      let item = { email, password };

      let response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      let data = await response.json();
      if (response.ok) {
        // Login successful, navigate to the desired page
        navigate("/Education");
      } else {
        // Login failed, display the backend error message if available
        if (data.error) {
          alert(data.error); // Display the error message
        } else {
          alert("Login failed. Please try again."); // Fallback message
        }
      }
    } catch (error) {
      // Display network error message
      alert("password is wrong");
    }
  }

  const handleSignin = async (e) => {
    e.preventDefault();

    // Perform signin logic here if needed
    // ...

    // Clear input fields after signin
    setEmail('');
    setPassword('');
  };
 

  return (
    <div className="signin-container">
      <div className="logo-container">
        {/* <img src="https://i.ibb.co/h8yCTKn/Logo-1.png" alt="Logo" className="logo-image" /> */}
      </div>
      <div className="signin-form-container">
        <form className="signin-form" onSubmit={handleSignin}>
          <h2>Sign In</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
          </div>
          <button onClick={login} type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Logoin;
