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
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

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
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <HeroStyles>
          <h1> {site.description}</h1>
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

          <JourneyStyles>
            <h1>Start your journey</h1>
            <ul>
              <li>most popular</li>
              <li>experiences</li>
              <li>by traveler</li>
              <li>unique</li>
              <li>view all</li>
            </ul>
          </JourneyStyles>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;

const JourneyStyles = styled.div`
  margin-top: 15rem;
  margin-bottom: 2rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  font-family: "Playfair Display";
  h1 {
    font-size: 7rem;
    letter-spacing: 2rem;
    line-height: 10rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  ul {
    align-self: center;
    display: flex;
    align-items: center;

    li {
      padding: 0 2rem;
      text-transform: uppercase;
      &:not(:last-of-type) {
        border-right: 1px solid #000;
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

  video {
    height: 100%;
    width: 100vw;
    object-fit: fill;
  }
`;
