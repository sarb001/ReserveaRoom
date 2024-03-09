import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BedTypeBox  } from '../Actions/UserActions.js';

const ApplyFilter = () => {

        const { DoubleBed ,  TwinBed } = useSelector((state) =>  state.filter);
        
         const dispatch = useDispatch();

        const  handlebox = async (e) => {
                console.log('target value -',e.target.value);
                const data = e.target.value;
                 await dispatch(BedTypeBox(data));
        }

  return (
    <div>
                <div>
                    <span className='text-3xl'> Filter By: </span>
                </div>
{/* 
                    <div className='my-4'>
                            <select>
                              <option value='top-pics'> Price : low to highest </option>
                              <option value='discounts'> Distance from Center </option>
                            </select>
                    </div>  */}

                     <div  className='my-4'>
                                <span className='text-2xl'>  Bed Preference </span>
                                <div>
                                <div>
                                        <input  type = "checkbox" 
                                        value = 'TwinBed'   
                                        ischecked = {TwinBed}
                                        onChange={(e) => handlebox(e)}
                                        />
                                        <label> Twin Bed </label>
                                </div>

                                  <div>
                                    <input  type = "checkbox"
                                    value = 'DoubleBed'   
                                    ischecked = {DoubleBed}
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

     // const BedPreferRence = [
        //         { label : 'Twin Bed'   , ischecked : twin ,   title : 'TwinBed' },
        //         { label : 'Double Bed' , ischecked : double , title : 'DoubleBed' }
        // ]