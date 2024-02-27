import React from 'react';
import  { NavLink } from 'react-router-dom' ;


const Login = () => {

  return (

  <div className='bg-blue-400 m-8'>
    <div className=' w-full p-8   bg-lime-500 text-xl'>

       <div className="account"> 
        <span className='text-2xl'> Sign in to your account </span>
       </div>

       <div className='grid'>
         
           <div className='my-2'>
             <label> Your email </label>
             <input type = "email"  placeholder='name@company.com'  required />
           </div>

           <div className='my-2'>
            <label> Password </label>
            <input type = "email"  placeholder='name@company.com'  required/>
           </div>

           <div className='my-2'>
              <span> Forget Password? </span>
           </div>

           <div>
             <button className='p-2 bg-slate-900 text-white'> 
               Sign In 
             </button>
           </div>

           <div>
             <span className='text-[18px]'> 
             <NavLink  to = "/register" > Don't have an account yet? SignUp Now  </NavLink>
             </span>
           </div>

      </div>

    </div>
</div>
  )
}

export default Login