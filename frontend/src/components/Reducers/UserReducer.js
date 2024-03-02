
import { createReducer } from '@reduxjs/toolkit' ;

const initialState = {
    loading : false,
    error   : false,
}

export const RegisterUser = createReducer(initialState,{
         RegisterPending :(state) => {
           state.loading = true;
           state.error = false;
         },
         RegisterSuccess : (state,action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = false;
         },
         RegisterFailed : (state,action) => {
           state.error = action.payload;
           state.loading = false;
        }
})

export const LoginUser = createReducer(initialState ,{
      LoginPending :(state) => {
         state.loading = true;
         state.error = false;
      },
      LoginSuccess : (state,action) => {
         state.loading = false;
         state.user = action.payload;
         state.error = false;
      },
      LoginFailed : (state,action) => {
         state.error = action.payload;
         state.loading = false;
      }
})
