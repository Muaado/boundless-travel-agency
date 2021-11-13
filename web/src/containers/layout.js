import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { getCollectionUrl, getResortUrl, getVillaUrl } from "../lib/helpers";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      logo {
        ...SanityImage
        alt
      }
      contactUs {
        address
        email
        phoneOne
      }

      headerDropdownImage {
        ...SanityImage
        alt
      }
    }

    resorts: allSanityResort {
      nodes {
        name
      }
    }

    # villas: allSanityVilla(filter: { featuredInNav: { eq: true } }) {
    #   nodes {
    #     name
    #     resort {
    #       name
    #     }
    #   }
    # }
    collections: allSanityCollection {
      nodes {
        name
        type {
          type
        }
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

  // const villas = navData.villas.nodes.map(
  //   ({ name, resort }) =>
  //     resort && {
  //       url: getVillaUrl({ name, resortName: resort.name }),
  //       name: name,
  //     }
  // );
  const resorts = navData.resorts.nodes
    .map(({ name }) => {
      if (typeof name === "string")
        return {
          name: name,
          url: getResortUrl({ name }),
        };
    })
    .filter((item) => item !== undefined);

  const collections = navData.collections.nodes.map(({ name, type }) => {
    if (typeof name === "string")
      return {
        name: name,
        url: getCollectionUrl({ name, type }),
      };
  });

  const windowGlobal = typeof window !== "undefined";
  if (windowGlobal) {
    window.addEventListener("scroll", () => {
      let fromTop = window?.scrollY;

      const elements = document.querySelectorAll(".disappear-on-scroll");
      // console.log(elements);
      if (elements) {
        elements.forEach((element) => {
          if (
            element.nodeName !== "HEADER" &&
            element.offsetTop < fromTop + 50
          ) {
            element.classList.add("hide");
          } else if (
            element.nodeName === "HEADER" &&
            element.offsetTop + 200 < fromTop + 100
          ) {
            element.classList.add("hide");
          } else {
            element.classList.remove("hide");
          }
        });
      }
    });
  }

  return (
    <Layout
      navData={{ resorts, collections }}
      {...props}
      showNav={showNav}
      siteTitle={navData.site.title}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
      logo={navData.site.logo}
      contactUs={navData.site.contactUs}
      headerDropdownImage={navData.site.headerDropdownImage}
    />
  );
}

export default LayoutContainer;
