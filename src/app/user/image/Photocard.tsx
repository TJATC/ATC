import React from "react"
import Image from "next/image"

interface PhotoCardProps{
    url: string
    delete: any
}

export default function PhotoCard(props:PhotoCardProps){
    return(
        <div className="flex flex-col justify-center content-center my-4">
            <Image src={props.url} width={500} height={500} alt="image"/>
            <button className="text-center mt-2 bg-red-300" type="button" onClick={props.delete}>
                Delete
            </button>
        </div>
        
    )
}