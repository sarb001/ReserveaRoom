import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

     const Destinations = [
      { Place : 'New Delhi' ,  img : 'NewDelhi.jpg' },
      { Place : 'Banglore ' ,  img : 'Banglore.jpg'  },
      { Place : 'Mumbai'    ,  img : 'Mumbai.jpg' },
      { Place : 'Chennai'   ,  img : 'Chennai.jpg' },
      { Place : 'Hyderabad' ,  img : 'Hyderabad.jpg' }
     ]

  return (
    <div className='m-4 xl:m-8'>
       <div className='text-5xl py-2'> Find your next stay  
       </div>
       <div className='text-xl py-2'> Search low prices on hotels, homes and much more.... </div>

          {/*  Calendar Here   */}
        {/* <div></div> */}

          <div className='mt-16'>
            <div className='text-3xl'>  Trending destinations </div>  
            <div className='text-xl'> Most popular choices for travellers from India </div>  
          </div>

      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
        {Destinations.map(main => 
            <div className='grid justify-center text-center'  key = {main.Place}>
                <div className='bg-slate-600 p-2 grid grid-rows-[0.5fr,2fr]'>
                      <div className='text-4xl'>  {main.Place} </div>
                       <Link to = '/filter'>
                        <div className='w-[350px] h-[250px] text-center'>
                              <img  className='w-full h-full object-cover overflow-hidden rounded-2xl' src = {main.img} alt = "Holiday" />
                        </div>
                       </Link>
                </div>
            </div>  
        )}
      </div>

    </div>
  )
}


export default Home 
    