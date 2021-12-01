import BlogPostPreviewGrid from "../components/Post/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import styled from "styled-components";
import { HeroStyles } from "../components/Homepage/styles";

import Image from "gatsby-plugin-sanity-image";
import { device } from "../styles/deviceSizes";
import { MouseScroll } from "../components/Ui/MouseScroll";

export const query = graphql`
  query MagazinePageQuery {
    posts: allSanityPost(
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

          categories {
            title
          }
        }
      }
    }

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      magazinePageImage {
        ...SanityImage
        alt
      }
    }
  }
`;

const MagazinePageStyles = styled.div`
  padding: 0 15%;

  /* .magazine {
    &__hero {
      height: 80vh;
    }
  } */

  @media ${device.laptopM} {
    padding: 0 10%;
  }
  @media ${device.tablet} {
    padding: 0 1.5rem;
  }

  h1 {
    text-align: center;
    padding: 5rem 0;
  }

  .post-list {
    max-width: 80%;

    @media ${device.laptopM} {
      max-width: 100%;
    }
  }
`;

const MagazinePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout>
      <SEO title="Magazine" />
      <Container>
        <HeroStyles className="height-80vh">
          {data.site.magazinePageImage && data.site.magazinePageImage.asset && (
            <Image
              {...data.site.magazinePageImage}
              alt={data.site.magazinePageImage.alt}
            />
          )}
          <MouseScroll />
        </HeroStyles>

        <MagazinePageStyles>
          <h1>Best resorts for couples</h1>
          <div className="post-list">
            {postNodes && postNodes.length > 0 && (
              <BlogPostPreviewGrid nodes={postNodes} />
            )}
          </div>
        </MagazinePageStyles>
      </Container>
    </Layout>
  );
};

export default MagazinePage;
