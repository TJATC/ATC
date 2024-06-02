import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest){
    const req = await request.json()
    try {
        const cookieStore = cookies()
        const token:any = cookieStore.get(req.token)
        const tokenData = jwt.verify(token['value'], process.env.TOKEN_SECRET!);
        console.log("token", tokenData)
        return NextResponse.json(tokenData, {status:200})
    } catch (error) {
        
    }
}