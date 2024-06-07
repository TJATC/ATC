import Intro from "./Intro"
import Approach from "./Approach"
import Leadership from "./Leadership"
import Heading from "@/(components)/Heading"
export default function about(){
    return(
        <div>
            <Intro/>
            <Heading link="none" num="1" blurb="Our Approach"/>
            <Approach/>
            <Heading link="none" num="2" blurb="Leadership"/>
            <Leadership/>
            <Heading link="none" num="3" blurb="History"/>
        </div>
    )
}