import React from "react";
import classes from "./HeroSection.module.scss";
import Image, { ImageType } from "~components/Image";
import { shape, string } from "prop-types";

const HeroSection = ({ heading, intro, image }) => (
  <div className={classes.grid}>
    <div className={classes.col_md_6}>
      <div className={classes.overline_text}>Hello</div>
      <h1 className={classes.title}>{heading}</h1>
      <p className={classes.body}>{intro}</p>
    </div>
    <div className={classes.col_md_6}>
      <Image {...image} />
    </div>
  </div>
);

HeroSection.propTypes = {
  heading: string,
  intro: string,
  image: shape(ImageType),
};

export default HeroSection;
