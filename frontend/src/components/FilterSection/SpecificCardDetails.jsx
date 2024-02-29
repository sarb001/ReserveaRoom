import React from 'react'

const SpecificCardDetails = () => {
  return (
    <div>
            <div className="imagesection">
                 <span>
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