"use client";
import axios from "axios";
import Box from "./Box"
import "./Books.css"
import { useEffect } from "react";

export default async function books(){
    let data:any = {}
    useEffect(()=>{
        const onLogin = async () =>{
            try {
                const response = await axios.post('/api/slides')
                return response.data.data
            } catch (error:any) {
                console.log(error.message)
            }
        }
        data = onLogin()
    }, [])
    

    
    console.log(data)
    return(
        <div className={["Books"].join(" ")}>
            {
            Object.keys(data).map((key:any)=>(
                <Box name={data[key]["name"]} link = {data[key]["webViewLink"]} image = {data[key]["thumbnailLink"]}/>
            ))
        }
        </div>
    )
}