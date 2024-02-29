import express from 'express';
import dotenv from 'dotenv' ;
import dbconnection from './Database/Db.js';

const app  = express();
dotenv.config();

dbconnection();
const PORT = process.env.PORT;

app.listen(PORT,(req,res) => {
    console.log(`Running on Port Locally ${PORT} Bro`);
})