import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c30101;
  min-height: 100%;
  clip-path: polygon(14% 0, 20% 4%, 26% 0, 100% 0, 100% 100%, 0 100%, 0 0);
`;

export const ButtonGitHub = styled.button`
  font-size: 24px;
  color: white;
  background-color: black;
  border-radius: 5px;
  position: -webkit-sticky;
  position: sticky;
  top:42px;
  left:30px;
  z-index: 10;
`;
export const Title = styled.div`
  font-family: "Cyber";
  font-size: 42px;
  padding: 8px;
`;
