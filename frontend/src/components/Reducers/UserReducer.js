
import { createReducer } from '@reduxjs/toolkit' ;

const initialState = {
    loading : false,
    error   : false,
    isAuthenticated : false,
    allhotels :[]
}

export const UserReducer = createReducer(initialState,{
         RegisterPending :(state) => {
           state.loading = true;
           state.error = false;
           state.isAuthenticated = false;
         },
         RegisterSuccess : (state,action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = false;
            state.error = false;
         },
         RegisterFailed : (state,action) => {
           state.error = action.payload;
           state.loading = false;
           state.isAuthenticated = false;
        },
        LoginPending :(state) => {
           state.loading = true;
           state.isAuthenticated = false;
           state.error = false;
         },
         LoginSuccess : (state,action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = false;
         },
         LoginFailed : (state,action) => {
            state.error = action.payload;
            state.isAuthenticated = false;
            state.loading = false;
         },
        LogoutPending :(state) => {
           state.loading = true;
           state.isAuthenticated = true;
           state.error = false;
         },
         LogoutSuccess : (state,action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = false;
         },
         LogoutFailed : (state,action) => {
            state.error = action.payload;
            state.isAuthenticated = true;
            state.loading = false;
         },
         UserProfilePending :(state) => {
            state.loading = true;
            state.error = false;
            state.isAuthenticated = false;
          },
          UserProfileSuccess : (state,action) => {
             state.loading = false;
             state.user = action.payload;
             state.isAuthenticated = true;
             state.error = false;
          },
          UserProfileFailed : (state,action) => {
            state.error = action.payload;
            state.loading = false;
            state.isAuthenticated = false;
         },
         AllHotelsListPending :(state) => {
            state.loading = true;
            state.error = false;
            state.isAuthenticated = false;
          },
          AllHotelsListSuccess : (state,action) => {
             state.loading = false;
             state.hotel = action.payload;
             state.isAuthenticated = true;
             state.error = false;
          },
          AllHotelsListFailed : (state,action) => {
            state.error = action.payload;
            state.loading = false;
            state.isAuthenticated = false;
         },
      
      })
         


export const  HotelReducer = createReducer(initialState ,{
      AllHotelsListPending :(state) => {
         state.loading = true;
         state.error = false;
         state.isAuthenticated = false;
      },
      AllHotelsListSuccess : (state,action) => {
         state.loading = false;
         console.log('state alljotes 1-' ,action.payload);
         state.allhotels = action.payload;
         console.log('state alljotes  2 -',action.payload);
         state.isAuthenticated = true;
         state.error = false;
      },
      AllHotelsListFailed : (state,action) => {
         state.loading = false;
         state.error = action.payload;
         state.isAuthenticated = false;
      },
})