"use client"
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/navigation'
import axios from 'axios';
import PhotoCard from "./Photocard"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

export default function Image(){
    const [image, setImage] = useState<any | null>([])
    return(
        
    <div className="flex flex-col items-center justify-center content-center my-4 text-center">
        <label htmlFor="name" className="">Upload Your Image:</label> 
        <input 
            type="file" 
            accept="image/*" 
            onChange = {(e:any) => setImage([...e.target.files])}
        />
        <div className="flex justify-center content-center my-4">
            {console.log(image)}
            {
                image.map((file:any, index:any)=>(
                <PhotoCard key={index} url={URL.createObjectURL(file)} delete={()=> setImage([])}/>
                ))
            }    
        </div>
        </div>
    )
}