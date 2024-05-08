import Image from "next/image";
import "./Box.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});


interface BoxProps{
    name: string, 
    link: string, 
    image: string
}

export default function Box(props: BoxProps){
    console.log(props)
    return(

        <a  href= {props.link} className={['transition transform hover:-translate-y-1 inline-block  h-[33vh] w-[25vw] rounded-lg text-end', "Box2"].join(" ")}>
            <div className={["radialBg","transition ease-in-out delay-150  hover:scale-102  "].join(" ")}></div>
            <Image src={props.image} alt="bg image" fill ={true} objectFit="cover" className={["bgimg","transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "].join(" ")}/>
            <h1 className={['text-align:center p-2 rounded-lg ', "Info", montserrat.className].join(" ")}>{props.name}</h1>
        </a>
    )
}