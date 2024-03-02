import { configureStore } from '@reduxjs/toolkit';  
import { LoginUser, RegisterUser } from '../Reducers/UserReducer.js';

 const Store = configureStore({
     reducer : {
        register : RegisterUser ,
        login : LoginUser
     }
})

export default Store