import React, { useState } from "react";
import { Container, Title } from "./styles";
import { Framework } from "../Framework/framework";

const Projects = () => {

  let projects = [
    {
      tecnology: "CSS",
      examples: [
        {
          title: "Preprocesadores CSS",
          description:
            "Replica el portal responsive de Netflix.com, elabora la estructura utilizando PUG, para la definición de estilos debes utilizar Less, Sass y Stylus e implementa los recursos necesario para que el código sea reutilizable y óptimo.",
          github:
            "https://github.com/walterxz/Reto-ResponsiveDesign-Preprocesadores",
        },
      ],
    },
  ];



  return (
    <Container>
      <Title>Proyectos</Title>
      {projects.forEach((project) => {
        return <Framework project={project}></Framework>;
      })}
      <textarea rows="10" cols="50">
        {JSON.stringify(projects, undefined, 2)}
      </textarea>
    </Container>
  );
};

export default Projects;
