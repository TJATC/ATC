import Box from "./Box"
import games from "@/(assets)/Games.json"

export default function Leadership(){
    return(
        <div className="flex flex-wrap  mx-[5vw] justify-center items-center">
            {
                games.map(({name, link, image}, index)=>(
                    <Box key={index} name={name} link={link} image={image}/>
                ))
            }
            

        </div>
    )
}