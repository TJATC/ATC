import Main from "./Main"
import Approach from "./Approach"
import Leadership from "./Leadership"
import Heading from "@/(components)/Heading"
import leadersData_aboutus from "@/(assets)/Leadership.json"

export default function about(){
    return(
        <div>
            <Main source="/about_us.png"/>
            
            <Heading link="#ourapproach" num="1" blurb="Our Approach"/>
            
            <Approach/>
            
            <Heading link="#leadership" num="2" blurb="Leadership"/>
            
            <Leadership leaders={leadersData_aboutus} />

            <Heading link="#history" num="3" blurb="History"/> 
        </div>
    )
}