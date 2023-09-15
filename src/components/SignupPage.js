import { Link, } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import './SignupPage.css';



function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [userId, setUserId] = useState('');
  const [signupStatus, setSignupStatus] = useState('');

  const handleSignup = async () => {
    try {
      // Create a user object to send to the API
      const user = {
        userId,
        username,
        email,
        password,
        location,
        
      };
console.log(user);
      // Send a POST request to your API to store the user data
      await axios.post('http://localhost:5099/api/ChargeEazy/AddUser', user).then(response=>{
      if (response.status === 200)
        setSignupStatus('Successfully Signed Up');

    });

      //history.push('/App.js');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (

      
     
        <div className="signupPage relative border lg:w-[450px] lg:h-[800px]  bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium  ">
        <h1 className="app-heading">ChargEazy</h1>
          <h1 className="text-4xl mt-2 mb-8 text-black font-medium">Sign Up</h1>
          <p className="text-lg font-medium  mb-5 text-zinc-600 ">
            Already a member?{" "}
            <span className="text-indigo-600 font-medium text-lg underline">
              <Link to="/signin">Login</Link>
            </span>
          </p>

          
      
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>UserId:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        
      
    
            
            <button type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg" onClick={handleSignup}
            >Sign Up
            </button>
            <p className="login-status">{signupStatus}</p>
          
          </div>
         
      
  );
};

export default SignupPage;
