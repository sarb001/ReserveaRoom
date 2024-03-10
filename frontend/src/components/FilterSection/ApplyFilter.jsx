import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BedTypeBox, Sorting  } from '../Actions/UserActions.js';

const ApplyFilter = () => {

        const { DoubleBed ,  TwinBed , FilterData } = useSelector((state) =>  state.filter);

        // console.log('FilterData -',FilterData);

         const dispatch = useDispatch();

        const  handlebox = async (e) => {
                        console.log('target value checked -',e.target.checked);
                        console.log('target value CLICK -'  ,e.target.value);
                        
                                 // true
                        const data = e.target.value;
                        const check = e.target.checked;
                        await dispatch(BedTypeBox(data,check));       // twinbed 
                    
        }

        const checkoption = async(e) => {
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

                    <div  className='my-4'>
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
                    </div>

                    <div  className='my-4'>
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
                    </div>
    </div>
  )
}

export default ApplyFilter
