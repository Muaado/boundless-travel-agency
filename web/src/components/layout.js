import React from "react";
import Header from "./header";

import AOS from "aos";
import "aos/dist/aos.css";

// import "../styles/layout.css";
import { GlobalStyle } from "../styles/GlobalStyle";
AOS.init();

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
