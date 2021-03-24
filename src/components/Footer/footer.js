import React from "react";

import { Container } from "./styles";
import {
  faCloudDownloadAlt,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { fab, faBitcoin, faEthereum, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  // Declara una nueva variable de estado, la cual llamaremos “count”

  return (
    <Container>
      <div>working on the website</div>
      <div>
        <FontAwesomeIcon icon={faBitcoin}></FontAwesomeIcon> <FontAwesomeIcon icon={faEthereum}></FontAwesomeIcon>
      </div>
    </Container>
  );
};

export default Footer;
