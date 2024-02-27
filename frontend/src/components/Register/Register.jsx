import React from 'react';
import  { NavLink } from 'react-router-dom' ;


const Register = () => {

  return (
    <div className=' m-8 md:flex  md:justify-center md:h-[70vh]'>
         <div className=' w-full p-8  bg-[rgb(33,47,67)] md:bg-lime-400   
          md:grid md:justify-normal md:max-w-[30rem]
         text-white text-xl'>

            <div className="account sm:text-center "> 
             <span className='text-2xl sm:text-3xl'> Create an Account </span>
            </div>

            <div className='grid sm:grid'>
              
                <div className='my-2 sm:flex sm:justify-evenly md:flex '>
                  <label> Your email </label>
                  <input type = "email"  placeholder='name@company.com' />
                </div>

                <div className='my-2 sm:flex sm:justify-evenly'>
                  <label> First Name </label>
                  <input type = "text"  placeholder='John'  required/>
                </div>

                <div className='my-2 sm:flex sm:justify-evenly'>
                <label> Last Name </label>
                <input type = "text"  placeholder='Doe' required/>
                </div>

                <div className='my-2 sm:flex sm:justify-evenly'>
                <label> Password </label>
                <input type = "password"  placeholder='*******'  required/>
                </div>

                <div className='my-2 sm:flex sm:justify-evenly'>
                <input type = "checkbox"  required/>
                <span className='text-[18px]'> I accept the Terms and Conditions </span>
                </div>
           
                <div className='sm:text-center'>
                  <button className='p-2 bg-slate-900 text-white'> 
                    Create an Account 
                  </button>
                </div>

                <div className='sm:text-center'>
                  <span className='text-[18px]'>  
                    <NavLink  to = "/login" > Already have an account? Login Here </NavLink>
                  </span>
                </div>

           </div>

         </div>
    </div>
  )
}

export default Register