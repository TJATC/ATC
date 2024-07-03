import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"

export default function about(){
    return(
        <div>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>
            <Heading link="/about_us" num="1" blurb="About Us"/>
            <Heading link="/games"  num="2" blurb="Games"/>
            <Heading link="/books"  num="3" blurb="Books"/>
            <Heading link="/user/signup"  num="4" blurb="Account"/>
        </div>
    )
}