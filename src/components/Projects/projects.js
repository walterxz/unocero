import React, { useState } from "react";
import { Container, Title } from "./styles";
import { Framework } from "../Framework/framework";

const Projects = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”

  return (
    <Container>
      <Title>Proyectos</Title>
      <Framework></Framework>
      <Framework></Framework>
      <Framework></Framework>
    </Container>
  );
};

export default Projects;
