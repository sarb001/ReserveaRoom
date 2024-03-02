import React, { useState } from 'react';
import  { NavLink } from 'react-router-dom' ;
import { useDispatch } from 'react-redux';
import { UserRegister } from '../Actions/UserActions';


const Register = () => {
   const [fname,setfname] = useState('');
   const [email,setemail] = useState('');
   const [password,setpassword] = useState('');

   const dispatch = useDispatch();

   const HandleRegistration = () => {
       if(!fname || !email ||!password){
         return  res.status(400).json({
           message : "Fill All Fields",
         })
       }

      //  dispatch(UserRegister(fname,email,password));

   }

  return (
    <div className=' m-8 md:flex  md:justify-center md:h-[70vh]'>
         <div className=' w-full p-8  bg-[rgb(33,47,67)] md:bg-lime-400   
          md:grid md:justify-normal md:max-w-[30rem]
         text-white text-xl'>

            <div className="account sm:text-center "> 
             <span className='text-2xl sm:text-3xl'> Create an Account </span>
            </div>

            <div className='grid sm:grid'>

                <form onSubmit={HandleRegistration}>
              
                  <div className='my-2 sm:flex sm:justify-evenly md:flex '>
                    <label> Your email </label>
                    <input type = "email"  placeholder='name@company.com' />
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Name </label>
                    <input type = "text"  placeholder='John'  value = {fname} required/>
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Email </label>
                    <input type = "email"  placeholder='johndoe@gmail' value = {email} required/>
                  </div>

                  <div className='my-2 sm:flex sm:justify-evenly'>
                    <label> Password </label>
                    <input type = "password"  placeholder='*******' value = {password} required/>
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
                  
                </form>

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