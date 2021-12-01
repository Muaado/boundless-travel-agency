// import * as styles from "./blog-post-preview.module.css";
import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { Link } from "gatsby";
import PortableText from "../Ui/portableText";
import React from "react";
import { format } from "date-fns";

import Image from "gatsby-plugin-sanity-image";
import ChevronRight from "../../assets//icons/chevron-right.svg";
import TimeIcon from "../../assets//icons/time.svg";
import CategoryIcon from "../../assets//icons/category.svg";

// import { responsiveTitle3 } from "./typography.module.css";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const BlogPostPreviewStyles = styled.div`
  display: grid;
  grid-template-columns: 25rem 1fr;
  column-gap: 5rem;
  width: 100%;
  margin-bottom: 6rem;
  max-height: 25rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-height: unset;
    max-width: 100vw;
  }
  /* padding: 5rem 0; */

  position: relative;
  &:after {
    /* margin-top: 5rem; */
    content: "";
    position: absolute;

    bottom: -3.4rem;
    left: 0;
    background: var(--grey);

    width: 100%;
    height: 1px;
    /* border-bottom: 1px solid #000; */
  }
  .image-container {
    /* max-height: 70rem; */
    /* height: 80rem; */
    max-height: 80%;
    overflow: hidden;
    width: 100%;

    @media ${device.tablet} {
      max-height: unset;
      height: 30rem;
      max-width: 100%;
      margin-bottom: 3rem;
    }

    @media ${device.mobileL} {
      height: 30vh;
      width: 90vw;
    }
  }
  img {
    /* height: 60rem; */
    /* max-height: 60rem; */
    /* min-width: 100%; */
    object-position: bottom;
  }

  .content {
    height: inherit;
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileL} {
      width: 90vw;
    }

    &__text {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.4rem;
      justify-self: flex-start;
    }
    h2 {
      font-size: 2.4rem;
      margin-bottom: 2rem;
    }
    a {
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary);
    }
  }

  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: var(--primary);
    }
  }

  .footer {
    /* margin-top: 10rem; */
    display: flex;

    @media ${device.tablet} {
      margin-top: 2rem;
    }

    @media ${device.mobileL} {
      flex-direction: column;
    }
    span {
      margin-right: 5rem;
      min-width: max-content;
      font-style: italic;
      font-weight: bold;
      color: var(--primary);
      display: flex;
      align-items: center;

      @media ${device.mobileL} {
        margin: 1rem 0;
      }

      svg {
        height: 2rem;
        width: 2rem;
        margin-right: 1rem;
        path {
          fill: var(--darkGreen);
        }
      }
    }
    /* align-self: flex-end; */
  }
`;

function BlogPostPreview(props) {
  return (
    // <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
    <BlogPostPreviewStyles
    // data-aos="fade-up"
    // data-aos-delay="50"
    // data-aos-duration="1000"
    // data-aos-easing="ease-in-out"
    >
      <div className="image-container">
        {props.mainImage && props.mainImage.asset && (
          <Image {...props.mainImage} alt={props.mainImage.alt} />
        )}
      </div>
      <div className="content">
        <div>
          <h2>{props.title}</h2>
          {props._rawExcerpt && (
            <div className="content__text">
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
          <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
            Read more <ChevronRight />
          </Link>
        </div>
      </div>
      <div className="footer">
        <span>
          <TimeIcon />
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </span>
        {props.categories?.[0] && (
          <span>
            <CategoryIcon />
            {props.categories?.[0]?.title}
          </span>
        )}
      </div>
    </BlogPostPreviewStyles>
    // </Link>
  );
}

export default BlogPostPreview;
