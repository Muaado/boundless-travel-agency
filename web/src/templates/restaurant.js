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
  query RestaurantTemplateQuery($id: String!) {
    restaurant: sanityRestaurant(_id: { eq: $id }) {
      name
      alternateName
      tagline
      halalAvailable
      _rawDescriptionLong
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

const RestaurantPageStyles = styled.div`
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
      /* display: grid; */
      grid-template-columns: 1fr;
    }

    h1,
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .tagline {
      font-style: italic;
    }
    p {
      color: #000;
      margin-top: 2rem;
      /* max-width: 50%; */
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
  const restaurant = data && data.restaurant;
  const site = data && data.site;
  const {
    name,
    alternateName,
    tagline,
    halalAvailable,
    _rawDescriptionLong,
    imageWeb,
    resort,
  } = restaurant;

  return (
    <Layout>
      <RestaurantPageStyles>
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
            <h2>{alternateName}</h2>
            <p className="tagline">{tagline}</p>
            <PortableText blocks={_rawDescriptionLong} />
          </div>

          <Link to={getResortUrl({ name: resort.name })} className="resort">
            <Image {...resort.image} />
            <p>{resort.name}</p>
          </Link>
        </div>
        <ContactUs contactUs={site.contactUs} />
      </RestaurantPageStyles>
    </Layout>
  );
};

export default Restaurant;
