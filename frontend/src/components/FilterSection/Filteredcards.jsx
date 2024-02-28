import React from 'react'

const Filteredcards = () => {

  const Destinations = [
    { Place : 'New Delhi' ,  img : '/public/NewDelhi.jpg'  , Hotelname :'Hilton New Delhi Embassy' , Distance : '5k from centre'  , BedType : 'Twin Bed' , Rating: '8.5'  , Reservation : ' Free Cancellation'  , adults : '2' , nights : '4' },
    { Place : 'Banglore ' ,  img : '/public/Banglore.jpg'  , Hotelname :'ObEROI  Bengaluru Embassy' , Distance : '2k from centre'  , BedType : 'Double Bed' , Rating: '6.5' , Reservation : 'No Prepayment Needed '   , adults : '2' , nights : '2'},
    { Place : 'Mumbai'    ,  img : '/public/Mumbai.jpg'    , Hotelname :'tAJ Hotel Mumbai Embassy' , Distance : '4k from centre'  , BedType : 'Double Bed' , Rating: '7.5' , Reservation : 'Book wihout Credit Card' , adults : '1' , nights : '2'},
    { Place : 'Chennai'   ,  img : '/public/Chennai.jpg'   , Hotelname :'Hilton CHennai Embassy' , Distance : '4k from centre'  , BedType : 'Twin Bed' , Rating: '7.0' , Reservation : ' Free Cancellation'     ,adults : '4' , nights : '3'} ,
    { Place : 'Hyderabad' ,  img : '/public/Hyderabad.jpg' , Hotelname :'Hilton Hyderabad Embassy' , Distance : '3k from centre'  , BedType : 'Twin Bed' , Rating: '8'     ,Reservation : 'Book wihout Credit Card' ,adults : '3' , nights : '3'}
   ]

  return (
    <div>
      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
        {Destinations.map(main => 
            <div className='grid justify-center text-center'  key = {main.Place}>
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
                        <div> Adults - {main.adults} Nights -{main.nights}  </div>
                      </div>
                </div>
            </div>  
        )}
      </div>
    </div>
  )
}

export default Filteredcards