import React, { useState } from "react";
import { Container, Title } from "./styles";
import { Framework } from "../Framework/framework";

const Projects = () => {
  let portfolio = [
    {
      tecnology: "Vue",
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
    {
      tecnology: "React",
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
    {
      tecnology: "Angular",
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
    {
      tecnology: "Retos CSS",
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
      {portfolio.map((project) => {
        return <Framework project={project}>Hola</Framework>;
      })}
      {/* <textarea rows="10" cols="30">
        {JSON.stringify(projects, undefined, 2)}
      </textarea> */}
    </Container>
  );
};

export default Projects;
