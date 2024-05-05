import Intro from "./Intro"
import Approach from "./Approach"
import Leadership from "./Leadership"
import Heading from "@/(components)/Heading"
export default function about(){
    return(
        <div>
            <Intro/>
            <Heading num="1" blurb="Our Approach"/>
            <Approach/>
            <Heading num="2" blurb="Leadership"/>
            <Leadership/>
            <Heading num="3" blurb="Awards"/>
        </div>
    )
}