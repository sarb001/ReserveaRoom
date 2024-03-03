import { configureStore } from '@reduxjs/toolkit';  
import { ProfileReducer, UserReducer } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        user : UserReducer,
        profile :ProfileReducer 
     }
})

export default Store