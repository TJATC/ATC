import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { connectToMongoDB } from "@/dbConfig/dbConfig";

connectToMongoDB()

export async function POST(request: NextRequest){
    const req = await request.json()
    console.log("Request of Data", req)
    try {
     
        const user = await User.findOne({username: req.username});
        console.log("User", user)
        const filter = { username: req.username };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                name: req.name, 
                bio: req.bio
            },
          };

        
        const result = await User.updateOne(filter, updateDoc, options)
        return NextResponse.json(user, {status:200})
    } catch (error:any) {
        console.log(error)
    }
    
}