import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";
import Section from "~components/Section";
import { ImageType } from "~components/Image";
import HeroSection from "~modules/HeroSection";

const HomePageTemplate = ({ homePage }) => (
  <div className={classes.root}>
    <Section sectionId="intro" className={classes.section}>
      <HeroSection
        heading={homePage.heading}
        intro={homePage.intro}
        image={homePage.heroImage}
      />
    </Section>
    <Section sectionId="about" className={classes.section}>
      <h2>About me</h2>
    </Section>
    <Section sectionId="experience" className={classes.section}>
      <h2>Experience</h2>
    </Section>
    <Section sectionId="soft-skills" className={classes.section}>
      <h2>Soft skills</h2>
    </Section>
    <Section sectionId="skills" className={classes.section}>
      <h2>Skills</h2>
    </Section>
    <Section sectionId="contact" className={classes.section}>
      <h2>Contact</h2>
    </Section>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
    intro: string,
    heroImage: shape(ImageType),
  }),
};

export default HomePageTemplate;
