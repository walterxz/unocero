import React, { useState } from "react";
import Image from "next/image";
import { Container, Title, Card, CardsContainer } from "./styles";
import { isPropertyDeclaration } from "typescript";

export const Framework = ({ project }) => {
  console.log(project);
  return (
    <Container reverse={project.alignRight}>
      <Card>
        <Image
          src="/img/vue.png"
          src={project.image || "/img/react.png"}
          alt="Logo"
          width={170}
          height={150}
          // layout="responsive"
        />
        <Title>{project.tecnology}</Title>
      </Card>
      <CardsContainer>
      <Image
          src="/img/vue.png"
          src={"/img/screns/test.png"}
          alt="Logo"
          width={190}
          height={150}
        />
      <Image
          src="/img/vue.png"
          src={"/img/screns/test.png"}
          alt="Logo"
          width={190}
          height={150}
        />
      <Image
          src="/img/vue.png"
          src={"/img/screns/test.png"}
          alt="Logo"
          width={190}
          height={150}
        />
      </CardsContainer>
    </Container>
  );
};
