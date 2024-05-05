interface HeadingProps{
    num: string, 
    blurb: string,
}
export default function Heading(props: HeadingProps){
    return(
        <div>
            <h2 className=" text-[3em] mx-[1em] my-[1em] ">
                <span className="font-bold underline-offset-4 underline">{props.num}</span> <span className="font-extralight">{props.blurb}</span>
            </h2>
        </div>
    )
}