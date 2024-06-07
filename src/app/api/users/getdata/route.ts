import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { connectToMongoDB } from "@/dbConfig/dbConfig";

connectToMongoDB()

export async function POST(request: NextRequest){
    const req = await request.json()
    try {
        const cookieStore = cookies()
        const token:any = cookieStore.get(req.token)
        const tokenData:any = jwt.verify(token['value'], process.env.TOKEN_SECRET!);
        const user = await User.findOne({email: tokenData['email']});
        console.log(user)
        return NextResponse.json(user, {status:200})
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
    
}