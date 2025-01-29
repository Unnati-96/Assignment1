import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config();
export const Mongodb= async ()=>{
    try {
    await mongoose.connect(process.env.connectionURL);
    console.log("Connection Established!!"); 
    // mongoose.disconnect(); 

    } catch (error) {
        console.log("Unable to connect!!",error);
    }}
