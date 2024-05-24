"use client"
import Nav from "@/(components)/Nav"
import Hero from "@/(components)/Hero";
import React from 'react'
import Slider from "react-slick";
import Heading from '@/(components)/Heading'
import ImgText from '@/(components)/ImgText'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick'

const images = ['/1.jpg', '/2.png', '/3.jpg', '/4.png']

export default function Home() {
  

  const settings = {
    dots:true,
    speed:1000,
    slideToShow:1,
    slideToScroll:1,
    initialSlide:0,
    pauseOnHover:true,
    autoplay:true,
    arrows : false,
    };

  return (
    
    <div>
      <Nav  place={-1} color={'Dark'}/>
  
      <Slider {...settings}>
        {
          images.map((item, index)=>(
              <Hero key = {index} source={item}/>
          ))
          }
      </Slider>
      <Heading num="1" blurb="About Us"/>
      <ImgText source="/1.jpg" width={30}/>
      <Heading num="2" blurb="Games"/>
      <Heading num="3" blurb="Books"/>
      <Heading num="4" blurb="Account"/>
    </div>
  );
}
