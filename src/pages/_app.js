import React from "react";
import "~styles/globals.scss";
import { arrayOf, func, shape, string } from "prop-types";
import { NavigationProvider } from "~constants/NavigationContext";

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <NavigationProvider sections={pageProps.allSections}>
      {getLayout(<Component {...pageProps} />)}
    </NavigationProvider>
  );
};

App.propTypes = {
  Component: func,
  pageProps: shape({
    allSections: arrayOf(
      shape({
        sectionId: string,
        title: string,
      })
    ),
  }),
};

export default App;
