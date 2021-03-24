import styled from "styled-components";
import { keyframes } from 'styled-components'

const animation = keyframes`
 0% {
    filter: blur(4px);
 }
 50% { 
    filter: blur(1px);
 }
 100% { 
    filter: blur(4px);
  }
`;

export const Container = styled.div`
  background-color:black;
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100%;

  animation-name: ${animation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;


