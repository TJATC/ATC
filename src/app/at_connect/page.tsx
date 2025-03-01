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
import JudgesPage from "./Judges";
import FAQPage from "./FAQ";

export default function About() {
  const sections = ["About Us", "Sponsors", "Prizes", "Judges", "People", "FAQ"];
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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

      // Check if tiles section is scrolled past
      const tiles = document.getElementById("tiles-section");
      if (tiles) {
        setIsSticky(window.scrollY > tiles.offsetTop + tiles.offsetHeight);
      }

    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleTileClick = (section: string) => {
    const target = document.getElementById(section.toLowerCase().replace(" ", "-"));
    if (target) {
      window.scrollTo({ top: target.offsetTop-50, behavior: "smooth" });
    }
  }; 

  return (
    <div style={{ overflowX: "clip" }}>
      {/* Navigation Bar */}
      <Nav place={5} color="Dark" />

      {/* Main Section with Poster */}
      <Main source="/poster2.png" link="About Us" handleTileClick={handleTileClick}/>

      {/* Tiles Section */}
      <div id="tiles-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-8">
        {sections.map((section) => (
          <div key={section} onClick={() => handleTileClick(section)}
            className="bg-slate-600 text-white text-center py-8 px-4 rounded-lg cursor-pointer shadow-lg hover:bg-black-color transition-all"
          >
            <h2 className="text-xl font-semibold">{section}</h2>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className={`fixed top-0 w-full flex z-50 bg-gradient-to-r from-dark-color to-[#083952] pt-4 pb-2 transition-transform duration-300 ${
          isSticky ? "translate-y-0" : "-translate-y-full"}`}>
        {/* Blue progress bar (z-index: 0) */ }
        <div
          className="absolute transition-all duration-200 ease-in-out bg-pale-color top-0"
          style={{
            width: `${((activeSection + 1) / sections.length) * 100}%`, // Update the progress bar width based on section
            height: "4px", // Keep it consistent for both mobile and desktop
            zIndex: 0,
          }}
        ></div>

        {/* Section Labels (z-index: 1) */}
        {sections.map((section, index) => {
          const width = isMobile ? "w-1/4" : "inline-block";
          const activeClass = activeSection === index ? "text-white-color" : "text-slate-400";
          return (
            <div
              key={section}
              className={`text-xs text-center ${width} flex-1 cursor-pointer font-medium uppercase ${activeClass} relative`}
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
        <Heading link="" num="1" blurb="About Us" />
        <AboutUs />
      </div>

      <div id="sponsors">
        <Heading link="" num="2" blurb="Sponsors" />
        <SponsorsPage />
      </div>

      <div id="prizes">
        <Heading link="" num="3" blurb="Prizes" />
        <PrizesPage />
      </div>

      <div id="judges">
        <Heading link="" num="4" blurb="Judges" />
        <JudgesPage />
      </div>

      <div id="people">
        <Heading link="" num="5" blurb="People" />
        <Leadership leaders={atcon_people} />
      </div>

      <div id="faq">
        <Heading link="" num="6" blurb="FAQ" />
        <FAQPage />
      </div>
    </div>
  );
}
