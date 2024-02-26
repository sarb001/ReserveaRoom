
import './App.css';
import {  Routes , Route } from 'react-router-dom' ;
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Translation from './components/Translation/Translation';


function App() {
  return (
      <>

      <Routes>
         <Route path='/' element = {<Home />}>  </Route>
         <Route path='/register' element = {<Register />}>  </Route>
         <Route path='/login' element = {<Login />}>  </Route>
         <Route path='/translation' element = {<Translation />}>  </Route>
      </Routes>


       <div className='bg-lime-300'>
          <div> Navbar  </div>
          <div>
            <span> ReserveaRoom.com </span>
            <span> Change Langugage Globe Icon </span>
            <span> List your Property Add Property </span>
            <button> Register </button>
            <button> Sign In </button>
          </div>
         
         <div>
           <span> Find your next stay  </span>
           <span> Search low prices on hotels, homes and much more.... </span>
         </div>

        <div>
            <span> Dates / FNS Library </span>
            <button>  Search </button>
        </div>

         <div>
           <span> Take your longest holiday yet </span>
           <span> Browse properties offering long-term stays , many at reduced monthly rates </span>
            <div className='w-[350px] h-[250px]'>
                  <img  className='w-full h-full object-cover' src = "/public/Longest-holiday.jpeg" alt = "Holiday" />
            </div>
            <button> Find a stay </button>
         </div>

         <div>
            <span> Trending  destinations </span>
            <span> Travellers searching for India also booked these </span>
            <span>
               <div> All Images </div>
               <div className='w-[350px] h-[250px]'>
                  <img  className='w-full h-full object-cover' src = "/public/Agra-main.jpg" alt = "Agra" />
               </div>
               <span> Agra </span>
               <span> New Delhi </span>
               <span> Jaipur </span>
               <span> Varanasi </span>
               <span> Jodhpur </span>
            </span>
         </div>

         <div>
           <span> Footer  </span>
         </div>
       </div>
      </>
  )
}

export default App
