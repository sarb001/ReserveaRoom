import React from 'react'
import { NavLink } from 'react-router-dom'
import '../PropertyListing/PropertyListing.css' ;

const PropertyListing = () => {


  return (
    <div className='m-8'>
            <span className='text-3xl'>  Add more Hotels to the List </span>

    <div className='grid'>
         
         <div className='my-2 sm:flex sm:justify-evenly'>
           <label> Hotel  Name </label>
           <input type = "text"  placeholder='Oberoi Hotel'  required />
         </div>

         <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Hotel TagLine </label>
          <input type = "text"  placeholder='Serving for Best Like Always'  required />
         </div>

         <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Hotel City </label>
          <input type = "text"  placeholder='Agra'  required />
         </div>


            {/*   Image Upload */}
         <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Upload Images </label>
          <input type = "file"  required />
         </div>

         <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Hotel Location </label>
          <input type = "text"  placeholder='Bombay Park Avenue ,Arizona'  required />
         </div>

            {/* Dropdown Hotel Distance */}

         <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Distance from Hotel  </label>
          <select name="distance" id="distance">
            <option value="2km">Less then 2 Km</option>
            <option value="3km">Less then 3 Km</option>
            <option value="4km">Less then 4 Km</option>
            <option value="8km">Less then 8 Km</option>
         </select>
         </div>

            {/* Rating  */}

         {/*  Pricing  Range */}
         <div className='my-2 sm:flex sm:justify-evenly'>
             <label> Total Rooms available </label>
           <input  type = "number"  placeholder='40' />
         </div>

            {/*  Rooms Number */}
         <div className='my-2 sm:flex sm:justify-evenly'>
             <label> Pricing of Room Per Night </label>
           <input  type = "number"  placeholder='550' />
         </div>

            {/* Bed Quant  */}
         <div className='my-2 sm:flex sm:justify-evenly'>
             <label> Types of Bed Available  </label>
           <input  type = "number"  placeholder='550' />
         </div>


          {/* Facilites Provided  */}
         {/* <div className='my-2 sm:flex sm:justify-evenly'>
          <label> Facilites Provided by Hotel </label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> I have a bike</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> I have a car</label>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                <label for="vehicle3"> I have a boat</label>
         </div>  */}

         


         <div className='sm:text-center'>
           <button className='p-2 bg-slate-900 text-white'> 
              Add Now 
           </button>
         </div>
    </div>

    </div>
  )
}

export default PropertyListing