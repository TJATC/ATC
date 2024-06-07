import {connectToMongoDB} from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

connectToMongoDB();

// POST Route, create a new user 
export async function POST(request: NextRequest){
    try {
        // Grab data from body 
        const reqBody = await request.json();
        let {username, email, password} = reqBody;
        email = email.toLowerCase();
        username = username.toLowerCase();
        console.log(reqBody);

        const user = await User.findOne({email});

        if (user){
            return NextResponse.json({
                error: 'This user exists'
            }, {status: 400})
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);    
        const hashedPassword = await bcrypt.hash(password, salt)

        // Create user
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword,
            streak: 0,
            currDate: new Date(),
            activity: 0,
            highstreak: 0
        });

        // Save into Database
        const savedUser = await newUser.save()

        return NextResponse.json({
            message: 'User Created', 
            success: true, 
            savedUser,
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}
