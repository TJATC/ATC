import mongoose from "mongoose";

export async function connectToMongoDB(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log("mongoose connected")
        })
        connection.on('error', (err)=>{
            console.log("mongoose connection failed", err)
            process.exit();
        })
    }catch(error){
        console.log(error)
    }
}