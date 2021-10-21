import "raf/polyfill";
import "core-js/es/map";
import "core-js/es/set";

import React from "react";
import Header from "./header";

// import "../styles/layout.css";
import { GlobalStyle } from "../styles/GlobalStyle";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  navData,
  location,
}) => (
  <>
    <Header
      location={location}
      navData={navData}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />

    <div>{children}</div>
    <GlobalStyle />

    {/* <footer>
      <div>
        <div>
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer> */}
  </>
);

export default Layout;
