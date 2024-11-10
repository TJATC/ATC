import Nav from "@/(components)/Nav"
import Main from "./Main"
import Heading from "@/(components)/Heading"
import Leadership from "../about_us/Leadership"
import atcon_people from "@/(assets)/People_ATcon.json"
import SponsorsPage from "./Sponsors"  // Add this import
import PrizesPage from "./Prizes"  
import Approach from "./Approach"
import { Carousel, CarouselItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function about(){
    return(
        <div>
            <Nav place = {5} color='Dark'/>
            
            <Main source="/poster2.png"/>
            <Heading link="/about_us" num="1" blurb="About Us"/>
            <div className="flex flex-wrap justify-center items-center gap-[2vw] mt-2">
            <div style={{ position: 'relative' }}>
                    <img
                        src="/ATConnect_1920_1080.png"
                        alt="ATConnect Banner"
                        style={{
                            width: '100%',
                            height: '10%',
                            zIndex: 0
                        }}
                    />

                    {/* Carousel Overlay */}
                    <Carousel
                        interval={null}
                        indicators={true}
                        controls={true}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '10%',
                            width: '30%',
                            zIndex: 5, // Higher zIndex to ensure visibility over image
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                    >
                        <CarouselItem>
                            <div style={{
                                color: 'black',
                                textAlign: 'left',
                                padding: '10px',
                                borderRadius: '5px',
                            }}>
                                <h3>WHAT IS ATCONNECT?</h3>
                                <p>
                                    ATConnect is Thomas Jefferson High School for Science and Technology's first-ever fair connecting
                                    students and companies across the county to create and share their assistive technology with students
                                    with disabilities. The event is organized by TJ's Assistive Technology Club, which emphasizes working
                                    with and creating technology for students with disabilities. At the event, students and companies will
                                    present their products in separate booths for anyone to join.
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div style={{
                                color: 'black',
                                textAlign: 'left',
                                padding: '10px',
                                borderRadius: '5px',
                            }}>
                                <h3>WHY ATCONNECT?</h3>
                                <p>
                                    We believe Assistive Technology will help bring full unity to the world. This event will showcase
                                    the power of Assistive Technology from schools around the district and beyond. We are just as excited
                                    to host this event as we are to see what incredible technology you can come up with!
                                </p>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div style={{
                                color: 'black',
                                textAlign: 'left',
                                padding: '10px',
                                borderRadius: '5px',
                            }}>
                                <h3>BE A PART OF THE MAGIC</h3>
                                <p>
                                    We're here to deliver the dream and spread awareness to those in need. Whether you're a high school
                                    team or a sponsor, come join us for the first-ever TJ Assistive Technology fair, coming February 2025!
                                </p>
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>




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