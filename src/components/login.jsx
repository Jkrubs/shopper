import React from 'react'
import './login.css'

export const Login = () => {
  return (
    <div className='login-signin'>
      <div className="sign-in">
        <h1>Sign up</h1>
        <form action="" className='form'>
          <input type="text"placeholder='Enter Name' required/>
          <input type="email" placeholder='Enter Email' required/>
          <input type="password" placeholder='Enter password'required/>
          <button>Continue</button>
        </form>
        <p>Already have an account?<span>Login here</span></p>
        <div className="policy">
          <input type="checkbox" />
          <p>I agree to the terms and conditions of service</p>
        </div>
      </div>

    </div>
  )
}
