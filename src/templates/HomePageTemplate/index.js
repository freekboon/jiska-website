import React from "react";
import { arrayOf, shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";
import Section from "~components/Section";
import { ImageType } from "~components/Image";
import HeroSection from "~modules/HeroSection";
import Job, { JobType } from "~components/Job";
import Skill, { SkillType } from "~components/Skill";
import classnames from "~utils/classnames";

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
    <Section sectionId="skills" className={classes.container_md}>
      <div className={classes.skills}>
        {homePage.skills.map((skill) => (
          <div
            key={skill.id}
            className={classnames([classes.col_md_4, classes.col_sm_6])}
          >
            <Skill {...skill} />
          </div>
        ))}
      </div>
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
    skills: arrayOf(shape(SkillType)),
  }),
};

export default HomePageTemplate;
