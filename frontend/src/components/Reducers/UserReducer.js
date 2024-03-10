
import { createReducer } from '@reduxjs/toolkit' ;

const initialState = {
    loading : false,
    error   : false,
    isAuthenticated : false,
    allhotels :[],
    FilterData : [],
    FilterbySorting : [],
    DoubleBed  : false, 
    TwinBed  : false,
    asc : false,
    desc : false, 
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
         console.log(' Login First 5 ');
         state.loading = true;
         state.isAuthenticated = false;
         state.error = false;
      },
      LoginSuccess : (state,action) => {
         state.loading = false;
         console.log(' Login First 6 ');
         state.isAuthenticated = true;
         state.user = action.payload;
         console.log(' Login First 7 ');
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
         AllHotelsListPending :(state) => {
            console.log('dispatched 5 -');
            state.loading = true;
            state.error = false;
            state.isAuthenticated = false;
         },
         AllHotelsListSuccess : (state,action) => {
            state.loading = false;
            console.log('dispatched 6 -');
            state.allhotels = action.payload;
            console.log('dispatched 7 -');
            state.isAuthenticated = true;
            state.error = false;
         },
         AllHotelsListFailed : (state,action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
         },
      })
         
export const FilterReducer = createReducer(initialState, {

      BedTwinFilterPending :(state) => {
      state.loading = true;
      state.error = false;
      state.isAuthenticated = false;
     },
     BedTwinFilterSuccess : (state,action) => {
       state.loading = false;
       state.FilterData = action.payload;
       state.isAuthenticated = true;
       state.error = false;
     },
     BedTwinFilterFailed : (state,action) => {
      state.error = action.payload;
      state.loading = false;
      state.error = action.payload;
    },
     SortingTypeFilterPending :(state) => {
      state.loading = true;
      state.error = false;
      state.isAuthenticated = false;
     },
     SortingTypeFilterSuccess : (state,action) => {
       state.loading = false;
       state.FilterbySorting = action.payload;
       state.isAuthenticated = true;
       state.error = false;
     },
     SortingTypeFilterFailed : (state,action) => {
      state.error = action.payload;
      state.loading = false;
      state.error = action.payload;
    }
})