import mongoose from "mongoose";


export default async function dbconnection(){
    await mongoose.connect(process.env.MONGO_URI,{
        dbName : process.env.DB_NAME
    }).then((con) => console.log('mongodb Connected Done'))
    .catch((err) => console.log('err in conection -',err));
}
