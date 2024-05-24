import Image from "next/image";
import classNames from 'classnames';

interface ImgTextProps{
    source: string,
    width: number
}

export default function ImgText(props: ImgTextProps){
    console.log(props.width, 100-props.width)
    return(
        <div className="flex overflow-hidden w- 10 h-48 relative">
            <br></br>
            <div className={classNames(`w-[${props.width}vw]`, 'bg-black')}>
                <p>LOTS OF TEXT AND TEXT AND TEXT</p>
            </div>
            <div className={classNames(`w-[${100-props.width}vw]`, "overflow-hidden bg-white relative")}   >
                
                <Image src={props.source} alt="bg image" layout="fill" style={{objectFit:"cover"}}  sizes="100vw"  />
            </div>
        </div>
    )
}   