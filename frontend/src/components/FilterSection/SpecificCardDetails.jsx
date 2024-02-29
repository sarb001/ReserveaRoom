import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificCardDetails = () => {

    const { id }  = useParams();
    console.log('id is-',id);

  return (
    <div className='m-12'>
            <div className="imagesection grid grid-cols-[0.8fr,1.2fr]">

                <div>
                    <span>
                        <div className='w-[25rem] h-[20rem]'>
                            <img className='w-full h-full object-cover' src = "/public/Banglore.jpg" alt = "image" />
                        </div>
                    </span>
                </div>

                <div className="alldetails">
                    <h1> Main Id is - {id} </h1>
                    <div> Premium Quadruple Room (Non-A/C) </div>
                    <div> Price for: Max persons: 4 </div>
                    <div>  Beds: 2 double beds   </div>
                    <div> Free cancellation before 18:00 on 29 February 2024 </div>
                    <div>  No prepayment needed – pay at the property </div>
                    <div>  Only 2 rooms left on our site </div>
                    <div className='my-8'>
                     <button className='bg-slate-800 p-2 text-white'> Reserve Now </button>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default SpecificCardDetails