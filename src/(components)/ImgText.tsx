import Image from "next/image";
import classNames from 'classnames';
import "./ImgText.css"

interface ImgTextProps{
    source: string,
    width: number,
    height: number,
    head: string,
    text: string
}

export default function ImgText(props: ImgTextProps){
    console.log(props.width, 100-props.width)
    return(
        <div className={[`flex overflow-hidden h-[${props.height}vh] relative`, "ImgText"].join(' ')}>
            
            <div className={`w-[${props.width}vw] p-[3em] items-center `}>
                <div className="text-left ">
                    <h2 className="text-left text-[1em] md:text-[2em] ">
                        <span className="">{props.head}</span> 
                    </h2>
                <p className="text-[1em] md:t   ext-[1.1em]"><span className="">{props.text}</span></p>
                </div>
            </div>

            <div className={[`w-[${100-props.width}vw] overflow-hidden bg-white relative`, "ImgTextChild"].join(' ')}   >
                <div className="radialBg"></div>
                <Image src={props.source} alt="bg image" fill style={{objectFit:"cover"}}  sizes="100vw" className="bgimg" />
            </div>
        </div>
    )
}   