import { configureStore } from '@reduxjs/toolkit';  
import {  FilterReducer, UserReducer } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        user : UserReducer,
        filter : FilterReducer
     }
})

export default Store