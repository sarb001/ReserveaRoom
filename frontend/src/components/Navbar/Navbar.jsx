import React, { useState } from 'react'
import { FaGlobe } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon } from "react-icons/fa6";

const Navbar = () => {
    const [showbar,setshowbar] = useState(false);

   const shownavlinks = () => {
     setshowbar(!showbar);
   }

  return (
     <div className= 'bg-blue-400 w-full'>

      <div className='mx-4 flex flex-row justify-between p-4 h-16'>
            <div className='text-2xl'> 
               <span> ReserveaRoom.com  </span>
            </div>

            {!showbar && 
              <div className='absolute top-[66px]  w-full right-0  text-xl p-4  bg-gray-500
              md:static md:bg-transparent  md:top-10 md:right-0 md:p-0'>
               <ul className='grid grid-rows-5  md :grid md:grid-cols-5 md:justify-items-center md:text-center'>
                 <li> <FaMoon /> </li>
                 <li> <FaGlobe /> </li>
                 <li> List your Property </li>
                 <li> <button className='bg-slate-100 text-blue-600 p-1'> Register </button> </li>
                 <li> <button className='bg-slate-100 text-blue-600 p-1'> Login </button> </li>
               </ul>
              </div>
            }
            

            <div className=' md:hidden  xl:hidden  2xl:hidden  lg:hidden'>
               <span className='text-3xl relative' onClick={shownavlinks}> <GiHamburgerMenu /> </span>
            </div>
      </div>

     </div>
  )
}
export default Navbar