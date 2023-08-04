import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import './Register.css';


const CreateID = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  async function signUp(event) {
    event.preventDefault();

    // Validate the form fields here
    
    let item = {
      firstName,
      lastName,
      email,
      password,
      phone,
    };

    try {
      let response = await fetch("http://localhost:8080/api/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      let data = await response.json();
      if (response.ok) {
        // Signup successful, navigate to the login page
        navigate("/Login");
        alert("Successfully Created Account");
      } else {
        // Signup failed, display the backend error message if available
        if (data.error) {
          alert(data.error); // Display the error message from the backend
        } else {
          alert("Account creation failed. Please try again."); // Fallback message
        }
      }
    } catch (error) {
      // Display network error message
      alert("Email Id has been used.");
    }
  }

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="signup-container">
      <div className="logo-container">
       
      </div>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={ signUp}>
          <h2>Create an Account</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
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
              type="number"
              placeholder="Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={`show-password ${showPassword ? 'showing' : ''}`}
              onClick={toggleShowPassword}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default CreateID;
