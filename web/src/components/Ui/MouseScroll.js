import React from "react";
import styled from "styled-components";
import { device } from "../../styles/deviceSizes";

const MouseScrollStyles = styled.div`
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translate(-50%, 0);

  @media ${device.tabletL} {
    /* bottom: 1rem; */
    display: none;
  }
  body {
    background: #333;
  }

  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .mouse_scroll {
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 100px;
    margin-top: 125px;
  }

  .m_scroll_arrows {
    display: block;
    width: 5px;
    height: 5px;

    border-right: 2px solid white;
    /* border-bottom: 2px solid white; */
    margin: 0 0 3px 4px;

    width: 16px;
    height: 16px;
  }

  .unu {
    margin-top: 1px;
  }

  .unu,
  .doi {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  }

  /* .unu {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  } */

  .container {
    position: absolute;
    top: -5rem;
    -webkit-animation: mouse-wheel 1s infinite;
    -moz-animation: mouse-wheel 1s infinite;
    animation: mouse-wheel 1s infinite;
  }

  .doi {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;

    display: flex;
    align-items: center;
    animation-delay: 0.2s;
    animation-direction: alternate;

    animation: mouse-wheel;
    height: 60px;
    width: 9.5px;
    margin-top: -6px;
    margin-right: 1px;
  }

  .trei {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -webkit-animation-direction: alternate;

    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-bottom: 2px solid white;
    animation-delay: 0.3s;
    animation-direction: alternate;

    margin-top: -20px;
    margin-left: 4.8px;
  }
  /* -webkit-animation: mouse-scroll 1.5s infinite;
    -moz-animation: mouse-scroll 1.5s infinite;
    animation: mouse-scroll 0.5s infinite; */

  .mouse {
    height: 42px;
    width: 24px;
    border-radius: 14px;
    transform: none;
    border: 2px solid white;
    top: 170px;
  }

  .wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: white;
    position: relative;

    height: 4px;
    width: 4px;
    border: 2px solid #fff;
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .wheel {
    -webkit-animation: mouse-wheel 0.6s linear infinite;
    -moz-animation: mouse-wheel 0.6s linear infinite;
    animation: mouse-wheel 0.6s linear infinite;
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      top: 0px;
    }

    50% {
      top: 2px;
    }

    100% {
      top: 0px;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      top: 0px;
    }

    50% {
      top: 2px;
    }

    100% {
      top: 0px;
    }
  }
  @keyframes mouse-wheel {
    0% {
      top: 0px;
    }

    50% {
      top: 2px;
    }

    100% {
      top: 0px;
    }
    /* 0% {
      top: 0px;
    }
    10% {
      top: 0.5px;
    }
    20% {
      top: 1px;
    }
    30% {
      top: 1.5px;
    }
    40% {
      top: 2px;
    }
    50% {
      top: 2.5px;
    }
    60% {
      top: 2px;
    }
    70% {
      top: 1.5px;
    }
    80% {
      top: 1px;
    }
    90% {
      top: 0.5px;
    }
    100% {
      top: 0px;
    } */
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MouseScroll = () => (
  <MouseScrollStyles className="mouse_scroll disappear-on-scroll">
    {/* <div className="mouse">
      <div className="wheel"></div>
    </div> */}
    <div className="container">
      {/* <span className="m_scroll_arrows unu"></span> */}
      <span className="m_scroll_arrows doi"></span>
      <span className="m_scroll_arrows trei"></span>
    </div>
  </MouseScrollStyles>
);
