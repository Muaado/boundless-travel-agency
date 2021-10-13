import React from "react";
import { graphql } from "gatsby";
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
import { device } from "../styles/deviceSizes";
// import HomepageStaticImage from "../assets/homepage-image.png";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      description
      promoImageWeb {
        ...SanityImage
        alt
      }
      secondImage {
        ...SanityImage
        alt
      }
      aboutUs {
        title
        image {
          ...SanityImage
        }
        _rawDescription(resolveReferences: { maxDepth: 10 })
      }

      FAQ {
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
    }

    collections: allSanityVillasCollection {
      edges {
        node {
          name
          rank

          imageThumb {
            ...SanityImage
            alt
          }
        }
      }
    }
    # posts: allSanityPost(
    #   limit: 6
    #   sort: { fields: [publishedAt], order: DESC }
    #   filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    # ) {
    #   edges {
    #     node {
    #       id
    #       publishedAt
    #       mainImage {
    #         ...SanityImage
    #         alt
    #       }
    #       title
    #       _rawExcerpt
    #       slug {
    #         current
    #       }
    #     }
    #   }
    # }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  console.log(data, "data");
  const { collections } = data;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  // const postNodes = (data || {}).posts
  //   ? mapEdgesToNodes(data.posts)
  //       .filter(filterOutDocsWithoutSlugs)
  //       .filter(filterOutDocsPublishedInTheFuture)
  //   : [];

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
          <Video videoSrcURL={VideoBg} />
        </HeroStyles>
        <div className="page-content">
          <SearchBar>
            <input
              placeholder="Where would you like to go?"
              type="text"
              name="location"
            />
            <input placeholder="Check in" type="date" />
            <input placeholder="Check out" type="date" />
            <input placeholder="Adults" type="number" />
            <input placeholder="Children" type="number" />
            <button className="btn">SEARCH</button>
          </SearchBar>

          <Journey collections={collections} />
          <PromoSection image={site.promoImageWeb} />
          <AboutUs aboutUs={site.aboutUs} />
          <TailorMade />
          <div className="second-image">
            <Image
              {...site.secondImage}
              width={1440}
              alt={site.secondImage.alt}
            />
          </div>
          <Faq faq={site.FAQ.faqQuestionsAnswers} />
          <NewsLetterStyles>
            <h2>{site.newsLetterTitle}</h2>
            <Image
              {...site.newsLetterBackground}
              alt={site.newsLetterBackground.alt}
            />
            <form className="form">
              <h2>Subscribe to our newsletter</h2>
              <div>
                <input placeholder="Enter your email here" />
                <button className="btn">Subscribe</button>
              </div>
            </form>
          </NewsLetterStyles>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const NewsLetterStyles = styled.div`
  margin: 0 -12%;
  margin-bottom: 10rem;
  position: relative;
  /* height: 70rem; */
  color: #fff;
  @media ${device.laptopL} {
    margin: 20rem 0;
    margin-bottom: 10rem;
  }

  h2 {
    position: absolute;
    top: 20%;
    right: 25%;
    color: #fff;
    font-size: 4rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  form {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.45);
    /* 
    &:after {
      padding: 4rem;
      content: "";
      position: absolute;
      top: 0;
      left: -20%;
      width: 120%;
      height: 100%;
      background: #000;
      opacity: 0.4;
    } */
    h2 {
      z-index: 100;
      font-style: italic;
      position: unset;
      font-size: 3.2rem;
      font-weight: normal;
      width: max-content;
      margin-right: 20rem;
    }

    div {
      display: flex;
      input {
        width: 40rem;
        padding: 0 2rem;
      }
      .btn {
        background: var(--primary);
      }
    }
  }
`;

const SearchBar = styled.form`
  padding: 1rem;
  position: absolute;
  top: -3.5rem;

  background: #fff;
  align-self: center;

  display: flex;
  width: 80%;

  filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.25));
  input {
    padding: 1rem;
    border: none;
    width: 20%;

    &[name="location"] {
      width: 60%;
    }
    &:focus {
      outline: none;
    }
    &:not(:last-of-type) {
      border-right: 1px solid #000;
    }
  }

  button {
    border-radius: 2px;
  }
`;
const HeroStyles = styled.div`
  text-align: center;

  color: #fff;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  &:before {
    content: "";
    position: absolute;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  h1 {
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  p {
  }

  video {
    height: 100%;
    width: 100vw;
    object-fit: fill;
  }
`;
