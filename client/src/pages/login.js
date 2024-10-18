import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function LoginUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/login',{
      method:'POST',
      headers :{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email,
        password,
    }),

     })
  const data = await response.json();
  if (data.user) {
    localStorage.setItem('token',data.user)
    alert('User Loggedin Successfully')
    navigate('/api/dashboard');


  } else {
    alert('Check your Username and Password')
  }
  console.log(data);
}

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={LoginUser}>
    
        <input
            type="text"
            value={email} 
            placeholder="Enter your email"
            onChange={(e)=>
            setEmail(e.target.value)
         }
        /><br/><br/>
        <input
            type="password"
            value={password} 
            placeholder="Enter your password"
            onChange={(e)=>
            setPassword(e.target.value)
         }
        /><br/><br/>
        <input type='submit' value='Submit'/>
      </form>
    </div>
  );
}

export default Login;
