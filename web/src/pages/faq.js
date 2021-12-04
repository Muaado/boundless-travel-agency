import React from "react";
import { graphql, Link } from "gatsby";
// import {
//   filterOutDocsPublishedInTheFuture,
//   filterOutDocsWithoutSlugs,
//   mapEdgesToNodes,
// } from "../lib/helpers";

import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import styled from "styled-components";

import Video from "../components/Video";

import VideoBg from "../assets/videobg.mp4";

import PromoSection from "../components/Homepage/PromoSection";
import AboutUs from "../components/Homepage/AboutUs";
import Journey from "../components/Homepage/Journey";

import Image from "gatsby-plugin-sanity-image";
import Faq from "../components/Homepage/Faq";
import TailorMade from "../components/Homepage/TailorMade";

import { ContactUs } from "../components/Homepage/ContactUs";
import {
  HandCraftedJourneysStyles,
  HeroStyles,
  MagazineStyles,
  NewsLetterStyles,
  SearchBar,
} from "../components/Homepage/styles";
import PortableText from "../components/Ui/portableText";
import { getBlogUrl } from "../lib/helpers";
import WhyBoundlessSection from "../components/Homepage/WhyBoundlessSection";
import NewsletterSection from "../components/Homepage/NewsletterSection";

// import HomepageStaticImage from "../assets/homepage-image.png";

export const query = graphql`
  query FAQPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      faq {
        name
        description
        faqQuestionsAnswers {
          # _id
          answer
          question
        }
      }

      newsLetterTitle
      newsLetterBackground {
        ...SanityImage
        alt
      }

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

const FaqStyles = styled.div`
  /* margin-top: 7rem; */

  .faq {
    &__section {
      margin: 0;
      /* padding: 15rem 10% 10rem 10%; */
      &:nth-of-type(even) {
        background: #faf7f7;
      }
      &:nth-of-type(odd) {
        background: #fff;
      }
    }
  }
`;

const FAQPage = (props) => {
  const { data, errors } = props;
  console.log(props);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout {...props}>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <HeroStyles>
          {/* <h1> {site.description}</h1> */}
          {/* <Video
            videoSrcURL={
              "https://res.cloudinary.com/dqh4ewsaz/video/upload/v1634911148/Tes%20images/hero_vdo_for_boundless_2_-_Large_540p_afaw8u.mov"
            }
          /> */}
        </HeroStyles>
        <FaqStyles className="page-content">
          {site.faq.map((faq) => (
            <Faq path="/faq" key={faq.name} faq={faq} />
          ))}

          <NewsletterSection site={site} />
          <ContactUs contactUs={site.contactUs} />
        </FaqStyles>
      </Container>
    </Layout>
  );
};

export default FAQPage;
