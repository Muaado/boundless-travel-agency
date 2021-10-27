import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../containers/layout";
// import BlogPost from "../components/blog-post";
// import GraphQLErrorList from "../components/graphql-error-list";
// import Container from "../components/container";
// import SEO from "../components/seo";
import { getResortUrl } from "../lib/helpers";
import { HeroStyles } from "../components/Homepage/styles";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import PortableText from "../components/portableText";
import { ContactUs } from "../components/Homepage/ContactUs";
import { device } from "../styles/deviceSizes";

export const query = graphql`
  query ActivityTemplateQuery($id: String!) {
    activity: sanityActivity(_id: { eq: $id }) {
      name
      _rawDescription
      activityIdealFor {
        idealFor
      }
      activityAlternateName {
        name
      }
      activityTags {
        tag
      }
      imageWeb {
        ...SanityImage
        alt
      }

      resort {
        name
        image {
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

const ActivityPageStyles = styled.div`
  .content {
    margin: 10rem 0;
    padding: 0 15%;

    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;

    @media ${device.laptopM} {
      padding: 0 10%;
    }

    @media ${device.tablet} {
      grid-template-columns: 1fr;
    }

    h1,
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    h1 {
      font-size: 4rem;
    }
    .tagline {
      font-style: italic;
    }
    p {
      color: #000;
      margin-top: 2rem;
      /* max-width: 50%; */
    }

    .lists {
      display: flex;
      margin-top: 5rem;
      div {
        margin-right: 3rem;
      }
      ul {
        li {
          font-size: 1.6rem;
        }
      }
      h2 {
        text-transform: capitalize;
      }
    }

    .resort {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      img {
        width: 80%;
        max-height: 40rem;
        @media ${device.tablet} {
          width: 100%;
        }
      }
    }
  }
`;

const Restaurant = (props) => {
  const { data, errors } = props;
  const activity = data && data.activity;
  const site = data && data.site;
  const {
    name,
    alternateName,
    tagline,
    _rawDescription,
    imageWeb,
    activityIdealFor,
    activityTags,
    activityAlternateName,
    resort,
  } = activity;

  return (
    <Layout>
      <ActivityPageStyles>
        <HeroStyles>
          {imageWeb && <Image {...imageWeb} alt={imageWeb.alt} />}
          <h1 className="disappear-on-scroll">{resort.name}</h1>
        </HeroStyles>
        <div
          className="content"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div>
            <h1>{name}</h1>
            <h2>
              {activityAlternateName.map(
                ({ name }, index) =>
                  `${name}${
                    index + 1 !== activityAlternateName.length ? ", " : ""
                  }`
              )}
            </h2>
            <p className="tagline">{tagline}</p>
            <PortableText blocks={_rawDescription} />
            <div className="lists">
              <div>
                <h2>Ideal for</h2>
                <ul>
                  {activityIdealFor.map(({ idealFor }) => (
                    <li key={idealFor}>{idealFor}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Tags</h2>
                <ul>
                  {activityTags.map(({ tag }) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Link to={getResortUrl({ name: resort.name })} className="resort">
            <Image {...resort.image} />
            <p>{resort.name}</p>
          </Link>
        </div>
        <ContactUs contactUs={site.contactUs} />
      </ActivityPageStyles>
    </Layout>
  );
};

export default Restaurant;
