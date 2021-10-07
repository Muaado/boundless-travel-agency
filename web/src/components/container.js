import React from "react";

// import * as styles from "./container.module.css";

import styled from "styled-components";

const ContainerStyles = styled.main`
  display: flex;
  flex-direction: column;

  .page-content {
    margin-top: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }
`;

const Container = ({ children }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};

export default Container;
