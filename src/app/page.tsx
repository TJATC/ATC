"use client"
import Nav from "@/(components)/Nav"
import Hero from "@/(components)/Hero";
import React from 'react'
import Slider from "react-slick";
import Heading from '@/(components)/Heading'
import ImgText from '@/(components)/ImgText'
import Box from "@/(components)/Box3";
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
    
    <div className="my-[3em]">
      <Nav  place={-1} color={'Dark'}/>
  
      <Slider {...settings}>
        {
          images.map((item, index)=>(
              <Hero key = {index} source={item}/>
          ))
          }
      </Slider>
      <Heading link="/about_us" num="1" blurb="About Us"/>
      <Box link="/about_us" name="Learn more about us" image="/main_page/1.jpg"/>
      <Heading link="/games"  num="2" blurb="Games"/>
      <Box link="/games" name="Play games and practice using NuVoice" image="/main_page/2.jpg" />
      <Heading link="/books"  num="3" blurb="Books"/>
      <Box link="/books" name="Here lies books with unique questions" image="/main_page/3.jpg" />
      <Heading link="/signup"  num="4" blurb="Account"/>
      <Box link="/signup" name="Create an Account and record your progress" image="/main_page/4.jpg" />

    </div>
  );
}