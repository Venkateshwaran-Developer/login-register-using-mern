import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function RegisterUser(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/register',{
      method:'POST',
      headers :{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password,
    }),

     })
  const data = await response.json();
     if(data.status==='ok'){
      navigate('/api/login')
     }
  console.log(data);
}

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={RegisterUser}>
        <input
            type="text"
            value={name} 
            placeholder="Enter your name"
            onChange={(e)=>
            setName(e.target.value)
         }
        /><br/><br/>
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

export default Register;
