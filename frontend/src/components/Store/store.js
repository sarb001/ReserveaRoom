import { configureStore } from '@reduxjs/toolkit';  
import { AuthReducers, FilterReducer, HotelReducer, UserReducer } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        user : UserReducer,
        auth : AuthReducers,
        Hotel : HotelReducer,
        Filter : FilterReducer,
     }
})

export default Store