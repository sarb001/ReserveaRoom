import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
// import { allListedHotels } from '../Actions/UserActions';
import Loader from './Loader';

const Filteredcards = () => {

  const dispatch = useDispatch();

  const Destinations = [
    { id :1, Place : 'New Delhi' ,  img : '/NewDelhi.jpg'  , Hotelname :'Hilton New Delhi Embassy' , Distance : '5k from centre'  , BedType : 'Twin Bed' , Rating: 8.5 , Reservation : ' Free Cancellation'  , adults : 2 , nights : 4 },
    { id :2 ,Place : 'Banglore ' ,  img : '/Banglore.jpg'  , Hotelname :'ObEROI  Bengaluru Embassy' , Distance : '2k from centre'  , BedType : 'Double Bed' , Rating: 6.5 , Reservation : 'No Prepayment Needed '   , adults : 2 , nights : 2},
    { id :3 ,Place : 'Mumbai'    ,  img : '/Mumbai.jpg'    , Hotelname :'tAJ Hotel Mumbai Embassy' , Distance : '4k from centre'  , BedType : 'Double Bed' , Rating: 7.5 , Reservation : 'Book wihout Credit Card' , adults : 1 , nights : 2},
    { id :4 ,Place : 'Chennai'   ,  img : '/Chennai.jpg'   , Hotelname :'Hilton CHennai Embassy' , Distance : '4k from centre'  , BedType : 'Twin Bed' , Rating: 7.0 , Reservation : ' Free Cancellation'     ,adults : 4 , nights : 3} ,
    { id :5 ,Place : 'Hyderabad' ,  img : '/Hyderabad.jpg' , Hotelname :'Hilton Hyderabad Embassy' , Distance : '3k from centre'  , BedType : 'Twin Bed' , Rating: 8     ,Reservation : 'Book wihout Credit Card' ,adults : 3 , nights : 3}
   ]
  


  return (
    <div>
      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
          helolo
            <div>
              {/* <button onClick={handleFetching}> Fetch Now </button> */}
            </div>

        {/* {Destinations.map(main => 
            <div className='grid justify-center text-center'  key = {main.id}>
                <div className='bg-slate-600 p-2 grid grid-cols-[0.5fr,2fr]'>

                      <div className='w-[250px] h-[250px] text-center'>
                            <img  className='w-full h-full object-cover overflow-hidden rounded-2xl' src = {main.img} alt = "Holiday" />
                      </div>

                      <div className='text-xl'>  
                        <div> {main.Hotelname} </div>
                        <div> {main.Place}  </div>
                        <div> {main.Distance} </div>
                        <div> {main.BedType} </div>
                        <div> {main.Rating} </div>
                        <div> {main.Reservation} </div>
                        <div> Adults - {main.adults} Nights - {main.nights}  </div>
                        <button className='bg-black text-white p-2'>  
                          <Link to = {`/card/${main.id}`}>  Check Availability   </Link>
                         </button>
                      </div>
                </div>
            </div>  
        )} */}
      </div>
    </div>
  )
}

export default Filteredcards