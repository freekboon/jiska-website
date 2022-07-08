import React from "react";
import { arrayOf, shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";
import Section from "~components/Section";
import Image, { ImageType } from "~components/Image";
import Job, { JobType } from "~components/Job";
import Skill, { SkillType } from "~components/Skill";
import classnames from "~utils/classnames";

const HomePageTemplate = ({ homePage }) => (
  <div>
    <Section sectionId="intro" className={classes.container_lg}>
      <div className={classes.grid}>
        <div className={classes.col_md_6}>
          <div className={classes.overline_text}>Hello</div>
          <h1 className={classes.title}>{homePage.heading}</h1>
          <p className={classes.body}>{homePage.intro}</p>
        </div>
        <div className={classes.col_md_6}>
          <Image {...homePage.heroImage} />
        </div>
      </div>
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
