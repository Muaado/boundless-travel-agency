import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }

    resorts: allSanityResort {
      nodes {
        name
      }
    }

    villas: allSanityVilla {
      nodes {
        name
      }
    }
  }
`;

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false);

  function handleShowNav() {
    setShowNav(true);
  }

  function handleHideNav() {
    setShowNav(false);
  }

  const navData = useStaticQuery(query);
  if (!navData.site) {
    throw new Error(
      'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
    );
  }

  // cons;

  return (
    <Layout
      navData={{ resorts: navData.resorts, villas: navData.villas }}
      {...props}
      showNav={showNav}
      siteTitle={navData.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
    />
  );
}

export default LayoutContainer;
