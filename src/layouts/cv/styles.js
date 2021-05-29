import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "nav"
    "header"
    "info-card"
    "projects"
    "story"
    "footer";
`;

const animation = keyframes`
 from {
  -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
 }
 to { 
  -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
 }
`;

export const ContainerImage = styled.div`
  margin-top: 47px;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  overflow: hidden;
  background-color: black;

  animation-name: ${animation};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;

  @media (max-width: 768px) {
    animation-name: none !important;
  }
`;
