import React from 'react'

const Home = () => {
  return (
    <div className='m-4'>
       <div className='text-5xl py-2'> Find your next stay  </div>
       <div className='text-2xl py-2'> Search low prices on hotels, homes and much more.... </div>

      <div className='bg-slate-600 p-2 grid grid-rows-[1fr,3fr]'>
            <div className='text-2xl'>  Offering long-term stays </div>
            <div className='w-[350px] h-[250px] text-center'>
                  <img  className='w-full h-full object-cover overflow-hidden rounded-2xl' src = "/public/Longest-holiday.jpeg" alt = "Holiday" />
            </div>
            <div className='my-8 text-center'>
             <button className='bg-slate-200 p-4'> Find a stay </button>
            </div>
              
      </div>

      <div className='bg-slate-600 p-2 grid grid-rows-[1fr,3fr] my-8'>
            <div className='text-2xl'>  Trending  destinations  </div>
            <div className='w-[350px] h-[250px] text-center'>
              <img  className='w-full h-full object-cover' src = "/public/Agra-main.jpg" alt = "Agra" />
            </div>
            <div className='my-8 text-center'>
             <button className='bg-slate-200 p-4'> Find Destinations </button>
            </div>
              
      </div>

    </div>
  )
}


export default Home 
    