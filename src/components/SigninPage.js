import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SigninPage.css';


function SigninPage() {
  const navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      
      axios.get(`http://localhost:5099/api/ChargeEazy/GetPasswordByID/${email}`).then(response=>{
      if (response.status === 200) {
        const storedPassword = response.data;
        
        if (password === storedPassword) {
          setLoginStatus('Successfully logged in');
          navigate('/find');


        } else {
          setLoginStatus('Wrong password');
        }
      } else {
        setLoginStatus('User not found');
      }
    });
    } 
    catch(error) {
      setLoginStatus('Error: API request failed');
      console.error('API request error:', error);
    }
    
  
  };

  


  return (
    <div>
    
    
      
      <div className="signupPage relative border lg:w-[450px] lg:min-h-[400px]   bg-white shadow-2xl rounded-2xl px-5 pt-5  text-zinc-400 font-medium relative  ">
        <h1 className='text-4xl mt-2 mb-8 text-black font-medium'>Sign in</h1>
        <p className='text-lg font-medium  mb-5 text-zinc-600 '>New to ChargEazy? <span className='text-indigo-600 font-medium text-lg underline'><Link to='/signup'>Signup</Link></span></p>

        <div className="form-group">
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

         
          <button className='bg-blue-700 hover:bg-blue-800 transition text-white w-full mb-2 h-9  rounded-lg' onClick={handleLogin}>Continue</button>  
        
        <p className="login-status">{loginStatus}</p>

        
      
      
      </div>
      
       
      </div>
     
  )
}

export default SigninPage;