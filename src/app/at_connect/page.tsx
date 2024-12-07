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

      const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset scroll for better accuracy

      // Find the section the user is currently in
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
        className="fixed top-0 w-full flex z-50"
        style={{
          backgroundColor: "rgba(220, 220, 220, 0.9)",
          position: "fixed", // Keep the bar fixed at the top
        }}
      >
        {/* Blue progress bar (z-index: 0) */}
        <div
          className="absolute transition-all duration-200 ease-in-out"
          style={{
            backgroundColor: "#1E90FF", // Consistent blue across devices
            width: `${((activeSection + 1) / sections.length) * 100}%`, // Update the progress bar width based on section
            height: "4px", // Keep it consistent for both mobile and desktop
            zIndex: 0,
          }}
        ></div>

        {/* Section Labels (z-index: 1) */}
        {sections.map((section, index) => {
          const width = isMobile ? "w-1/4" : "inline-block";
          const activeClass = activeSection === index ? "text-blue-500" : "text-black";

          return (
            <div
              key={section}
              className={`text-xs text-center ${width} flex-1 cursor-pointer font-medium ${activeClass} relative`}
              onClick={() => handleTileClick(section)}
              style={{ zIndex: 1 }}
            >
              <span>{section}</span>
            </div>
          );
        })}
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
