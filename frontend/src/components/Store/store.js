import { configureStore } from '@reduxjs/toolkit';  
import {  UserReducer } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        user : UserReducer,
     }
})

export default Store