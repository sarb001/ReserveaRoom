
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
import { useSelector } from 'react-redux';

function App() {

  const {isAuthenticated} = useSelector(state => state.user);
  console.log('isAuth -',isAuthenticated);

  return (
      <div className='mainapp'>
        {isAuthenticated &&  <Navbar />}
            <Routes>
              <Route path='/' element = {isAuthenticated ?<Home /> : <Login />}>  </Route>
              <Route path='/register' element = {isAuthenticated ?<Home /> :<Register />}>  </Route>
              <Route path='/login' element = {isAuthenticated ? <Home /> :<Login />}>  </Route>
              <Route path='/translation' element = {isAuthenticated ?  <Translation /> : <Login /> }>  </Route>
              <Route path='/listing' element = {isAuthenticated ? <PropertyListing /> : <Login />}>  </Route>
              <Route path='/filter' element =  {isAuthenticated  ? <FilterSection /> : <Login />}>  </Route>
              <Route path='/card/:id' element = {isAuthenticated  ? <SpecificCardDetails /> : <Login />} ></Route>
            </Routes>
          {/* <Footer /> */}
      </div>
  )
}

export default App
