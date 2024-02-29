
import './App.css';
import {  Routes , Route } from 'react-router-dom' ;
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Translation from './components/Translation/Translation';
import Navbar from './components/Navbar/Navbar';
import PropertyListing from './components/PropertyListing/PropertyListing';
import FilterSection from './components/FilterSection/FilterSection';
import SpecificCardDetails from './components/FilterSection/SpecificCardDetails';


function App() {
  return (
      <div className='anta-regular'>
         <Navbar />
            <Routes>
              <Route path='/' element = {<Home />}>  </Route>
              <Route path='/register' element = {<Register />}>  </Route>
              <Route path='/login' element = {<Login />}>  </Route>
              <Route path='/translation' element = {<Translation />}>  </Route>
              <Route path='/listing' element = {<PropertyListing />}>  </Route>
              <Route path='/filter' element = {<FilterSection />}>  </Route>
              <Route path='/card/:id' element = {<SpecificCardDetails />}>  </Route>
            </Routes>
          {/* <Footer /> */}

      </div>
  )
}

export default App
