import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ByMainTwinBedType } from '../Actions/UserActions.js';

const ApplyFilter = () => {

        const {double } = useSelector((state) =>  state.filter.BedType);
        const { twin  } = useSelector((state) =>  state.filter);
        
        console.log('twin 1-',twin);  console.log('double 2-',double);

        










        // const [maintwin,setmaintwin] = useState(twin);
        // const [maindouble,setmaindouble] = useState(double);

        //  const [Twinvar,setTwinvar] = useState(twin);

        // const dispatch = useDispatch();

        // const handleTwinPreference = () => {
        //         if(maintwin === 'false' || 'true'){             
        //                 setmaintwin(!maintwin);     
        //                 dispatch(ByMainTwinBedType(Twinvar))
        //                 //dispatch twinbedtype   
        //         }
        // }
        // const handleDoublePreference = () => {
        //         if(maindouble === 'false' || 'true'){
        //                 setmaindouble(!maindouble);
        //                 //dispatch doubleBedtype           
        //         }
        // }

        // console.log('twin11-',maintwin);
        // console.log('double 22-',maindouble); 

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
                                     value={maintwin}   
                                    ischecked = {twin}
                                    onChange={() => handleTwinPreference()}
                                    />
                                    <label> Twin Bed </label>
                         </div>

                                </div>
                   </div>
                                  {/* <div>
                                    <input  
                                    type = "checkbox"  value={maindouble}   ischecked = {double.toString()}
                                    onChange={() => handleDoublePreference()}
                                    />
                                    <label> Double Bed </label>
                                  </div> */}

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