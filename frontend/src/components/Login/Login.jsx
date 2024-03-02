import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { NavLink } from 'react-router-dom' ;
import  { useNavigate }  from 'react-router-dom' ;
import { UserLogin } from '../Actions/UserActions';

const Login = () => {

     const [email,setemail] = useState('');
     const [password,setpassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Loginhandler = async(e) => {
      console.log('reaching Login');
      e.preventDefault();
      dispatch(UserLogin(email,password));
      navigate('/');
    }


  return (

  <div className=' m-8  md:flex md:justify-center md:h-[50vh]'>
    <div className=' w-full p-8  bg-[rgb(33,47,67)] md:bg-lime-400   
     md:flex-col md:justify-between md:max-w-[30rem] text-xl'>

       <div className="account sm:text-center"> 
        <span className='text-2xl'> Sign in to your account </span>
       </div>

       <div className='grid'>
         
          <form onSubmit={Loginhandler}>

              <div className='my-2 sm:flex sm:justify-evenly'>
                <label> Your email </label>
                <input type = "email"  placeholder='name@company.com'   
                value = {email}   onChange={(e) => setemail(e.target.value)}
                required />
              </div>

              <div className='my-2 sm:flex sm:justify-evenly'>
                <label> Password </label>
                <input type = "password"  placeholder='********'  
                value = {password}  onChange={(e) => setpassword(e.target.value)}
                required/>
              </div>

              <div className='my-2 sm:flex sm:justify-evenly'>
                  <span> Forget Password? </span>
              </div>

              <div className='sm:text-center'>
                <button className='p-2 bg-slate-900 text-white'> 
                  Sign In 
                </button>
              </div>

          </form>

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