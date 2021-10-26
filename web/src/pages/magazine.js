import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import { responsiveTitle1 } from "../components/typography.module.css";
import styled from "styled-components";
import { HeroStyles } from "../components/Homepage/styles";

import Image from "gatsby-plugin-sanity-image";

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
        <HeroStyles>
          <Image
            {...data.site.magazinePageImage}
            alt={data.site.magazinePageImage.alt}
          />
        </HeroStyles>
        <MagazinePageStyles>
          {/* <h1>Magazine</h1> */}
          {postNodes && postNodes.length > 0 && (
            <BlogPostPreviewGrid nodes={postNodes} />
          )}
        </MagazinePageStyles>
      </Container>
    </Layout>
  );
};

export default MagazinePage;
