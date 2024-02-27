import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
         <span> Sign in to your account </span>
      </div>
      <div> 
        <label> Your email </label>  
        <input  type = "email"  placeholder='name@company.com' />

        <label> Password </label>  
        <input  type = "email"  placeholder='name@company.com' />

        <div>  <a> Forget Password? </a> </div>

        <button> Sign In </button>

        <div>
            <a href = "/register"> Don't have an account yet? SignUp Now </a>
        </div>

       </div>
    </div>
  )
}

export default Login