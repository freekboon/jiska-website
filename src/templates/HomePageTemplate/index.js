import React from "react";
import { shape, string } from "prop-types";

const HomePageTemplate = ({ homePage }) => (
  <div>
    <h1>{homePage.heading}</h1>
  </div>
);

HomePageTemplate.propTypes = {
  homePage: shape({
    heading: string,
  }),
};

export default HomePageTemplate;
