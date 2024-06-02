import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest){
    const req = await request.json()
    try {
        const cookieStore = cookies()
        const token = cookieStore.get(req.token)
        console.log(token)
        return NextResponse.json({token:token}, {status:200})
    } catch (error) {
        
    }
}