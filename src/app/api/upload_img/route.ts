import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const formData = await req.formData();
    const image = formData.get("image") as unknown as File; 
    return NextResponse.json({msg: image}, {
        status:200
    })

}