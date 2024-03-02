// using init state 
// create Slices 

import { createReducer } from '@reduxjs/toolkit' ;

const initialState = {
    loading : false,
}

export const RegisterUser = createReducer(initialState,{
        RegisterRequest :(state) => {
           state.loading = true;
        },
        RegisterPending : (state,action) => {
           state.loading = false;
        },
        RegisterFailed : (state,action) => {
           state.loading = false;
        }
})

export const LoginUser = createReducer(initialState ,{
    LoginRequest :(state) => {
        state.loading = true;
     },
     LoginPending : (state,action) => {
        state.loading = false;
     },
     LoginFailed : (state,action) => {
        state.loading = false;
     }
})
