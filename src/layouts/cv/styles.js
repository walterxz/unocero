import styled from "styled-components";
import {keyframes} from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "nav"
    "header"
    "info-card"
    "projects"
    "footer";
`;

const animation = keyframes`
 0% {
    filter: blur(5px);
 }
 50% { 
    filter: blur(1px);
 }
 100% { 
    filter: blur(5px);
  }
`;

export const ContainerImage = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;

  animation-name: ${animation};
  animation-duration: 8s;
  animation-iteration-count: infinite;

  @media (max-width: 768px) {
    animation-name:none !important;
  }
`;