import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Loader from './Loader';
import { GetAllHotels } from '../Actions/UserActions';

const Filteredcards = () => {

  const dispatch = useDispatch();


    const { allhotels ,loading } = useSelector((state) => state?.user);
    console.log('all hotels -',allhotels);
    console.log('all loading -',loading);
      
        useEffect(() => {
          if(!allhotels?.length){
            console.log('workingss effect');
            dispatch(GetAllHotels());
          }
        },[])


  return (
    <div>
      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
        
          <div className='allhotels flex flex-wrap'>
            {allhotels && allhotels?.map((data) => {
              return (
                <div key = {data._id} className='bg-lime-400 p-2 m-2'>
                    <h1> Hotelname = {data.Hotelname} </h1>
                    <h1> HotelTagLine = {data.HoteltagLine} </h1>
                    <h1> HotelCity = {data.HotelCity} </h1>
                    <h1> HotelLocation = {data.HotelLocation} </h1>
                    <h1> HotelDistance = {data.HotelDistance} </h1>
                    <h1> TotalRooms ={data.TotalRooms} </h1>
                    <h1> PricingPerRoom = {data.PricingPerRoom} </h1>
                    <h1> PropertyType = {data.PropertyType} </h1>
                    <h1> Adults = {data.Adults} </h1>
                    <h1> Meals = {data.Meals} </h1>
                    <h1> BedType = {data.BedType} </h1>
                   </div>
                 )
                })}
         </div>

      </div>
    </div>
  )
}

export default Filteredcards