import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

import Image from "gatsby-plugin-sanity-image";

import { responsiveTitle3 } from "./typography.module.css";
import styled from "styled-components";

const BlogPostPreviewStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  width: 100%;
  margin-bottom: 5rem;

  .image-container {
    /* max-height: 70rem; */
    /* height: 80rem; */
    overflow: hidden;
    width: 100%;
  }
  img {
    /* height: 60rem; */
    /* max-height: 60rem; */
    min-width: 100%;
    object-position: bottom;
  }

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }

  .date {
    margin-top: 10rem;
    font-style: italic;
    align-self: flex-end;
    justify-self: flex-end;
  }
`;

function BlogPostPreview(props) {
  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <BlogPostPreviewStyles>
        <div className="image-container">
          {props.mainImage && props.mainImage.asset && (
            <Image {...props.mainImage} alt={props.mainImage.alt} />
          )}
        </div>
        <div className="content">
          <h2>{props.title}</h2>
          {props._rawExcerpt && (
            <div>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
          <div className="date">
            {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
          </div>
        </div>
      </BlogPostPreviewStyles>
    </Link>
  );
}

export default BlogPostPreview;
