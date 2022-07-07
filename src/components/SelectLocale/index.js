import React from "react";
import classes from "./SelectLocale.module.scss";
import { arrayOf, func, oneOf } from "prop-types";

const localeLabels = {
  en: "English",
  nl: "Nederlands",
  fr: "Français",
};

const SelectLocale = ({ locale, locales, selectLocale }) => (
  <select className={classes.select} onChange={selectLocale} value={locale}>
    {locales.map((locale) => (
      <option key={locale.toString()} value={locale.toString()}>
        {localeLabels[locale]}
      </option>
    ))}
  </select>
);

SelectLocale.propTypes = {
  locale: oneOf(["nl", "en", "fr"]).isRequired,
  locales: arrayOf(oneOf(["nl", "en", "fr"])).isRequired,
  selectLocale: func.isRequired,
};

export default SelectLocale;
