import Card from "./(IntroComp)/Card"
import leaders from "@/(assets)/Leadership.json"

export default function Leadership(){
    return(
        <div className="flex flex-wrap gap-[2em] mx-[5vw] items-center">
            {
                leaders.map(({name, role}, index)=>(
                    <Card key={index} name={name} role={role}/>
                ))
            }
            

        </div>
    )
}