
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

        console.log('user Registered -',User);
        toast.success(' User Registered ');
        dispatch({type: 'RegisterSuccess' , payload : data.user});
        
    } catch (error) {
        console.log('error in  registration -',error);
        toast.error(' User Registration Failed ');
        return dispatch({type: 'RegisterFailed' , payload :  error.response.data.message});
    }
}

export const UserLogin = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}