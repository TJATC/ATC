import MediaCard from "./MediaCard"
import leaders from "@/(assets)/Leadership.json"

export default function Leadership(){
    return(
        <div className="flex flex-wrap gap-[2em] mx-[5vw] justify-center">
            {
                leaders.map(({name, role, image}, index)=>(
                    <MediaCard n={name} r={role} i={image}/>
                ))
            }
        </div>
    )
}