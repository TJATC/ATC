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

      {/* Vertical Progress Bar with text inside */}
      <div className="fixed left-0 top-0 h-full flex flex-col justify-between z-50">
        <div className="relative h-full w-8 bg-gray-300 rounded">
          <div className="w-full bg-blue-500 transition-all duration-200 ease-in-out" style={{
            height: `${((activeSection + 1) / sections.length) * 100}%`,
          }}></div>
          {sections.map((section, index) => (
            <div
              key={section}
              className="absolute left-0 transform transition-all"
              style={{
                top: `${(index / (sections.length - 1)) * 100}%`,
              }}
            >
              <span
                className={`absolute left-1/2 transform -translate-x-1/2 text-xs font-medium text-white cursor-pointer`}
                style={{
                  position: "absolute",
                  bottom: index === 0 ? "24%" : index === 3 ? "13%" : "40%",  // Adjusted positions for "About Us" and "People"
                  transform: "translateY(50%) rotate(-90deg)", // Rotate text 90 degrees counter-clockwise
                  letterSpacing: "-0.5px", // Bring text closer together
                  whiteSpace: "nowrap", // Prevent text from wrapping
                }}
                onClick={() => handleTileClick(section)}
              >
                {section}
              </span>
            </div>
          ))}
        </div>
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
