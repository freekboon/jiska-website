import React from "react";
import { arrayOf, shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";
import Section from "~components/Section";
import { ImageType } from "~components/Image";
import HeroSection from "~modules/HeroSection";
import Job, { JobType } from "~components/Job";

const HomePageTemplate = ({ homePage }) => (
  <div>
    <Section sectionId="intro" className={classes.container_lg}>
      <HeroSection
        heading={homePage.heading}
        intro={homePage.intro}
        image={homePage.heroImage}
      />
    </Section>
    <Section sectionId="about" className={classes.container_lg}>
      <h2>About me</h2>
    </Section>
    <Section sectionId="experience" className={classes.container_lg}>
      {homePage.previousJobs.map((job, index) => (
        <Job key={job.id} {...job} reverse={index % 2 !== 0} />
      ))}
    </Section>
    <Section sectionId="soft-skills" className={classes.container_lg}>
      <h2>Soft skills</h2>
    </Section>
    <Section sectionId="skills" className={classes.container_lg}>
      <h2>Skills</h2>
    </Section>
    <Section sectionId="contact" className={classes.container_lg}>
      <h2>Contact</h2>
    </Section>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
    intro: string,
    heroImage: shape(ImageType),
    previousJobs: arrayOf(shape(JobType)),
  }),
};

export default HomePageTemplate;
