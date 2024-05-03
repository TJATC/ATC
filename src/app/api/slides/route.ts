import { NextRequest, NextResponse } from 'next/server';
import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
    keyFile: process.cwd() + "/credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  })



export async function POST() {
    // allows you to use drive API methods e.g. listing files, creating files.
    
    try {
        const drive = google.drive({ version: "v3", auth })
        const res = await drive.files.list({q: "'1-Ii3RCNQ3NPLMv8WQQGSDprwCq5In2CR' in parents"})   ;
        const files = res.data.files

        
        
        return NextResponse.json(
            {data:files});
    } 
    catch (error: any) {
      return NextResponse.json({error: error.message}, {status:500})
    }
  }