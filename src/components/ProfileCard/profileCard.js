import React, { useState } from "react";
import {
  Container,
  Description,
  About,
  Photo,
  Button,
  Buttons,
  Card,
  Title,
} from "./styles";
import Image from "next/image";

import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { fab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const clickHandle = () => {
  window.open("https://www.linkedin.com/in/walterxz/", "_blank");
};
const downloadCV = () => {
  window.open("/files/Currículum [ Walter Diaz ].pdf", "_blank");
};

const ProfileCard = () => {
  return (
    <Container>
      <Card>
        <Photo>
          {/* <Image
            src="/img/profile.jpg"
            alt="Picture of the author"
            width={400}
            height={450}
          /> */}
        </Photo>
        <About>
          <Title>Acerca de</Title>
          <Description>
            Cuento con 3 años de experiencia en el desarrollo de aplicaciones
            web, constantemente me encuentro aprendiendo nuevas tecnologías. Mi
            objetivo es pertenecer a una empresa de desarrollo de software en la
            cual me pueda especializar como frontend, aplicar mis conocimientos
            generando un impacto positivo, no me cierro a la posibilidad de
            trabajar como fullstack.
          </Description>
          <Buttons>
            <Button onClick={clickHandle}>
              <FontAwesomeIcon icon={faLinkedin} /> LinkeIn
              <span aria-hidden>_</span>
              <span aria-hidden class="cybr-btn__glitch">
                <FontAwesomeIcon icon={faLinkedin} /> LinkeIn_
              </span>
            </Button>
            <Button onClick={downloadCV}>
              <FontAwesomeIcon icon={faCloudDownloadAlt} /> DescargarCV
              <span aria-hidden>_</span>
              <span aria-hidden class="cybr-btn__glitch">
                <FontAwesomeIcon icon={faCloudDownloadAlt} /> DescargarCV_
              </span>
            </Button>
          </Buttons>
        </About>
      </Card>
    </Container>
  );
};

export default ProfileCard;
