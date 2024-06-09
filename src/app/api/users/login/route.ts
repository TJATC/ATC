import { connectToMongoDB } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from 'next/server';

import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

connectToMongoDB();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        let {email, password} = reqBody; 
        email = email.toLowerCase();
        console.log(reqBody);

        // Find the data 
        const user = await User.findOne({email});
        //no valid user
        if(!user){
            return NextResponse.json(
                {error: 'User does not exist in DB'}, 
                {status:400}
            );
        }
        console.log(user)
        
        // Compare Password, make sure is right
        const correct = await bcryptjs.compare(password, user.password);

        if(!correct){
            return NextResponse.json({error:"Invalid Password"}, {status:400})
        }

        //Token Data 
        const tokenData = {
            id: user._id, 
            username: user.username, 
            email: user.email,
        };

        //Create a TOKEN
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: '2d',    
        })

        // User's Cookies
        const response = NextResponse.json({
            message: 'Login Successful', 
            success: true,
        });

        const date = new Date()
        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })
 
        console.log("User", user)
        const filter = { username: user.username };
        const options = { upsert: true };
        
        //update Date
        if (user.currDate==null || formattedDate!=user.currDate){
            let hs = user.highstreak;
            if (user.streak+1>user.highstreak){hs = user.streak+1}
            // await User.updateOne(filter, {$set:{currDate: date, activity: 0, streak:0, highstreak:0}}, options)

            await User.updateOne(filter, {$set:{currDate: formattedDate, activity: 0, streak:user.streak+=1, highstreak:hs}}, options)

        }
      
        
        // Send the token 
        response.cookies.set('token', token, {httpOnly:true});
        return response;

    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}