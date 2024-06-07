import Card from "./(IntroComp)/Card"
import leaders from "@/(assets)/Leadership.json"

export default function Leadership(){
    return(
        <div className="flex flex-wrap gap-[2em] mx-[5vw] justify-center content-around content-stretch content-start md:">
            {
                leaders.map(({name, role, image}, index)=>(
                    <Card key={index} name={name} role={role} img={image}/>
                ))
            }
        </div>
    )
}