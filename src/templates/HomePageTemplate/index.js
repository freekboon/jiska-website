import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";

const HomePageTemplate = () => (
  <div className={classes.root}>
    <section className={classes.section}>
      <h1 className={classes.h1}>Intro</h1>
    </section>
    <section id="about" className={classes.section}>
      About me
    </section>
    <section id="experience" className={classes.section}>
      My experience
    </section>
    <section id="soft-skills" className={classes.section}>
      My soft skills
    </section>
    <section id="skills" className={classes.section}>
      My skills
    </section>
    <section id="contact" className={classes.section}>
      Contact
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
  }),
};

export default HomePageTemplate;
