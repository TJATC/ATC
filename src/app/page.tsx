import Image from "next/image";
import styles from "./page.module.css";
import Nav from "@/(components)/Nav"
import Hero from "@/(components)/Hero";
import React from 'react'
// import Slider from 'react-slick'

const ImageSlider = ({images}:any) => {
  const settings = {
      dots:true,
      speed:1000,
      slideToShow:1,
      slideToScroll:1,
      initialSlide:0,
      pauseOnHover:true,
      autoplay:true,
  }
}
  
export default function Home() {
  return (
    <div>
      <Hero source="/src/(assets)/1.jpg"/>
      
      <Nav place={-1} color={'Light'}/>
      
      
    </div>
  );
}
