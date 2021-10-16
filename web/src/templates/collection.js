import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query CollectionTemplateQuery($id: String!) {
    collection: sanityCollection(id: { eq: $id }) {
      name
    }
  }
`;

const BlogPostTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return <Layout></Layout>;
};

export default BlogPostTemplate;
