import React from "react";
import { node } from "prop-types";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: node,
};

export default Layout;
