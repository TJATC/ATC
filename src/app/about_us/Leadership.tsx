'use client';
import MediaCard from "./MediaCard";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Leader {
  name: string;
  role: string;
  image: string;
}

interface LeadershipProps {
  leaders: Leader[];
}

export default function Leadership({ leaders }: LeadershipProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  return (
    <div className="m-10">
      <Slider {...settings}>
        {leaders.map(({ name, role, image }, index) => (
          <div key={index} className="px-4"> {/* Adding px-4 for horizontal padding to create space between cards */}
            <MediaCard n={name} r={role} i={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
