import * as styles from "./blog-post.module.css";
import { differenceInDays, formatDistance, format } from "date-fns";
import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";

import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import { HeroStyles } from "./Homepage/styles";
import { device } from "../styles/deviceSizes";

const BlogPostStyles = styled.article`
  display: flex;
  flex-direction: column;
  /* padding: 0 15%; */

  .header {
    max-height: 80vh;
    width: 100%;
    overflow: hidden;
    img {
      object-position: bottom;
    }
  }

  .content {
    margin-top: 5rem;
    padding: 0 15%;
    display: grid;
    grid-template-columns: 1fr 25rem;
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
      .content__text {
        border: none;
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

    &__text {
      border-right: 1px solid #000;
      padding-right: 4rem;
    }
  }
  .date {
    font-style: italic;
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
`;

function BlogPost(props) {
  const { _rawBody, authors, categories, title, mainImage, publishedAt } =
    props;
  return (
    <BlogPostStyles>
      <div className="header">
        {mainImage && mainImage.asset && (
          <div className="image-container">
            <Image {...mainImage} alt={mainImage.alt} />
            {/* <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          /> */}
          </div>
        )}
      </div>

      {/* <Container> */}
      <div className="content">
        <div className="content__text">
          <h1 className="title">{title}</h1>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
        <aside>
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
        </aside>
      </div>
      {/* </Container> */}
    </BlogPostStyles>
  );
}

export default BlogPost;
