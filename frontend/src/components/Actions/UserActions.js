
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
        
        const {data} = await  axios.post('/api/login' , 
        {email,password},
        {
            withCredentials : true,
            headers : {
                'Content-Type' : 'application/json'
            }
        })

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