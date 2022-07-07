import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.container_lg}>
      Made with ❤️ by{" "}
      <a href="https://github.com/freekboon" target="_blank" rel="noreferrer">
        Freek Boon
      </a>
      .
    </div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
