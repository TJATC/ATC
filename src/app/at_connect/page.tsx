import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"
import Leadership from "../about_us/Leadership"
import atcon_people from "@/(assets)/People_ATcon.json"
import AboutUs from "./about_us"  // Add this import
import SponsorsPage from "./Sponsors"  // Add this import
import PrizesPage from "./Prizes"  
import Approach from "./Approach"
//import 'bootstrap/dist/css/bootstrap.min.css';


export default function about(){
    return(
        <div style={{overflowX: "clip" }}>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>


            <Heading link="/about_us" num="1" blurb="About Us"/>
            <AboutUs />




            <Heading link="/sponsors"  num="2" blurb="Sponsors"/>
            <SponsorsPage />  {/* Add this line */}
             {/*
            <Heading link="/user/signup"  num="4" blurb="Account"/> */}

            <Heading link="/prizes"  num="3" blurb="Prizes"/>
            <PrizesPage />





            <Heading link="/people"  num="4" blurb="People"/>
            <Leadership leaders={atcon_people} />
            

        </div>
    )
}