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
        
              {loading  === 'true' ?  <Loader /> : "JNVKEJNFLWEDNLEW"}

            {allhotels && allhotels?.map((data) => {
                 return (
                   <div key = {data._id}>
                    <h1> {data.Hotelname} </h1>
                    <h1> {data.BedType} </h1>
                   </div>
                 )
            })}


      </div>
    </div>
  )
}

export default Filteredcards