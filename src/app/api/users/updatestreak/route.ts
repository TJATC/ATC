import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { connectToMongoDB } from "@/dbConfig/dbConfig";
import Datetime from 'react-datetime';

connectToMongoDB()

export async function POST(request: NextRequest){
    const req = await request.json()
    console.log("Request of Data", req)
    try {
        const date = new Date()
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
        const user = await User.findOne({username: req.username});
        
        console.log("User", user)
        const filter = { username: req.username };
        const options = { upsert: true };
        
        //update Date
        if (user.currDate==null || formattedDate!=user.currDate){
            let hs = user.highstreak;
            if (user.streak+1>user.highstreak){hs = user.streak+1}
            // await User.updateOne(filter, {$set:{currDate: date, activity: 0, streak:0, highstreak:0}}, options)

            await User.updateOne(filter, {$set:{currDate: formattedDate, activity: 1, streak:user.streak+=1, highstreak:hs}}, options)

        }
        else await User.updateOne(filter, {$set:{activity:user.activity+=1}}, options)

        return NextResponse.json(user, {status:200})
    } catch (error:any) {
        console.log(error)
    }
    
}