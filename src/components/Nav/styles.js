import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  z-index: 100;
  height: 47px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`;
export const List = styled.a`
  font-size: 14px;
  padding: 0 8px;
  cursor: pointer;
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 30px;
  width: 30px;
  color: whitesmoke;
  background-color: #C30101;
`;
