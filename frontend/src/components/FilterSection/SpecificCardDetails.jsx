import React from 'react'
import { useParams } from 'react-router-dom'

const SpecificCardDetails = () => {

    const { id }  = useParams();
    console.log('id is-',id);

  return (
    <div className='m-64'>
            <div className="imagesection">
                 <span>
                    <h1> Main Id is - {id} </h1>
                    <img src = "/public/Banglore.jpg" alt = "image" />
                 </span>
            </div>

            <div className="alldetails">
                <div> Premium Quadruple Room (Non-A/C) </div>
                <div> Price for: Max persons: 4 </div>
                <div>  Beds: 2 double beds   </div>
                <div> Free cancellation before 18:00 on 29 February 2024 </div>
                <div>  No prepayment needed – pay at the property </div>
                <div>  Only 2 rooms left on our site </div>
                <button className='bg-slate-800 p-4'> Reserve Now </button>
            </div>
    </div>
  )
}

export default SpecificCardDetails