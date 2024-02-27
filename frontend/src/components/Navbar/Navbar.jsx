import React, { useState } from 'react'
import { FaGlobe } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
    const [showbar,setshowbar] = useState(false);
    const [darkmode,setdarkmode] = useState(false);


   const shownavlinks = () => {
     setshowbar(!showbar);
   }

   const changemode = () => {
     setdarkmode(!darkmode)
   }

  return (
      <div className = {`${darkmode && "dark"}`}>
     <div className = 'bg-slate-400  text-black  dark:bg-black dark:text-white  w-full'>

      <div className='mx-4 flex flex-row justify-between p-4 h-16'>
            <div className='text-2xl'> 
               <span> ReserveaRoom.com  </span>
            </div>

            {!showbar && 
              <div className='absolute top-[66px]  w-full right-0  text-xl p-4  bg-gray-500
              md:static md:bg-transparent  md:top-10 md:right-0 md:p-0
              lg:block xl:block 2xl:block
              '>
               <ul className='grid grid-rows-5  md :grid md:grid-cols-5 md:justify-items-center md:text-center'>
                 <li  className='py-2 text-2xl' onClick={changemode}> 
                    { darkmode ? <IoSunny /> : <FaMoon /> }    
                 </li>
                 <li  className='py-2'> <FaGlobe /> </li>
                 <li  className='pt-2  md:pt-2 lg:font-medium'> List your Property </li>
                 <li  className='py-2'> <button className='bg-slate-100 text-blue-600 p-1'> Register </button> </li>
                 <li  className='py-2'> <button className='bg-slate-100 text-blue-600 p-1'> Login </button> </li>
               </ul>
              </div>
            }

            <div className=' md:hidden  xl:hidden  2xl:hidden  lg:hidden'>
               <span className='text-3xl relative' onClick={shownavlinks}> <GiHamburgerMenu /> </span>
            </div>
      </div>

     </div>
     </div>
  )
}
export default Navbar