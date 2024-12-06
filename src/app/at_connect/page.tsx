"use client";

import { useEffect, useState } from "react";
import Nav from "@/(components)/Nav";
import Main from "./Main";
import Heading from "@/(components)/Heading";
import Leadership from "../about_us/Leadership";
import atcon_people from "@/(assets)/People_ATcon.json";
import AboutUs from "./about_us";
import SponsorsPage from "./Sponsors";
import PrizesPage from "./Prizes";

export default function About() {
  const sections = ["About Us", "Sponsors", "Prizes", "People"];
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile or desktop
    const updateMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMobileView(); // Initial check
    window.addEventListener("resize", updateMobileView);

    return () => window.removeEventListener("resize", updateMobileView);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sections.map(
        (section) =>
          document.getElementById(section.toLowerCase().replace(" ", "-"))?.offsetTop || 0
      );
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const currentSection = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === sections.length - 1 || scrollPosition < sectionOffsets[index + 1])
      );

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleTileClick = (section: string) => {
    const target = document.getElementById(section.toLowerCase().replace(" ", "-"));
    if (target) {
      window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <div style={{ overflowX: "clip" }}>
      {/* Navigation Bar */}
      <Nav place={5} color="Dark" />

      {/* Main Section with Poster */}
      <Main source="/poster2.png" />

      {/* Tiles Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-8">
        {sections.map((section) => (
          <div
            key={section}
            onClick={() => handleTileClick(section)}
            className="bg-blue-500 text-white text-center py-8 px-4 rounded-lg cursor-pointer shadow-lg hover:bg-blue-700 transition-all"
          >
            <h2 className="text-xl font-semibold">{section}</h2>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div
        className={`fixed ${
          isMobile ? "bottom-0 w-full h-8" : "top-0 w-full h-4"
        } flex z-50`}
        style={{
          backgroundColor: "rgba(220, 220, 220, 0.9)",
        }}
      >
        <div
          className="absolute transition-all duration-200 ease-in-out"
          style={{
            backgroundColor: isMobile ? "rgba(30, 144, 255, 0.5)" : "#1E90FF", // Translucent blue for mobile
            width: isMobile
              ? `${((activeSection + 1) / sections.length) * 100}%`
              : `${((activeSection + 1) / sections.length) * 100}%`,
            height: isMobile ? "100%" : "4px",
          }}
        ></div>
        {sections.map((section, index) => (
          <div
            key={section}
            className={`text-xs text-center ${
              isMobile ? "w-1/4" : "inline-block"
            } flex-1 cursor-pointer font-medium text-black`}
            onClick={() => handleTileClick(section)}
          >
            <span>{section}</span>
          </div>
        ))}
      </div>


      {/* Content Sections */}
      <div id="about-us">
        <Heading link="/about_us" num="1" blurb="About Us" />
        <AboutUs />
      </div>

      <div id="sponsors">
        <Heading link="/sponsors" num="2" blurb="Sponsors" />
        <SponsorsPage />
      </div>

      <div id="prizes">
        <Heading link="/prizes" num="3" blurb="Prizes" />
        <PrizesPage />
      </div>

      <div id="people">
        <Heading link="/people" num="4" blurb="People" />
        <Leadership leaders={atcon_people} />
      </div>
    </div>
  );
}
