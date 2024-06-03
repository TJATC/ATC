import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest){
    const req = await request.json()
    try {
        const cookieStore = cookies()
        const token:any = cookieStore.get(req.token)
        if (token===undefined) return NextResponse.json({}, {status:200})
        const tokenData = jwt.verify(token['value'], process.env.TOKEN_SECRET!);

        return NextResponse.json(tokenData, {status:200})
    } catch (error:any) {
        console.log( error.message)
        return NextResponse.json({error: error.message}, {status:500})
    }
}