"use client";
import axios from "axios";
import Box from "./Box"
import "./Books.css"
import { useEffect, useState } from "react";

export default async function books(){
    const [data, setData] = useState({})
    useEffect(()=>{
        async function fetchSlides(){
            try {
                const response = await axios.post('/api/slides')
                setData(response.data.data)
                return response.data.data
            } catch (error:any) {
                console.log(error.message)
            }
        }
        fetchSlides()
        console.log("data of DATA ", data)
        
    },[])
    
    
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