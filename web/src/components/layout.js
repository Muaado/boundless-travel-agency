import React from "react";
import Header from "./header";

import AOS from "aos";

import { GlobalStyle } from "../styles/GlobalStyle";
import "aos/dist/aos.css";
import Footer from "./Footer";
const windowGlobal = typeof window !== "undefined";
if (windowGlobal) AOS.init();

// import "../styles/layout.css";

const Layout = ({
  children,
  onHideNav,
  onShowNav,
  showNav,
  siteTitle,
  navData,
  logo,
  location,
  contactUs,
}) => (
  <>
    <Header
      logo={logo}
      location={location}
      navData={navData}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />

    <div>{children}</div>
    <Footer logo={logo} contactUs={contactUs} />
    {/* <footer>
      <div>
      <div>
      &copy; {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      </div>
    </footer> */}
    <GlobalStyle />
  </>
);

export default Layout;
