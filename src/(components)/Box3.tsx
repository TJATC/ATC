import Image from "next/image";
import "./Box3.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});


interface BoxProps{
    name: string, 
    link: string, 
    image: string
}

export default function Box3(props: BoxProps){
    console.log(props)
    return(
        <a  href= {props.link} className={['capitalize', "Box3"].join(" ")}>
            <div className={["radialBg"].join(" ")}></div>
            <Image src={props.image} alt="bg image" fill style={{objectFit:"cover"}}  sizes="100vw" className="bgimg" />
            <h1 className={['text-align:center p-2 rounded-lg ', "Info", montserrat.className].join(" ")}>{props.name}</h1>
        </a>

        
    )
}