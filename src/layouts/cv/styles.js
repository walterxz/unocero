import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "nav"
    "header"
    "info-card"
    "projects"
    "footer";
  /* display: flex;
  flex-direction: column;
  background-color: red; */
`;
