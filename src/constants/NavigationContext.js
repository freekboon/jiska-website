import React, { createContext, useEffect, useState } from "react";
import { arrayOf, node, shape, string } from "prop-types";

const NavigationContext = createContext({});

export const NavigationProvider = ({ children, sections }) => {
  const [windowPosition, setWindowPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState("intro");

  const handleSetCurrentSection = (section) => {
    setCurrentSection(section);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    sectionElement.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setWindowPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        sections,
        windowPosition,
        currentSection,
        handleSetCurrentSection,
        scrollToSection,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: node,
  sections: arrayOf(
    shape({
      sectionId: string,
      title: string,
    })
  ),
};

export default NavigationContext;
