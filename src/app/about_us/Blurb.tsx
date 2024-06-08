interface BlurbProps{
    num: string, 
    blurb: string,
}
export default function Blurb(props: BlurbProps){
    return(
        <div className="text-left w-[22vw] ">
            <h2 className="text-left text-[2em] md:text-[2em] my-[.5em]">
                <span className="">{props.num}</span> 
            </h2>
            <p className="text-[1em] md:text-[1.1em]"><span className="">{props.blurb}</span></p>
        </div>
    )
}