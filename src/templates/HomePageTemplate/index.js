import React from "react";
import { shape, string } from "prop-types";
import classes from "./HomePageTemplate.module.scss";

const HomePageTemplate = ({ homePage }) => (
  <div className={classes.root}>
    <h1>{homePage.heading}</h1>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
  }),
};

export default HomePageTemplate;
