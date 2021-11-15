import React from "react";
import Header from "./header";

import AOS from "aos";

import { GlobalStyle } from "../styles/GlobalStyle";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
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
  headerDropdownImage,
}) => (
  <>
    <Helmet>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/21013560.js"
      ></script>
    </Helmet>
    <Header
      logo={logo}
      location={location}
      navData={navData}
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
      headerDropdownImage={headerDropdownImage}
    />

    <div
    // onClick={() => onHideNav()}
    >
      {children}
    </div>
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
