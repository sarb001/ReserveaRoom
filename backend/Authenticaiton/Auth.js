import jwt from 'jsonwebtoken';
import User from '../Models/User.js';

const VerifyAuthentication = async(req,res,next) => {
    try {
        
        const { token } = await req.cookies; 
        console.log('token in -',token);

        if(!token){
            return  res.status(401).json({
                message : " Token Not Present "
            })
        }

        const Decoded =  jwt.verify(token,process.env.JWT_TOKEN);
        console.log('decoded is-',Decoded);

        req.user = await User.findById(Decoded._id);
        next();

    } catch (error) {
        console.log('error-',error);
        return res.status(404).json({
            success : false,
            message : " Authentication Failed "
        })
    }
}

export default VerifyAuthentication