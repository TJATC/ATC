import { NextRequest, NextResponse } from 'next/server';
import { google } from "googleapis"

const auth = new google.auth.GoogleAuth({
    keyFile: process.cwd() + "/credentials.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  })

// async function getLinks(ids_list:any){
//     const drive = google.drive({ version: "v3", auth })
//     let links = []
//     for(const id of ids_list){
//         const webViewLink = await drive.files.get({
//             fileId: id,
//             fields: 'webViewLink'
//         }).then(response => 
//             response.data.webViewLink
//         );
//         links.push(webViewLink)
//     }
//     return links
// }

export async function POST() {
    // allows you to use drive API methods e.g. listing files, creating files.
    
    try {
        const drive = google.drive({ version: "v3", auth })
        const res = await drive.files.list({q: "'1-Ii3RCNQ3NPLMv8WQQGSDprwCq5In2CR' in parents", fields: 'nextPageToken, files(id, name,thumbnailLink, webViewLink)'})   ;
        const files = res.data.files

        return NextResponse.json(
            {data: files});
    } 
    catch (error: any) {
      return NextResponse.json({error: error.message}, {status:500})
    }
  }