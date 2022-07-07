import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "~public/icons/menu.svg";
import Cross from "~public/icons/cross.svg";
import SelectLocale from "~components/SelectLocale";
import NavigationContext from "~constants/NavigationContext";

const Header = () => {
  const router = useRouter();
  const { pathname, asPath, locale, locales } = router;
  const [showMenu, setShowMenu] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const { sections } = useContext(NavigationContext);

  const closeMenu = () => setShowMenu(false);

  const selectLocale = (event) => {
    if (showMenu) {
      closeMenu();
    }
    return router.push(pathname, pathname, { locale: event.target.value });
  };

  useEffect(() => {
    setCurrentSection(asPath);
  }, [asPath]);

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
        {sections.map(({ sectionId, title }) => (
          <div key={sectionId}>
            <Link href={`#${sectionId}`}>
              <a
                onClick={closeMenu}
                className={
                  classes[
                    `nav_link${
                      currentSection === `/#${sectionId}` ? "_active" : ""
                    }`
                  ]
                }
              >
                {title}
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
        {sections.map(({ sectionId, title }) => (
          <Link href={`#${sectionId}`} key={sectionId}>
            <a
              className={
                classes[
                  `nav_link${
                    currentSection === `/#${sectionId}` ? "_active" : ""
                  }`
                ]
              }
            >
              {title}
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
