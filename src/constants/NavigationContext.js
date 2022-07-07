import React, { createContext } from "react";
import { arrayOf, node, shape, string } from "prop-types";

const NavigationContext = createContext({});

export const NavigationProvider = ({ children, sections }) => (
  <NavigationContext.Provider value={{ sections }}>
    {children}
  </NavigationContext.Provider>
);

NavigationProvider.propTypes = {
  children: node,
  sections: arrayOf(
    shape({
      sectionId: string,
      title: string,
    })
  ),
};

export default NavigationContext;
