import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";

const HomePageTemplate = () => (
  <div className={classes.root}>
    <section className={classes.container_lg}>
      <h1 className={classes.h1}>Intro</h1>
    </section>
    <section className={classes.container_lg}>About me</section>
    <section className={classes.container_lg}>My experience</section>
    <section className={classes.container_lg}>My soft skills</section>
    <section className={classes.container_lg}>My skills</section>
    <section className={classes.container_lg}>Contact</section>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
  }),
};

export default HomePageTemplate;
