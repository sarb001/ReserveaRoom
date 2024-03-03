import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../PropertyListing/PropertyListing.css' ;
import { useDispatch } from 'react-redux';
import { HotelListing } from '../Actions/UserActions';

const PropertyListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [Hotelname,setHotelname] = useState('');
  const [HoteltagLine,setHoteltagLine] = useState('');
  const [HotelCity,setHotelCity] = useState('');
  const [HotelLocation,setHotelLocation] = useState('');
  // const [BedType,setBedType] = useState('');
 
  const [HotelDistance,setHotelDistance] = useState(0);
  const [TotalRooms,setTotalRooms] = useState(0);
  const [PricingPerRoom,setPricingPerRoom] = useState(0);


  const handleHotelCreation = async(e) => {
    e.preventDefault();
     await dispatch(HotelListing(Hotelname,HoteltagLine,HotelCity,HotelLocation,
      HotelDistance,TotalRooms , PricingPerRoom));
      navigate('/filter');
  }

  return (
    <>
        <div className='m-8 md:flex  md:justify-center md:h-[90vh]'>
         <div className=' w-full p-4  bg-[rgb(33,47,67)] md:bg-lime-400   
          md:grid md:justify-between md:max-w-[45rem] text-xl'>

            <div className="account sm:text-center "> 
              <span className='text-2xl sm:text-3xl'> Add more Hotels to the List </span>
            </div>

            <div className='grid sm:grid'>
                  <form onSubmit={handleHotelCreation}>
                
                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel  Name </label>
                    <input type = "text" value={Hotelname}  placeholder='Oberoi Hotel'  
                    onChange = {(e) => setHotelname(e.target.value)}
                    required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel TagLine </label>
                    <input type = "text"  value={HoteltagLine} placeholder='Serving for Best Like Always' 
                      onChange = {(e) => setHoteltagLine(e.target.value)}
                    required />
                    </div>

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel City </label>
                    <input type = "text"  placeholder='Agra'   
                     value = {HotelCity} 
                     onChange = {(e) => setHotelCity(e.target.value)}
                     required />
                    </div>

                    {/* <div className='my-2 sm:flex sm:justify-between'>
                    <label> Upload Images </label>
                    <input type = "file"  required />
                    </div> */}

                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Hotel Location </label>
                    <input type = "text"  placeholder='Bombay Park Avenue ,Arizona'  
                    value = {HotelLocation}
                    onChange = {(e) => setHotelLocation(e.target.value)}
                    required />
                    </div>

                
                    <div className='my-2 sm:flex sm:justify-between'>
                    <label> Distance from Hotel  </label>
                    <input type = "number"  placeholder='50'  
                    value = {HotelDistance}
                    onChange = {(e) => setHotelDistance(e.target.value)}
                    required />
                    {/* <select name="distance" id="distance">
                        <option value="2km">Less then 2 Km</option>
                        <option value="3km">Less then 3 Km</option>
                        <option value="4km">Less then 4 Km</option>
                        <option value="8km">Less then 8 Km</option>
                    </select> */}
                    </div>
                



                    <div className='my-2 sm:flex sm:justify-between'>
                        <label> Total Rooms available </label>
                    <input  type = "number"  placeholder='40' 
                    value={TotalRooms}
                    onChange={(e) => setTotalRooms(e.target.value)} required />
                    </div>


                     <div className='my-2 sm:flex sm:justify-between  mt-8'>
                        <label> Pricing of Room Per Night </label>
                      <input  type = "number"  placeholder='1000' 
                      value={PricingPerRoom}
                      onChange={(e) => setPricingPerRoom(e.target.value)}
                      required />
                    </div> 


                    {/* <div className='my-2 sm:flex sm:justify-between mt-8'>
                        <label> Types of Bed Available  </label>
                    <input  type = "text"  placeholder='King-Size...'  
                     value={BedType}
                     onChange={(e) => setBedType(e.target.value)} required/>
                    </div> */}

                    <div className='sm:text-center'>
                    <button type = "submit" className='p-2 bg-slate-900 text-white'> 
                        Add Now 
                    </button>
                    </div>

                  </form>
            </div>

         </div>
    </div>
    </>

  )
}

export default PropertyListing