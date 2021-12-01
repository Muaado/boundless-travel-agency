// import * as styles from "./blog-post-preview-grid.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { device } from "../../styles/deviceSizes";
const BlogPostPreviewGridStyles = styled.div`
  margin-top: 5rem;
  @media ${device.tablet} {
    margin: 0;
  }
`;

function BlogPostPreviewGrid(props) {
  console.log(props);
  return (
    <BlogPostPreviewGridStyles>
      {props.title && <h2>{props.title}</h2>}
      <ul>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </BlogPostPreviewGridStyles>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
