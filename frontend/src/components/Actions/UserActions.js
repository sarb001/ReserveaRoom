
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
        toast.error(' User Registration Failed ');
        return dispatch({type: 'RegisterFailed' , payload :  error.response.data.message});
    }
}

export const UserLogin = (email,password) => async(dispatch) =>  {
    try {
        dispatch({type:'LoginPending'});
        
        const {data} = await  axios.post('/api/login' , 
        {email,password},
        {
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        toast.success(' User Logged In ');
        dispatch({type: 'LoginSuccess' , payload : data.user});
        
    } catch (error) {
        console.log('error in  Login -',error);
        dispatch({type: 'LoginFailed' , payload :  error.response.data.message});
        return toast.error(' Login Registration Failed ');
    }
}