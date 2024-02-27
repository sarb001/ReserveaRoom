import React from 'react'

const Register = () => {




  return (
    <div>
         <div>
            <div className="account"> 
             <span> Create an Account </span>
            </div>
            <label> Your email </label>
            <input type = "email"  placeholder='name@company.com' />
            <label> First Name </label>
            <input type = "text"  placeholder='John'  required/>

            <label> Last Name </label>
            <input type = "text"  placeholder='Doe' required/>
            
            <label> Password </label>
            <input type = "email"  placeholder='name@company.com'  required/>
         
            <input type = "checkbox"  />
            <span> I accept the Terms and Conditions </span>

            <button> Create an Account </button>

             <div>
               <span> Already have an account?
                <a href = "/login"> Login Here </a>  
               </span>
             </div>

         </div>
    </div>
  )
}

export default Register