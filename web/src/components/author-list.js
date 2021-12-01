// import * as styles from "./author-list.module.css";
import React from "react";
import Image from "gatsby-plugin-sanity-image";
import styled from "styled-components";

const AuthorListStyles = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;

      .image {
        margin-right: 2rem;
        width: 7rem;
        height: 7rem;
        img {
          border-radius: 50%;
        }
      }
    }
  }
`;

function AuthorList({ items, title }) {
  return (
    <AuthorListStyles>
      <h2>{title}</h2>
      <ul>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key}>
              <div className="image">
                {author && author.image && author.image.asset && (
                  <Image {...author.image} alt={author.image.alt} />
                )}
              </div>

              <div>
                <div className="name">
                  {authorName || <em>Missing name</em>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </AuthorListStyles>
  );
}

export default AuthorList;
