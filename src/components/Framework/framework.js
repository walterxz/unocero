import React, { useState } from "react";
import { Container,Title } from "./styles";

export const Framework = (props) => {
  const project=props.project
  return (
    <Container>
      <Title>{project.tecnology}</Title>
      <div>
          <div>A</div>
          <div>B</div>
          <div>C</div>
      </div>
    </Container>
  );
};
