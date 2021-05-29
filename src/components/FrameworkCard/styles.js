import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  background-color: whitesmoke;
  width: 90%;
  margin-bottom: 16px;
  align-items: center;
  justify-content: flex-start;

  ${({ reverse }) =>
    reverse &&
    `
      flex-direction: row-reverse;
  `}

clip-path: polygon(
    50px 0,
    100% 0,
    100% calc(100% - 50px),
    calc(100% - 50px) 100%,
    0 100%,
    0 50px
  );

`;

export const Title = styled.h3``;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color:lightgray;
  display: flex;
  align-items: center;
`;

export const Card = styled.div`
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
