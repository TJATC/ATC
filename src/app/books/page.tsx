"use client";
import axios from "axios";
import Box from "./Box"
import "./Books.css"
import { useEffect, useState } from "react";

interface Dic {

}

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
        console.log(fetchSlides())
        
    },[])
    
    
    return(
        <div className={["Books"].join(" ")}>
            {
            Object.keys(data).map((key:string)=>(
                <Box name={data[key as keyof typeof data]["name"]} link = {data[key]["webViewLink"]} image = {data[key]["thumbnailLink"]}/>
            ))
        }
        </div>
    )
}