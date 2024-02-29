import express from 'express';
import dotenv from 'dotenv' ;
import dbconnection from './Database/Db.js';
import user from './Routes/UserRoute.js';


const app  = express();

app.use(express.json({
    limit : '50mb'
}))

app.use(express.urlencoded({ extended : false }));

dotenv.config();

dbconnection();
const PORT = process.env.PORT;

app.use('/api',user);

app.listen(PORT,(req,res) => {
    console.log(`Running on Port Locally ${PORT} Bro`);
})