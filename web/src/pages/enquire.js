import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
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

export const query = graphql``;

const EnquirePageStyles = styled.div``;

const MagazinePage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title="Magazine" />
      <Container>
        <HeroStyles>
          {/* <Image /> */}
          <MouseScroll />
        </HeroStyles>

        <EnquirePageStyles>{/* <h1>Magazine</h1> */}</EnquirePageStyles>
      </Container>
    </Layout>
  );
};

export default MagazinePage;
