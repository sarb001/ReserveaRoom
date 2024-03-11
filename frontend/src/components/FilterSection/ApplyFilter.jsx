import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BedTypeBox, GetAllHotels, Sorting  } from '../Actions/UserActions.js';
import Filteredcards from './Filteredcards.jsx';

const ApplyFilter = () => {
        
        const { allhotels ,FilterData , loading }  = useSelector((state) => state?.Hotel);

        const { DoubleBed ,TwinBed  }  = useSelector((state) => state?.Filter);

        console.log('filtercards -',FilterData);

        const dispatch = useDispatch();

        useEffect(() => {
                if (!allhotels?.length) {
                        dispatch(GetAllHotels());
                }
        },[allhotels,dispatch])


        const  handlebox = async (e) => {
                e.preventDefault();
                        // console.log('target value checked -',e.target.checked);
                        // console.log('target value CLICK -'  ,e.target.value);
                
                        const data = e.target.value;
                        const check = e.target.checked;
                        await dispatch(BedTypeBox(data,check));       // twinbed 
                    
        }

        const checkoption = async(e) => {
                e.preventDefault();
                console.log('target dropdown -',e.target.value);
                const sortvalue = e.target.value;
                console.log('sort value -',sortvalue);
                await dispatch(Sorting(sortvalue));
        }


  return (
    <div>
                <div>
                    <span className='text-3xl'> Filter By: </span>
                </div>

                    <div className='my-4'>
                            <select onClick={(e) => checkoption(e)}>
                              <option value='asc'> Price : low to highest </option>
                              <option value='desc'> Price : High to lowest </option>
                              <option value='distance'> Distance from Center </option>
                            </select>
                    </div> 

                     <div  className='my-4'>
                                <span className='text-2xl'>  Bed Preference </span>
                                <div>
                                <div>
                                        <input  type = "checkbox" 
                                        value = 'TwinBed'  
                                        ischecked = {TwinBed.toString()}
                                        onChange={(e) => handlebox(e)}
                                        />
                                        <label> Twin Bed </label>
                                </div>

                                  <div>
                                    <input  type = "checkbox"
                                    value = 'DoubleBed' 
                                    ischecked = {DoubleBed.toString()}
                                    onChange={(e) => handlebox(e)}
                                    />
                                    <label> Double Bed </label>
                                  </div>

                                </div>
                    </div>
                
                  <div>
                  <div className='allhotels flex flex-wrap'>
                        {FilterData && FilterData?.map((data) => {
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
                    


                    {/* <div  className='my-4'>
                            <span className='text-2xl'> Meals </span>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Self-catering </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label>  Breakfast & lunch included </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label>   All meals included </label>
                                </div>
                    </div> */}

                    {/* <div  className='my-4'>
                            <span className='text-2xl'> Property Type  </span>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Hotels </label>
                                </div>
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Apartments </label>
                                </div>
                                
                                <div>
                                        <input  type = "checkbox"  />
                                        <label> Villas </label>
                                </div>
                    </div> */}
    </div>
  )
}

export default ApplyFilter
