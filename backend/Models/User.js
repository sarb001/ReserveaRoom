import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt' ;
import jwt from 'jsonwebtoken' ;

const UserSchema = new  mongoose.Schema({
    fname :{
        type : String,
        required : [true,'Please Enter a Name']
    },
    // avatar : {
    //     public_id : String,
    //     url : String
    // },
    email :{
        type : String,
        required : [true,'Please Enter an Email'],
        unique   : [true,'Email Already Exists']
    },
    password :{
        type : String,
        required : [true,'Please Enter a Password'],
        minLength : [6 , "Password must be atleast 6 characters"],
        select :false
    }
})

// Password Hashing before saving to db 
        UserSchema.pre('save' , async function(next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)
    }
    next();
})

// Password Matching both 
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

// create token 
UserSchema.methods.generateToken =  function(){
    return  jwt.sign({_id:this._id} , process.env.JWT_TOKEN);
}

const User = mongoose.model('User',UserSchema);

export default User;