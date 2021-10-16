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
import PortableText from "../components/portableText";
import { getBlogUrl } from "../lib/helpers";
import WhyBoundlessSection from "../components/Homepage/WhyBoundlessSection";

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

      handCraftedJourneys {
        title
        _rawDescription
        image {
          ...SanityImage
          alt
        }
      }
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
      whyBoundlessImage {
        ...SanityImage
        alt
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

    collections: allSanityCollection {
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
    magazinePosts: allSanityPost(limit: 3) {
      nodes {
        _rawExcerpt
        title
        mainImage {
          ...SanityImage
          alt
        }
        publishedAt
        slug {
          current
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

  const { collections } = data;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const magazinePosts = (data || {}).magazinePosts;
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

          <HandCraftedJourneysStyles>
            <p className="subtitle">only the best</p>
            <h2>hand-crafted journeys</h2>
            <p className="description">
              Our collection of Resorts and Villas are hand-picked for their
              style, individuality, service, comfort and uniqueness. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum non eros
              sed.
            </p>
            <ul>
              {site.handCraftedJourneys.map(
                ({ title, image, _rawDescription }) => (
                  <li key={title}>
                    {/* <Link to={getBlogUrl(publishedAt, slug.current)}> */}
                    <div className="image-container">
                      <Image {...image} alt={image.alt} />
                    </div>
                    <h3>{title}</h3>
                    <PortableText blocks={_rawDescription} />
                    {/* </Link> */}
                  </li>
                )
              )}
            </ul>
            <button className="btn">Enquire</button>
          </HandCraftedJourneysStyles>
          <PromoSection image={site.promoImageWeb} />
          <AboutUs aboutUs={site.aboutUs} />
          <WhyBoundlessSection whyBoundlessImage={site.whyBoundlessImage} />
          <MagazineStyles>
            <h2>Magazine</h2>
            <p className="subtitle">Inspiration</p>
            <ul>
              {magazinePosts.nodes.map(
                ({ title, _rawExcerpt, mainImage, publishedAt, slug }) => (
                  <li key={title}>
                    <Link to={getBlogUrl(publishedAt, slug.current)}>
                      <div className="image-container">
                        <Image {...mainImage} alt={mainImage.alt} />
                      </div>
                      <h3>{title}</h3>
                      <PortableText blocks={_rawExcerpt} />
                    </Link>
                  </li>
                )
              )}
            </ul>

            <Link to="/archive">
              <button className="btn">View More...</button>
            </Link>
          </MagazineStyles>
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
              <h3>Subscribe to our newsletter</h3>
              <div className="container">
                <input placeholder="Enter your email here" />
                <button className="btn">Subscribe</button>
              </div>
            </form>
          </NewsLetterStyles>
          <ContactUs contactUs={site.contactUs} />
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
