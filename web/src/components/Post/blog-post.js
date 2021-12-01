// import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "../container";
import PortableText from "../Ui/portableText";
import React from "react";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { HeroStyles } from "../Homepage/styles";
// import { device } from "../styles/deviceSizes";

import TimeIcon from "../../assets/icons/time.svg";
import CategoryIcon from "../../assets/icons/category.svg";
import { device } from "../../styles/deviceSizes";

const BlogPostStyles = styled.article`
  display: flex;
  flex-direction: column;
  /* padding: 0 15%; */
  padding: 0 15%;
  width: 80%;

  margin-top: 25rem;
  /* padding: 0 15%; */
  display: flex;
  h1 {
    font-size: 4rem;

    @media ${device.tablet} {
      font-size: 3rem !important;
      margin-bottom: 2.5rem !important;
    }
  }
  /* grid-template-columns: 1fr 25rem; */
  gap: 2rem;
  @media ${device.laptopM} {
    padding: 0 10%;
    h1 {
      font-size: 4rem;
    }
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 20rem;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
    width: 100%;
    .content__text {
      border: none;
    }
  }

  .image {
    width: 70rem;
    height: 50rem;

    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.mobileL} {
      margin-bottom: 5rem;
    }
    /* overflow: hidden; */
    img {
      height: 90%;
      object-position: bottom;
    }
  }
  .title {
    margin-bottom: 5rem;
  }

  img {
    width: 100%;
  }
  p {
    margin: 2rem 0;
    color: #000;
  }

  /* &__text {
      border-right: 1px solid #000;
      padding-right: 4rem;
    } */

  .date {
    font-style: italic;
  }

  .footer {
    margin-top: 2rem;
    display: flex;

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
    aside {
      h2 {
        font-size: 2.4rem;
        margin: 2rem 0;
      }
      .name {
        font-size: 1.8rem;
      }
    }
  }
`;

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;
  return (
    <BlogPostStyles>
      {/* <Container> */}

      <div className="image">
        {mainImage && mainImage.asset && (
          // <div className="image-container">
          <Image {...mainImage} alt={mainImage.alt} />
        )}
        <div className="footer">
          <span>
            <TimeIcon />
            {format(new Date(publishedAt), "MMMM Mo, yyyy")}
          </span>
          <span>
            <CategoryIcon />
            {categories?.[0]?.title}
          </span>
        </div>
      </div>
      <div className="content__text">
        <h1 className="title">{title}</h1>
        {_rawBody && <PortableText blocks={_rawBody} />}
      </div>

      {/* <aside>
          {publishedAt && (
            <div className="date">
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? formatDistance(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Mo, yyyy")}
            </div>
          )}
          {authors && <AuthorList items={authors} title="Authors" />}
          {categories && (
            <div>
              <h2>Categories</h2>
              <ul>
                {categories.map((category) => (
                  <li key={category._id} className="name">
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside> */}

      {/* </Container> */}
    </BlogPostStyles>
  );
}

export default BlogPost;
