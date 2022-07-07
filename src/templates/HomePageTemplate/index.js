import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";

const HomePageTemplate = ({ homePage }) => (
  <div className={classes.root}>
    <section className={classes.section}>
      <h1 className={classes.h1}>{homePage.heading}</h1>
      <p className={classes.body}>{homePage.intro}</p>
    </section>
    <section id="about" className={classes.section}>
      <h2>About me</h2>
    </section>
    <section id="experience" className={classes.section}>
      <h2>Experience</h2>
    </section>
    <section id="soft-skills" className={classes.section}>
      <h2>Soft skills</h2>
    </section>
    <section id="skills" className={classes.section}>
      <h2>Skills</h2>
    </section>
    <section id="contact" className={classes.section}>
      <h2>Contact</h2>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
    intro: string,
  }),
};

export default HomePageTemplate;
