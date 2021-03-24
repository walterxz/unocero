import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  min-height: 100%;

  clip-path: polygon(
    calc(20% - 100px) 0,
    calc(20% - 50px) calc(120px - 100% ),
    calc(20% ) 0,
    100% 0,
    100% 100%,
    100% 100%,
    0 100%,
    0 0
  );
`;

export const Title = styled.div`
  font-family: "Cyber";
  font-size: 42px;
  padding: 8px;
`;
