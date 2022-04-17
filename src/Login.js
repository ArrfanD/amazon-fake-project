import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



function Login() {
  const [newEmail, setEmail] = useState("");
  const [newPassword, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  

  return (
    <div className="login">
      <Link to='/'>
        <img
          className="login__logo"
          src="https://www.apnavacancy.com/wp-content/uploads/2021/12/Amazon-Requirements-For-Job-2021-In-India.png" />
      </Link>
      <div className="login__container" >
        <h1>Sign-In</h1>
        <form className='form'>
          <h5>E-Mail</h5>
          <input type="text" placeholder="Email"  />
          <h5>Password</h5>
          <input type="password" placeholder="Password"  />
          <button type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in, you agree to the FAKE AMAZON CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and Our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton" >Create Your Amazon account</button>
      </div>
      
      
    </div>
  )
}

export default Login
