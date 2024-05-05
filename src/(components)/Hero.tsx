import Image from "next/image";
import main from '@/(assets)/1.jpg'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Hero.css"
interface HeroProps{
    source: string
}

export default function Hero(props: HeroProps){
    return(
        <div className={['Hero', montserrat.className].join(' ')}>
            <div className="radialBg"></div>
            <Image src={props.source} alt="bg image" fill ={true} style={{objectFit:"cover"}} className="bgimg"/>
            <div className="Info">
                <h3>Latest Game</h3>
                <h1>Winter Spinner</h1>
                <div  className="Buttons">
                    <button >Learn More</button><button>Contact Us</button>

                </div>
             </div>
        </div>
    )
}