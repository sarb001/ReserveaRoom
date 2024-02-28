import React from 'react'

const Home = () => {

     const Destinations = [
      { Place : 'New Delhi' ,  img : '/public/NewDelhi.jpg' },
      { Place : 'Banglore ' ,  img : '/public/Banglore.jpg'  },
      { Place : 'Mumbai'    ,  img : '/public/Mumbai.jpg' },
      { Place : 'Chennai'   ,  img : '/public/Chennai.jpg' },
      { Place : 'Hyderabad' ,  img : '/public/Hyderabad.jpg' }
     ]

  return (
    <div className='m-4'>
       <div className='text-5xl py-2'> Find your next stay  </div>
       <div className='text-2xl py-2'> Search low prices on hotels, homes and much more.... </div>

      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
        {Destinations.map(main => 
            <div className='grid justify-center text-center'  key = {main.Place}>
                <div className='bg-slate-600 p-2 grid grid-rows-[0.5fr,2fr]'>
                      <div className='text-4xl'>  {main.Place} </div>
                      <div className='w-[350px] h-[250px] text-center'>
                            <img  className='w-full h-full object-cover overflow-hidden rounded-2xl' src = {main.img} alt = "Holiday" />
                      </div>
                      
                </div>
            </div>  
        )}
      </div>

    </div>
  )
}


export default Home 
    