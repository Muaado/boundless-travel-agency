import { graphql, Link } from "gatsby";
import BlogPost from "../components/Post/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { getResortUrl, getVillaUrl, toPlainText } from "../lib/helpers";
import { CollectionStyles } from "../styles/CollectionTemplateStyles";
import Image from "gatsby-plugin-sanity-image";
import { ContactUs } from "../components/Homepage/ContactUs";
import LeftSidebar from "../components/LeftSidebar";

export const query = graphql`
  query CollectionTemplateQuery($type: String!) {
    collections: allSanityCollection(
      filter: { type: { type: { eq: $type } } }
    ) {
      nodes {
        name
        imageWeb {
          ...SanityImage
          alt
        }
        type {
          type
        }
        resorts {
          name
          locationAtoll

          image {
            ...SanityImage
            alt
          }
        }
        villas {
          name
          alternateName

          resort {
            name
          }
          # imageWeb {
          #   ...SanityImage
          #   alt
          # }
        }
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      contactUs {
        address
        email
        phoneOne
        contactPeople {
          name
          image {
            ...SanityImage
            alt
          }
        }
        hours {
          days
          hours
        }
        businessHoursDescription
      }
    }
  }
`;

const CollectionTemplate = (props) => {
  const { data, errors, pageContext } = props;

  const collections = data && data.collections;
  const site = data && data.site;

  const collectionData = {};
  let items = [];

  switch (pageContext.type) {
    case "resort":
      collections.nodes?.forEach(({ resorts }) =>
        items.push({ name: "", records: resorts })
      );

      collectionData.getUrl = (data) => getResortUrl(data);
      break;
    case "villa":
      collections.nodes?.forEach(({ name, villas }) =>
        items.push({ name, records: villas })
      );
      collectionData.getUrl = (data) => getVillaUrl(data);
      break;
  }
  items = items.flat();

  return (
    <Layout>
      <LeftSidebar />
      <CollectionStyles>
        {collections.nodes[0]?.imageWeb && (
          <div className="collection__image">
            {collections.nodes[0].imageWeb &&
              collections.nodes[0].imageWeb.asset && (
                <Image
                  {...collections.nodes[0].imageWeb}
                  alt={collections.nodes[0].imageWeb.alt}
                />
              )}
          </div>
        )}

        {pageContext.type === "resort" && (
          <h1 className="collection__title">Our resorts collection</h1>
        )}
        <div className="collection__list">
          <ul>
            {items.map(({ name, records }) =>
              records.length ? (
                <li
                  data-aos="fade-in"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  key={name}
                  id={name ? name.toLowerCase().split(" ").join("-") : ""}
                >
                  <h2 className="collection__list__title">{name}</h2>
                  <ul className="records">
                    {records.map(
                      ({
                        name,
                        image,
                        locationAtoll,
                        imageWeb,
                        alternateName,
                        resort,
                      }) => (
                        <li key={name}>
                          {image && image.asset ? (
                            <Image {...image} alt={image.alt} />
                          ) : (
                            imageWeb &&
                            imageWeb.asset && (
                              <Image {...imageWeb} alt={imageWeb.alt} />
                            )
                          )}
                          <div className="text">
                            <h3>{name}</h3>
                            {locationAtoll ? (
                              <p>{locationAtoll}</p>
                            ) : (
                              <p>{alternateName}</p>
                            )}

                            <Link
                              to={collectionData.getUrl({
                                name,
                                resortName: resort?.name,
                              })}
                            >
                              <a>Read more...</a>
                            </Link>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>

        <ContactUs contactUs={site.contactUs} />
      </CollectionStyles>
    </Layout>
  );
};

export default CollectionTemplate;
