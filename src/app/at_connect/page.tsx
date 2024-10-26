import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"
import Leadership from "../about_us/Leadership"
import atcon_people from "@/(assets)/People_ATcon.json"
import Approach from "./Approach"


export default function about(){
    return(
        <div>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>
            <Heading link="/about_us" num="1" blurb="About Us"/>
            <div className="flex flex-wrap justify-center items-center gap-[2vw] mt-2">
                <div>
                    <Heading link="#" num="🤔" blurb="What is ATConnect?"/>
                    <p>ATConnect is Thomas Jefferson High School for Science and Technology's<p>first-ever fair connecting students and companies across the county</p>to create and share their assistive technology with students with disabilities.</p>
                    <p>The event is organized by TJ's Assistive Technology Club, which emphasizes<p>working with and creating technology for students with disabilities. At the event,</p> students and companies will present their products in separate booths for anyone to join.</p>
                </div>
                <div>
                <Heading link="#" num="💡" blurb="Why ATConnect?"/>
                    <p>We believe Assistive Technology will help bring full unity to the world.<p>This event will showcase the power of Assistive Technology</p>from schools around the district and beyond. We are</p>
                    <p>just as excited to host this event as we are to see what<p>What incredible technology you can come up with!</p></p>
                </div>
                <div>
                <Heading link="#" num="🌠" blurb="Be a part of the magic"/>
                    <p>We're here to deliver the dream and spread awareness to those in need. <p>Whether you're a high school team or a sponsor, Come join us for the</p>first ever TJ Assistive Technology fair, coming February 2025!</p>
                </div>
            </div>
            <Heading link="/people"  num="2" blurb="People"/>
            <Leadership leaders={atcon_people} />

            <Heading link="/books"  num="3" blurb="Sponsors"/>
             {/*
            <Heading link="/user/signup"  num="4" blurb="Account"/> */}
        </div>
    )
}