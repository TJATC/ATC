import Image from "next/image";
import main from '@/(assets)/main.jpg'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Hero.css"

export default function Hero(){
    return(
        <div className={['Hero', montserrat.className].join(' ')}>
            <div className="radialBg"></div>
            <Image src={main} alt="bg image" fill ={true} objectFit="cover" className="bgimg"/>
            <div className="Info">
                <h3>Latest Game</h3>
                <h1>Winter Spinner</h1>
                <div  className="Buttons">
                    <button>Learn More</button><button>Contact Us</button>

                </div>
             </div>
        </div>
    )
}