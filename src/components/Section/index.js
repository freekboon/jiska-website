import React, { useContext, useEffect, useRef } from "react";
import { node, string } from "prop-types";
import NavigationContext from "~constants/NavigationContext";

const Section = ({ sectionId, children, className }) => {
  const sectionRef = useRef();
  const { windowPosition, handleSetCurrentSection } =
    useContext(NavigationContext);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const sectionPosition =
      windowPosition + sectionElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (
      sectionPosition < windowPosition + windowHeight / 2 &&
      sectionPosition > windowPosition - windowHeight / 2
    ) {
      handleSetCurrentSection(sectionId);
    }
  }, [sectionId, windowPosition, handleSetCurrentSection]);

  return (
    <section id={sectionId} ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

Section.propTypes = {
  sectionId: string,
  children: node,
  className: string,
};

export default Section;
