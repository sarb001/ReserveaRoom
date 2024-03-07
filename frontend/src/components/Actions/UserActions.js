
import axios from 'axios' ;
import { toast } from 'react-toastify';

// dispatch available globally to all by provider 
export const UserRegister = (fname,email,password)  => async(dispatch) => {

    try {
        dispatch({type:'RegisterPending'});
        
        const {data} = await  axios.post('/api/register' , 
        {fname,email,password},
        {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        console.log('user Registered -',data.user);
        toast.success(' User Registered ');
        dispatch({type: 'RegisterSuccess' , payload : data.user});
        
    } catch (error) {
        console.log('error in  registration -',error);
        dispatch({type: 'RegisterFailed' , payload :  error.response.data.message});
        return toast.error(' User Registration Failed ');
    }
}

export const UserLogin = (email,password) => async(dispatch) =>  {
    try {
        dispatch({type:'LoginPending'});
        console.log(' Login First 3 ');
        const {data} = await  axios.post('/api/login' , 
        {email,password},
        {
            withCredentials : true,
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        
        console.log(' Login First 4 ');
        console.log('login data -',data);
        dispatch({type: 'LoginSuccess' , payload : data.user});
        return toast.success(' User Logged In ');
        
    } catch (error) {
        console.log('error in  Login -',error);
        dispatch({type: 'LoginFailed' , payload :  error.response.data.message});
        toast.error(' Login Registration Failed ');
        return;
    }
}

export const userLogout = () => async(dispatch) => {
    try {
        dispatch({type:'LogoutPending'});
        const {data} = await axios.get('/api/logout' , {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        dispatch({type:'LogoutSuccess' , payload : data.user })
        console.log('data user logout -',data.user);
        return toast.success(' User Logged Out ');

    } catch (error) {
        console.log('Logged Out User error -',error);
        dispatch({type:'LogoutFailed'})
        return toast.error('Logout Failed');
    }
}


export const loaduser = () => async(dispatch) => {
    try {
         dispatch({type:"UserProfilePending"});

         const { data } = await  axios.get(`/api/profile`);

         console.log('data loading mainly...',data);
         dispatch({type:"UserProfileSuccess", payload : data.user});

    } catch (error) {
        console.log('error in loading -',error);
        dispatch({type:"UserProfileFailed",payload: error.response.data.message})
    }
}

export const HotelListing = (Hotelname,HoteltagLine,HotelCity,HotelLocation,HotelDistance,TotalRooms,PricingPerRoom ,BedType ,Meals ,PropertyType , Adults ) => async(dispatch) => {
    try {
        dispatch({type:'HotelListingPending'});

        console.log('hote frontend -',Hotelname,HoteltagLine,HotelCity,HotelLocation,HotelDistance,TotalRooms,PricingPerRoom ,Meals ,BedType , PropertyType , Adults );

        const {data} = await axios.post('/api/listing' , 
        {Hotelname,HoteltagLine,HotelCity,HotelLocation,
        HotelDistance,TotalRooms ,PricingPerRoom ,BedType  , Meals ,PropertyType , Adults } , 
        {
            withCredentials : true,
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        console.log('Hotel data -',{data});
        dispatch({type:'HotelListingSuccess', payload : data.hotel});
        return  toast.success('Added to  the List');

    } catch (error) {
        console.log('error lsting -',error);
        dispatch({type:'HotelListingFailed', payload : error.response.data.message });
        return toast.error(' Try Adding Again ');
    }
}

export const  GetAllHotels = () => async(dispatch) => {
    try {
            dispatch({type:"AllHotelsListPending"});

            const {data} = await axios.get('/api/allhotels' ,{
                withCredentials :true,
                headers : {
                    'Content-Type' : 'application/json',
                }
            })
            
            console.log('get all data -',data);
            dispatch({type:"AllHotelsListSuccess" , payload: data.allhotels});
            return;
    } catch (error) {

        console.log('error inall -',error);
        dispatch({type:"AllHotelsListFailed" , payload : error.response.data.message });
        return;
    }
}