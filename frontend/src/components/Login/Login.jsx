import React from 'react';
import  { NavLink } from 'react-router-dom' ;


const Login = () => {

  return (

  <div className=' m-8  md:flex md:justify-center md:h-[50vh]'>
    <div className=' w-full p-8  bg-[rgb(33,47,67)] md:bg-lime-400   
     md:flex-col md:justify-between md:max-w-[30rem]
    text-white text-xl'>

       <div className="account sm:text-center"> 
        <span className='text-2xl'> Sign in to your account </span>
       </div>

       <div className='grid'>
         
           <div className='my-2 sm:flex sm:justify-evenly'>
             <label> Your email </label>
             <input type = "email"  placeholder='name@company.com'  required />
           </div>

           <div className='my-2 sm:flex sm:justify-evenly'>
            <label> Password </label>
            <input type = "password"  placeholder='********'  required/>
           </div>

           <div className='my-2 sm:flex sm:justify-evenly'>
              <span> Forget Password? </span>
           </div>

           <div className='sm:text-center'>
             <button className='p-2 bg-slate-900 text-white'> 
               Sign In 
             </button>
           </div>

           <div className='sm:text-center'>
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