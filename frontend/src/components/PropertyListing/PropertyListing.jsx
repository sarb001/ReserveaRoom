import React from 'react'
import { NavLink } from 'react-router-dom'
import '../PropertyListing/PropertyListing.css' ;

const PropertyListing = () => {

  return (
    <>
        <div className='m-8 md:flex  md:justify-center md:h-[90vh]'>
         <div className=' w-full p-4  bg-[rgb(33,47,67)] md:bg-lime-400   
          md:grid md:justify-between md:max-w-[45rem]
         text-white text-xl'>

            <div className="account sm:text-center "> 
              <span className='text-2xl sm:text-3xl'> Add more Hotels to the List </span>
            </div>

            <div className='grid sm:grid'>
            
                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel  Name </label>
                    <input type = "text"  placeholder='Oberoi Hotel'  required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel TagLine </label>
                    <input type = "text"  placeholder='Serving for Best Like Always'  required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel City </label>
                    <input type = "text"  placeholder='Agra'  required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Upload Images </label>
                    <input type = "file"  required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel Location </label>
                    <input type = "text"  placeholder='Bombay Park Avenue ,Arizona'  required />
                    </div>

                
                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Distance from Hotel  </label>
                    <select name="distance" id="distance">
                        <option value="2km">Less then 2 Km</option>
                        <option value="3km">Less then 3 Km</option>
                        <option value="4km">Less then 4 Km</option>
                        <option value="8km">Less then 8 Km</option>
                    </select>
                    </div>
                
                    <div className='my-2 sm:flex sm:justify-between'>
                        <label> Total Rooms available </label>
                    <input  type = "number"  placeholder='40' />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                        <label> Pricing of Room Per Night </label>
                    <input  type = "number"  placeholder='550' />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                        <label> Types of Bed Available  </label>
                    <input  type = "text"  placeholder='King-Size...' />
                    </div>

                    <div className='sm:text-center'>
                    <button className='p-2 bg-slate-900 text-white'> 
                        Add Now 
                    </button>
                    </div>
            </div>

         </div>
    </div>
    </>

  )
}

export default PropertyListing