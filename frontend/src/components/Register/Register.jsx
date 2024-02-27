import React from 'react'

const Register = () => {




  return (
    <div className='bg-blue-400 m-8'>
         <div className=' w-full p-8   bg-lime-500 text-xl'>

            <div className="account"> 
             <span className='text-2xl'> Create an Account </span>
            </div>

            <div className='grid'>
              
                <div className='my-2'>
                  <label> Your email </label>
                  <input type = "email"  placeholder='name@company.com' />
                </div>

                <div className='my-2'>
                  <label> First Name </label>
                  <input type = "text"  placeholder='John'  required/>
                </div>

                <div className='my-2'>
                <label> Last Name </label>
                <input type = "text"  placeholder='Doe' required/>
                </div>

                <div className='my-2'>
                <label> Password </label>
                <input type = "email"  placeholder='name@company.com'  required/>
                </div>

                <div className='my-2'>
                <input type = "checkbox"  required/>
                <span className='text-[18px]'> I accept the Terms and Conditions </span>
                </div>
           
                <div>
                  <button className='p-2 bg-slate-900 text-white'> 
                    Create an Account 
                  </button>
                </div>

                <div>
                  <span className='text-[18px]'> Already have an account?
                    <a href = "/login"> Login Here </a>  
                  </span>
                </div>

           </div>

         </div>
    </div>
  )
}

export default Register