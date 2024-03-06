import { configureStore } from '@reduxjs/toolkit';  
import {  HotelReducer, UserReducer } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        user : UserReducer,
        hotel: HotelReducer
     }
})

export default Store