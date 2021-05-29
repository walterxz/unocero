import styled from "styled-components";
import { keyframes } from "styled-components";

const glow = keyframes`
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
  `;

const subglow = keyframes`
  from {
    opacity:1;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 60px cyan, 0 0 70px cyan;
  }
  to {   
    opacity:.5;
    text-shadow: 0 0 20px #fff, 0 0 30px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 60px cyan, 0 0 70px cyan, 0 0 80px cyan;
  }
`;

export const Container = styled.div`
  margin-top: 47px;
  display: flex;
  flex-direction: column;
  height: 150px;
  align-items: center;
`;

export const Title = styled.div`
  @font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
  }
  font-family: Cyber;
  font-size: 34px;

  color: #fff;
  text-align: center;
  text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
    0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;

  /* -webkit-animation: ${glow} 10s ease-in-out infinite alternate;
  -moz-animation: ${glow} 10s ease-in-out infinite alternate;
  animation: ${glow} 10s ease-in-out infinite alternate; */
`;
export const Fusion = styled.div`
  width: 100%;
  height: 47px;
  /* background-color: black; */
  background: linear-gradient(0deg, rgba(0, 255, 255, 0), rgba(0, 0, 0, 1));
`;
export const Subtitle = styled.div`
  font-size: 28px;
  font-family: Cyber;
  color: #fff;
  text-align: center;
  -webkit-animation: ${subglow} 2s ease-in-out infinite alternate;
  -moz-animation: ${subglow} 2s ease-in-out infinite alternate;
  animation: ${subglow} 2s ease-in-out infinite alternate;
`;
