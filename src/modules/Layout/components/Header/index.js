import React, { useState } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "~public/icons/menu.svg";
import Cross from "~public/icons/cross.svg";
import SelectLocale from "~components/SelectLocale";

const sections = ["about", "experience", "soft-skills", "skills", "contact"];

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, locale, locales } = router;
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const selectLocale = (event) => {
    if (showMenu) {
      closeMenu();
    }
    return router.push(pathname, pathname, { locale: event.target.value });
  };

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a className={classes.nav_link}>logo</a>
      </Link>
      <button
        className={classes.menu_button}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Menu />
      </button>
      <div className={classes[`menu${showMenu ? "_open" : ""}`]}>
        <button
          className={classes.close_button}
          onClick={() => setShowMenu(false)}
        >
          <Cross />
        </button>
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
        <div className={classes.select_locale}>
          <SelectLocale
            locales={locales}
            selectLocale={selectLocale}
            locale={locale}
          />
        </div>
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
      <div className={classes.select_locale_desktop}>
        <SelectLocale
          locales={locales}
          selectLocale={selectLocale}
          locale={locale}
        />
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
