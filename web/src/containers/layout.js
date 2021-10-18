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
        resort {
          name
        }
      }
    }
    collections: allSanityCollection {
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

  const villas = navData.villas.nodes.map(
    ({ name, resort }) =>
      resort && {
        url: `/${resort.name.toLowerCase().split(" ").join("-")}/${name
          .toLowerCase()
          .split(" ")
          .join("-")}`,
        name: name,
      }
  );
  const resorts = navData.resorts.nodes
    .map(({ name }) => {
      if (typeof name === "string")
        return {
          name: name,
          url: `/${name.toLowerCase().split(" ").join("-")}`,
        };
    })
    .filter((item) => item !== undefined);

  const collections = navData.collections.nodes.map(({ name }) => {
    if (typeof name === "string")
      return {
        name: name,
        url: `/collection/${name.toLowerCase().split(" ").join("-")}`,
      };
  });

  return (
    <Layout
      navData={{ resorts, villas, collections }}
      {...props}
      showNav={showNav}
      siteTitle={navData.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
    />
  );
}

export default LayoutContainer;
