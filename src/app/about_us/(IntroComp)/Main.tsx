import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});

import "./Main.css"
interface MainProps{
    source: string
}

export default function Main(props: MainProps){
    return(
        <div className={['Main', montserrat.className].join(' ')}>
            <div className="radialBg"></div>
            <Image src={props.source} alt="bg image" fill ={true} style={{objectFit:"cover"}} className="bgimg"/>
            <div className="Info">
                <h1>Powered By Love</h1>
                <h3 className={["font-medium", " text-[.8em] md:text-[1em]"].join(" ")}>We are <a className="a_norm" href="https://tjhsst.fcps.edu/">Thomas Jefferson High School's</a> Assistive Technology Club (TJ ATC). A club that works with elementary students with verbal and motor disabilities in Fairfax County Public Schools.
                 In the midst of a competition focused world, we hope to provide connection between us and other students. 
                </h3>
                
             </div>
        </div>
    )
}