
import { createReducer } from '@reduxjs/toolkit' ;

const initialState = {
    loading : false,
    error   : false,
    isAuthenticated :false
}

export const UserReducer = createReducer(initialState,{
         RegisterPending :(state) => {
           state.loading = true;
           state.error = false;
           isAuthenticated : false;
         },
         RegisterSuccess : (state,action) => {
            state.loading = false;
            state.user = action.payload;
            isAuthenticated : false;
            state.error = false;
         },
         RegisterFailed : (state,action) => {
           state.error = action.payload;
           state.loading = false;
           isAuthenticated : false;
        },
        LoginPending :(state) => {
           state.loading = true;
           isAuthenticated : false;
           state.error = false;
         },
         LoginSuccess : (state,action) => {
            state.loading = false;
            isAuthenticated : true;
            state.user = action.payload;
            state.error = false;
         },
         LoginFailed : (state,action) => {
            state.error = action.payload;
            isAuthenticated : false;
            state.loading = false;
         }
      })
         