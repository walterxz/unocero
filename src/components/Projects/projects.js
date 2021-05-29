import React, { useState } from "react";
import { Container, Title, ButtonGitHub } from "./styles";
import { Framework } from "../FrameworkCard/framework";
import data from "./data";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  const portfolio = data;
  return (
    <Container>
      <Title id="Projects">Proyectos</Title>
      <ButtonGitHub>
        <a href="https://github.com/walterxz" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
      </ButtonGitHub>

      {portfolio.map((project) => {
        return <Framework project={project}></Framework>;
      })}
      <h3>API</h3>
      <textarea rows="10" cols="30">
        {JSON.stringify(portfolio, undefined, 2)}
      </textarea>
    </Container>
  );
};

export default Projects;
