import React from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const sections = ["about", "experience", "soft-skills", "skills", "contact"];

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a className={classes.nav_link}>logo</a>
      </Link>
      <nav className={classes.navigation}>
        {sections.map((section) => (
          <Link href={`#${section}`} key={section}>
            <a
              className={
                classes[`nav_link${asPath === `/#${section}` ? "_active" : ""}`]
              }
            >
              {section}
              <hr className={classes.nav_link_line} />
            </a>
          </Link>
        ))}
      </nav>
      <div>cta</div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
