import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";

const HomePageTemplate = ({ homePage }) => (
  <div className={classes.homepage_template}>
    <h1 className={classes.h1}>{homePage.heading}</h1>
    <h2 className={classes.h2}>{homePage.heading}</h2>
    <h3 className={classes.h3}>{homePage.heading}</h3>
    <h4 className={classes.h4}>{homePage.heading}</h4>
    <p className={classes.body}>{homePage.intro}</p>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
  }),
};

export default HomePageTemplate;
