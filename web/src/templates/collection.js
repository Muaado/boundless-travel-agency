import { graphql, Link } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { getResortUrl, getVillaUrl, toPlainText } from "../lib/helpers";
import { CollectionStyles } from "../styles/CollectionTemplateStyles";
import Image from "gatsby-plugin-sanity-image";
import { ContactUs } from "../components/Homepage/ContactUs";

export const query = graphql`
  query CollectionTemplateQuery($id: String!) {
    collection: sanityCollection(_id: { eq: $id }) {
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
        imageWeb {
          ...SanityImage
          alt
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
  const { data, errors } = props;
  console.log(props);

  const collection = data && data.collection;
  const site = data && data.site;

  const { name, type, imageWeb } = collection;

  const collectionData = {};
  let items = [];

  switch (type.type) {
    case "resort":
      items = collection.resorts;
      collectionData.getUrl = (data) => getResortUrl(data);
      break;
    case "villa":
      items = collection.villas;
      collectionData.getUrl = (data) => getVillaUrl(data);
      break;
  }

  return (
    <Layout>
      <CollectionStyles>
        {imageWeb && (
          <div className="collection__image">
            <Image {...imageWeb} alt={imageWeb.alt} />
          </div>
        )}
        <h1 className="collection__title">Our resorts collection</h1>
        <div className="collection__list">
          <ul>
            {items.map(
              ({
                name,
                image,
                locationAtoll,
                imageWeb,
                alternateName,
                resort,
              }) => (
                <li key={name}>
                  {image ? (
                    <Image {...image} alt={image.alt} />
                  ) : (
                    <Image {...imageWeb} alt={imageWeb.alt} />
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
        </div>

        <ContactUs contactUs={site.contactUs} />
      </CollectionStyles>
    </Layout>
  );
};

export default CollectionTemplate;
