import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { HeroStyles } from "../components/Homepage/styles";
import styled from "styled-components";
// export const query = graphql`
//   query NotFoundPageTemplateQuery {
//   #   pages: allSitePage {
//   #     nodes {
//   #       path
//   #       context {
//   #         _type
//   #         name
//   #       }
//   #     }
//   #   }
//   }
// `;

const NotFoundPageStyles = styled.div`
  margin-top: 30rem;
  display: flex;
  flex-direction: column;
  padding: 0 15%;

  .models {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 4rem;
    li {
      margin: 1rem 0;
    }
  }
`;
const NotFoundPage = (props) => {
  // const pages = props.data.pages;

  // let pagesByType = [];

  // pages.nodes.forEach(({ context }) => {
  //   const typeAdded = pagesByType.find(
  //     (value) => value.type === context?._type
  //   );
  //   if (!typeAdded && context?._type !== null)
  //     pagesByType.push({ type: context?._type || "", items: [] });
  // });

  // pages.nodes.forEach(({ path, context }) => {
  //   const foundElement = pagesByType.findIndex(
  //     ({ type }) => type === context?._type
  //   );
  //   if (foundElement > -1) {
  //     // console.log(pagesByType)
  //     pagesByType[foundElement].items.push({ path, name: context?.name });
  //   }
  // });
  // console.log(pagesByType);

  return (
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      {/* <HeroStyles></HeroStyles> */}
      <NotFoundPageStyles>
        <h1>Not found</h1>
        <p>We couldn't find the page you were looking for</p>
        {/* <ul className="models">
          {pagesByType.map(({ type, items }) => (
            <li key={type}>
              <h2>{type}</h2>
              <ul>
                {items.map(({ path, name }) => (
                  <li key={path}>
                    <Link to={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul> */}
      </NotFoundPageStyles>
    </Layout>
  );
};

export default NotFoundPage;
