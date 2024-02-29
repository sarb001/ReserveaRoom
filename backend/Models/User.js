import mongoose, { Schema } from "mongoose";

const UserSchema = new  mongoose.Schema({
    name :{
        type : String,
        required : [true,'Please Enter a Name']
    },
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

const User = mongoose.model('UserSchema',UserSchema);

export default User;