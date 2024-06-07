

interface AwardPorps{
    value: String,
    name: String,
    compToPass: any,
}

export default function Award(props: AwardPorps ){
    return(
        <div className="flex  flex-col flex-[0_0_auto] mx-[1.5em] bg-[var(--pale)] w-[30%] max-w-[25%] text-center h-[70%] rounded-xl shadow-lg">
            <h1 className="tracking-wider font-medium text-[var(--dark)] mt-[1em] text-[1.5em] flex-1">{props.name}</h1>
            <div className="flex flex-[0_0_auto] m-[2em] justify-center">
                {props.compToPass}
            </div>
            <h1 className="text-[var(--dark)] text-[1.5em] flex-[1_1_auto] font-extrabold">{props.value}</h1>
            
        </div>
    )
}   