import React, { useState } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const sections = ["about", "experience", "soft-skills", "skills", "contact"];

const Header = () => {
  const { asPath } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a className={classes.nav_link}>logo</a>
      </Link>
      <button
        className={classes.menu_button}
        onClick={() => setShowMenu(!showMenu)}
      >
        M
      </button>
      <div className={classes[`menu${showMenu ? "_open" : ""}`]}>
        <button onClick={() => setShowMenu(false)}>Close</button>
        {sections.map((section) => (
          <div key={section}>
            <Link href={`#${section}`}>
              <a
                onClick={closeMenu}
                className={
                  classes[
                    `nav_link${asPath === `/#${section}` ? "_active" : ""}`
                  ]
                }
              >
                {section}
                <hr className={classes.nav_link_line} />
              </a>
            </Link>
          </div>
        ))}
        <div>cta</div>
      </div>
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
      <div className={classes.cta}>cta</div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
