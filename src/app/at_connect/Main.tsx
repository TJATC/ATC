import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Main.css"
import Link from "next/link";
interface MainProps{
    source: string
    link: string
    handleTileClick: (arg0:string)=>void
}

export default function Main(props: MainProps){
    return(
        <div className={['Main', montserrat.className, 'flex items-center'].join(' ')}>
            <div className="radialBg"></div>
            <Image src={props.source} alt="bg image" fill ={true} style={{objectFit:"cover"}} className="bgimg"/>
            <div className="float-left ml-[5%] w-[50%]">
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl">ATCONNECT</h1>
            <h3 className={["font-semibold", " text-[2.5em] md:text-[1.1em]"].join(" ")}>
                    I came. I saw. I coded. Join us for a day of fun. 
                </h3>
                <div className="flex gap-4 text-black-color font-bold mx-3 my-3">
                <a className="bg-pale-color w-fit p-4 rounded-xl" onClick={()=>props.handleTileClick(props.link)}>Learn More</a>
                <a href="mailto:info@tjatc.org" className="bg-pale-color w-fit p-4 rounded-xl">Contact Us</a>
                </div>
             </div>
        </div>
    )
}