"use client";
import connectfour from "@/(assets)/(games)/connectfour.json"
import { useState, useEffect } from "react";
import GamePiece from "./gamepiece"

export default function Page() {
    const [color, setColor] = useState(false); //True = red, False = blue
    const changeColor = () => {
        if (color===true) (setColor(false));
        else (setColor(true))
    }

    return (
        <div className=" flex gap-10 flex-wrap content-center items-center justify-center p-3 ">
            <div className=" flex gap-10 flex-wrap items-center justify-center bg-blue-400 mb-10 p-3 py-5 w-[60vw]">
            {connectfour.map(({name, img}, index) => (
                <GamePiece name={name} img={img} color={color}/>
            ))}
            </div>
            
        </div>
    );
}
