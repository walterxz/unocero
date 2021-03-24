import styled from "styled-components";
import { keyframes } from "styled-components";

const glitch = keyframes`
 0% {
    clip-path: var(--clip-one);
  }
  2%, 8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    clip-path: var(--clip-four);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  z-index: 0;
  max-width: 800px;
  height: 100%;
  background-color: whitesmoke;
  padding: 16px;
  margin: 0 32px 32px 32px;
  clip-path: polygon(
    50px 0,
    100% 0,
    100% calc(100% - 50px),
    calc(100% - 50px) 100%,
    0 100%,
    0 50px
  );

  @media (max-width: 768px) {
    padding: 12px 8px;
    flex-direction: column;
    margin: 14px;
  }
`;

export const About = styled.div`
  padding: 16px;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -3;
  height: 220px;
  min-width: 220px;
  background-color: red;
  border-radius: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Title = styled.h1`
  font-family: "Cyber";
`;

export const Button = styled.div`
  @media (max-width: 768px) {
    margin-top: 16px;
    margin-right: 0;
  }

  --primary: hsl(
    var(--primary-hue),
    85%,
    calc(var(--primary-lightness, 50) * 1%)
  );
  --shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
  --primary-hue: 0;
  --primary-lightness: 50;
  --color: hsl(0, 0%, 100%);
  --font-size: 26px;
  --shadow-primary-hue: 180;
  --label-size: 9px;
  --shadow-secondary-hue: 60;
  --shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
  --clip: polygon(
    0 0,
    100% 0,
    100% 100%,
    95% 100%,
    95% 90%,
    85% 90%,
    85% 100%,
    8% 100%,
    0 70%
  );
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(
    0 2%,
    100% 2%,
    100% 95%,
    95% 95%,
    95% 90%,
    85% 90%,
    85% 95%,
    8% 95%,
    0 70%
  );
  --clip-two: polygon(
    0 78%,
    100% 78%,
    100% 100%,
    95% 100%,
    95% 90%,
    85% 90%,
    85% 100%,
    8% 100%,
    0 78%
  );
  --clip-three: polygon(
    0 44%,
    100% 44%,
    100% 54%,
    95% 54%,
    95% 54%,
    85% 54%,
    85% 54%,
    8% 54%,
    0 54%
  );
  --clip-four: polygon(
    0 0,
    100% 0,
    100% 0,
    95% 0,
    95% 0,
    85% 0,
    85% 0,
    8% 0,
    0 0
  );
  --clip-five: polygon(
    0 0,
    100% 0,
    100% 0,
    95% 0,
    95% 0,
    85% 0,
    85% 0,
    8% 0,
    0 0
  );
  --clip-six: polygon(
    0 40%,
    100% 40%,
    100% 85%,
    95% 85%,
    95% 85%,
    85% 85%,
    85% 85%,
    8% 85%,
    0 70%
  );
  --clip-seven: polygon(
    0 63%,
    100% 63%,
    100% 80%,
    95% 80%,
    95% 80%,
    85% 80%,
    85% 80%,
    8% 80%,
    0 70%
  );
  text-align: center;
  margin-right: 16px;

  font-family: "Cyber", sans-serif;
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 240px;
  height: 75px;
  line-height: 75px;
  transition: background 0.2s;

  &:hover {
    --primary: hsl(
      var(--primary-hue),
      85%,
      calc(var(--primary-lightness, 50) * 0.8%)
    );
  }
  &:active {
    --primary: hsl(
      var(--primary-hue),
      85%,
      calc(var(--primary-lightness, 50) * 0.6%)
    );
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: var(--clip);
    z-index: -1;
  }
  &:before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
  }
  &:after {
    background: var(--primary);
  }

  .cybr-btn__tag {
    position: absolute;
    padding: 1px 4px;
    letter-spacing: 1px;
    line-height: 1;
    bottom: -5%;
    right: 5%;
    font-weight: normal;
    color: hsl(0, 0%, 0%);
    font-size: var(--label-size);
  }

  .cybr-btn__glitch {
    position: absolute;
    top: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    right: calc(var(--border) * -1);
    bottom: calc(var(--border) * -1);
    background: var(--shadow-primary);
    text-shadow: 2px 2px var(--shadow-primary),
      -2px -2px var(--shadow-secondary);
    clip-path: var(--clip);
    animation: ${glitch} 2s infinite;
    display: none;
  }

  &:hover .cybr-btn__glitch {
    display: block;
  }

  .cybr-btn__glitch:before {
    content: "";
    position: absolute;
    top: calc(var(--border) * 1);
    right: calc(var(--border) * 1);
    bottom: calc(var(--border) * 1);
    left: calc(var(--border) * 1);
    clip-path: var(--clip);
    background: var(--primary);
    z-index: -1;
  }
`;
