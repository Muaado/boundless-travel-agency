import { graphql } from "gatsby";
import BlogPost from "../components/blog-post";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query RestaurantTemplateQuery($id: String!) {
    restaurant: sanityRestaurant(id: { eq: $id }) {
      name
    }
  }
`;

const Restaurant = (props) => {
  const { data, errors } = props;
  const restaurant = data && data.restaurant;
  return (
    <Layout>
      <h1>Restaurant page</h1>
    </Layout>
  );
};

export default Restaurant;
