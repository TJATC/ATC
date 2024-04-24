//Credits to Anna Hsu, adapted to fit react
"use client"
import "./Hamburger.css"
import React, {useState, useEffect, useRef} from 'react';


export default function Hamburger(){
    const [HamClass, setHamClass] = useState("");
    const f = () =>{
        if (HamClass==="") setHamClass("active")
        else setHamClass("")
    }
    return(<svg
        id="x"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        height="36"
        width="36"
        onClick={f}
      >
        <g className={["top-bars", HamClass].join(" ")} strokeWidth="4">
          <path className={["bar", "bar1"].join(" ")} d="M 6,8 H 30"></path>
          <path className={["bar", "bar2"].join(" ")} d="M 6,17 H 30"></path>
        </g>
      </svg>)
}