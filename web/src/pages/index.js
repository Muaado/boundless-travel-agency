import React from "react";
import { graphql, Link } from "gatsby";
import SanityMuxPlayer from "sanity-mux-player";
// import {
//   filterOutDocsPublishedInTheFuture,
//   filterOutDocsWithoutSlugs,
//   mapEdgesToNodes,
// } from "../lib/helpers";

import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import { navigate } from "gatsby";
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
  SearchBar,
} from "../components/Homepage/styles";
import PortableText from "../components/Ui/portableText";
import { getBlogUrl, getResortUrl, getVillaUrl } from "../lib/helpers";
import WhyBoundlessSection from "../components/Homepage/WhyBoundlessSection";
import NewsletterSection from "../components/Homepage/NewsletterSection";
import LeftSidebar from "../components/LeftSidebar";
import { MouseScroll } from "../components/Ui/MouseScroll";
import Search from "../components/Search";

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
      # videoURL
      video {
        asset {
          _key
          _type
          assetId
          filename
          playbackId
          status
          thumbTime
        }
      }

      handCraftedJourneys {
        title
        description
        image {
          ...SanityImage
          alt
        }
      }
      mobileHeroImage {
        ...SanityImage
        alt
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

    collections: allSanityCollection(
      filter: { type: { type: { eq: "villa" } } }
      limit: 5
    ) {
      edges {
        node {
          name
          rank
          type {
            type
          }

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

    resorts: allSanityResort {
      nodes {
        name
      }
    }
    villas: allSanityVilla(filter: { active: { eq: true } }) {
      nodes {
        name
        resort {
          name
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

  // if (errors) {
  //   return (
  //     <Layout>
  //       <GraphQLErrorList errors={errors} />
  //     </Layout>
  //   );
  // }

  const site = (data || {}).site;
  const resorts = (data || {}).resorts;
  const villas = (data || {}).villas;
  // console.log(site);
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

  const windowGlobal = typeof window !== "undefined";

  return (
    <Layout {...props}>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <LeftSidebar />
        <HeroStyles>
          {/* <h1> {site.description}</h1> */}
          {windowGlobal && window.innerWidth >= 805 ? (
            <SanityMuxPlayer
              assetDocument={site.video.asset}
              autoload={true | false}
              autoplay={true | false}
              className="video"
              height={"100vh"}
              loop={true | false}
              muted={true}
              showControls={false}
              style={{}}
              width={"100vh"}
            />
          ) : (
            site.mobileHeroImage &&
            site.mobileHeroImage.asset && (
              <Image {...site.mobileHeroImage} alt={site.mobileHeroImage.alt} />
            )
          )}

          {/* <Video
            videoSrcURL={
              // VideoBg

              site.videoURL
            }
          /> */}
          <h1 className="disappear-on-scroll">
            A WORLD WHERE ANYTHING IS POSSIBLE
          </h1>
          <MouseScroll />
        </HeroStyles>
        <div className="page-content">
          <Search
            className="homepage-search"
            placeholder="Where would you like to go?"
            resorts={resorts.nodes}
            villas={villas.nodes}
            onChange={(input) => {
              let route;
              if (input) {
                if (input?.type === "resort") {
                  route = getResortUrl({ name: input.value });
                } else {
                  route = getVillaUrl({
                    name: input.value,
                    resortName: input.resortName,
                  });
                }

                navigate(route);
              }
            }}
          />

          <Journey collections={collections} />

          <HandCraftedJourneysStyles
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <p className="subtitle">only the best</p>
            <h2>hand-crafted journeys</h2>
            <p className="description">
              Our collection of Resorts and Villas are hand-picked for their
              style, individuality, service, comfort and uniqueness. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Donec dictum non eros
              sed.
            </p>
            <ul>
              {site.handCraftedJourneys.map(({ title, image, description }) => (
                <li key={title}>
                  {/* <Link to={getBlogUrl(publishedAt, slug.current)}> */}
                  <div className="image-container">
                    {image && image.asset && (
                      <Image {...image} alt={image.alt} />
                    )}
                  </div>
                  <h3>{title}</h3>

                  <p>{description} </p>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
            <Link to="/enquire" className="btn white">
              Enquire
            </Link>
          </HandCraftedJourneysStyles>
          <PromoSection image={site.promoImageWeb} />
          <AboutUs aboutUs={site.aboutUs} />
          <WhyBoundlessSection whyBoundlessImage={site.whyBoundlessImage} />
          <MagazineStyles
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2>Magazine</h2>
            <p className="subtitle">Inspiration</p>
            <ul>
              {magazinePosts.nodes.map(
                ({ title, _rawExcerpt, mainImage, publishedAt, slug }) => (
                  <li key={title}>
                    <Link to={getBlogUrl(publishedAt, slug.current)}>
                      <div className="image-container">
                        {mainImage && mainImage.asset && (
                          <Image {...mainImage} alt={mainImage.alt} />
                        )}
                      </div>
                      <h3>{title}</h3>
                      {_rawExcerpt && <PortableText blocks={_rawExcerpt} />}
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
          <div
            className="second-image"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {site.secondImage && site.secondImage.asset && (
              <Image
                {...site.secondImage}
                width={1440}
                alt={site.secondImage.alt}
              />
            )}
          </div>
          {site.faq.length && <Faq path="/" faq={site.faq[0]} />}
          <NewsletterSection site={site} />
          <ContactUs contactUs={site.contactUs} />
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
